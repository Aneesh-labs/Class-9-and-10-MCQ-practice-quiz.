"""Question Bank Manager View - List, Search, Filter, Add, Edit, Delete, Import, Export."""
import customtkinter as ctk
from tkinter import filedialog, messagebox
from typing import List, Optional
from ...core.database import DatabaseManager
from ...core.models import Question
from ...core.storage import StorageManager
from ...theme.theme_manager import ThemeManager
from ..components.card import ModernCard, ToastNotification

class QuestionBankView(ctk.CTkFrame):
    def __init__(self, master, db: DatabaseManager, on_data_changed_callback=None, **kwargs):
        self.theme_mgr = ThemeManager()
        super().__init__(master, fg_color="transparent", **kwargs)
        self.db = db
        self.on_data_changed = on_data_changed_callback

        self.editing_question_id: Optional[int] = None
        self._build_ui()
        self.refresh_list()

    def _build_ui(self):
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(2, weight=1)

        # 1. Top Header & Action Buttons
        top_bar = ctk.CTkFrame(self, fg_color="transparent")
        top_bar.grid(row=0, column=0, sticky="ew", padx=24, pady=(16, 8))
        top_bar.grid_columnconfigure(1, weight=1)

        header_frame = ctk.CTkFrame(top_bar, fg_color="transparent")
        header_frame.grid(row=0, column=0, sticky="w")
        
        lbl_title = ctk.CTkLabel(
            header_frame,
            text="Question Bank & Creator",
            font=ctk.CTkFont(size=22, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary")
        )
        lbl_title.pack(anchor="w")

        lbl_subtitle = ctk.CTkLabel(
            header_frame,
            text="Manage your deck, add new flashcards and quiz questions, or import/export data sets.",
            font=ctk.CTkFont(size=12),
            text_color=self.theme_mgr.color("fg_muted")
        )
        lbl_subtitle.pack(anchor="w")

        btn_box = ctk.CTkFrame(top_bar, fg_color="transparent")
        btn_box.grid(row=0, column=2, sticky="e")

        btn_import = ctk.CTkButton(
            btn_box,
            text="📥 Import (JSON/CSV)",
            command=self.import_data,
            width=130,
            fg_color=self.theme_mgr.color("bg_card"),
            hover_color=self.theme_mgr.color("bg_card_secondary")
        )
        btn_import.pack(side="left", padx=4)

        btn_export = ctk.CTkButton(
            btn_box,
            text="📤 Export",
            command=self.export_data,
            width=90,
            fg_color=self.theme_mgr.color("bg_card"),
            hover_color=self.theme_mgr.color("bg_card_secondary")
        )
        btn_export.pack(side="left", padx=4)

        btn_new = ctk.CTkButton(
            btn_box,
            text="➕ Add New Question",
            command=self.open_add_modal,
            width=150,
            fg_color=self.theme_mgr.color("accent_primary"),
            hover_color=self.theme_mgr.color("accent_hover"),
            font=ctk.CTkFont(size=13, weight="bold")
        )
        btn_new.pack(side="left", padx=4)

        # 2. Search & Filter Bar
        filter_bar = ctk.CTkFrame(self, fg_color="transparent")
        filter_bar.grid(row=1, column=0, sticky="ew", padx=24, pady=(4, 10))
        filter_bar.grid_columnconfigure(0, weight=1)

        self.txt_search = ctk.CTkEntry(
            filter_bar,
            placeholder_text="🔍 Search questions by prompt, answer, or tag...",
            height=38,
            fg_color=self.theme_mgr.color("bg_input"),
            border_color=self.theme_mgr.color("border_color")
        )
        self.txt_search.grid(row=0, column=0, sticky="ew", padx=(0, 10))
        self.txt_search.bind("<KeyRelease>", lambda e: self.refresh_list())

        self.cat_filter_var = ctk.StringVar(value="All")
        self.cat_filter_dropdown = ctk.CTkOptionMenu(
            filter_bar,
            variable=self.cat_filter_var,
            values=["All"],
            command=lambda _: self.refresh_list(),
            width=160,
            height=38,
            fg_color=self.theme_mgr.color("bg_card"),
            button_color=self.theme_mgr.color("accent_primary")
        )
        self.cat_filter_dropdown.grid(row=0, column=1, sticky="e")

        # 3. Question Items List (Scrollable)
        self.scroll_list = ctk.CTkScrollableFrame(
            self,
            fg_color=self.theme_mgr.color("bg_card"),
            corner_radius=12,
            border_width=1,
            border_color=self.theme_mgr.color("border_color")
        )
        self.scroll_list.grid(row=2, column=0, sticky="nsew", padx=24, pady=(0, 16))
        self.scroll_list.grid_columnconfigure(0, weight=1)

    def refresh_categories(self):
        cats = ["All"] + self.db.get_categories()
        self.cat_filter_dropdown.configure(values=cats)
        if self.cat_filter_var.get() not in cats:
            self.cat_filter_var.set("All")

    def refresh_list(self):
        self.refresh_categories()
        search_term = self.txt_search.get().strip()
        cat = self.cat_filter_var.get()

        questions = self.db.get_all_questions(search=search_term, category=cat)

        for child in self.scroll_list.winfo_children():
            child.destroy()

        if not questions:
            lbl_empty = ctk.CTkLabel(
                self.scroll_list,
                text="No questions found matching your criteria.\nClick '+ Add New Question' to add one!",
                font=ctk.CTkFont(size=14),
                text_color=self.theme_mgr.color("fg_muted"),
                pady=40
            )
            lbl_empty.pack()
            return

        for q in questions:
            self._render_question_row(q)

    def _render_question_row(self, q: Question):
        card = ctk.CTkFrame(
            self.scroll_list,
            fg_color=self.theme_mgr.color("bg_card_secondary"),
            corner_radius=8,
            border_width=1,
            border_color=self.theme_mgr.color("border_color")
        )
        card.pack(fill="x", padx=8, pady=5)
        card.grid_columnconfigure(1, weight=1)

        # Category badge on left
        cat_badge = ctk.CTkLabel(
            card,
            text=q.category or "General",
            font=ctk.CTkFont(size=11, weight="bold"),
            text_color=self.theme_mgr.color("accent_primary"),
            fg_color=self.theme_mgr.color("bg_card"),
            corner_radius=4,
            padx=8,
            pady=2
        )
        cat_badge.grid(row=0, column=0, padx=12, pady=10, sticky="nw")

        # Question prompt & answer details
        details_frame = ctk.CTkFrame(card, fg_color="transparent")
        details_frame.grid(row=0, column=1, sticky="nsew", padx=4, pady=8)

        lbl_prompt = ctk.CTkLabel(
            details_frame,
            text=q.prompt,
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary"),
            wraplength=600,
            justify="left"
        )
        lbl_prompt.pack(anchor="w")

        lbl_answer = ctk.CTkLabel(
            details_frame,
            text=f"Answer: {q.answer}",
            font=ctk.CTkFont(size=12),
            text_color=self.theme_mgr.color("accent_success"),
            wraplength=600,
            justify="left"
        )
        lbl_answer.pack(anchor="w", pady=(2, 0))

        if q.tags:
            lbl_tags = ctk.CTkLabel(
                details_frame,
                text=f"🏷️ Tags: {q.tags}",
                font=ctk.CTkFont(size=10),
                text_color=self.theme_mgr.color("fg_muted")
            )
            lbl_tags.pack(anchor="w", pady=(1, 0))

        # Action Buttons (Edit / Delete)
        btn_box = ctk.CTkFrame(card, fg_color="transparent")
        btn_box.grid(row=0, column=2, padx=12, pady=10, sticky="ne")

        btn_edit = ctk.CTkButton(
            btn_box,
            text="✏️ Edit",
            command=lambda q_obj=q: self.open_edit_modal(q_obj),
            width=70,
            height=28,
            fg_color=self.theme_mgr.color("bg_card"),
            hover_color=self.theme_mgr.color("accent_primary")
        )
        btn_edit.pack(side="left", padx=4)

        btn_del = ctk.CTkButton(
            btn_box,
            text="🗑️ Delete",
            command=lambda q_id=q.id: self.delete_question(q_id),
            width=70,
            height=28,
            fg_color=self.theme_mgr.color("bg_card"),
            hover_color=self.theme_mgr.color("accent_danger")
        )
        btn_del.pack(side="left", padx=4)

    def delete_question(self, q_id: Optional[int]):
        if not q_id:
            return
        if messagebox.askyesno("Confirm Delete", "Are you sure you want to delete this question?"):
            self.db.delete_question(q_id)
            ToastNotification.show(self, "Question deleted successfully", "info")
            self.refresh_list()
            if self.on_data_changed:
                self.on_data_changed()

    # --- ADD / EDIT MODAL ---
    def open_add_modal(self):
        self._show_question_modal("Add New Question", None)

    def open_edit_modal(self, q: Question):
        self._show_question_modal("Edit Question", q)

    def _show_question_modal(self, title: str, q: Optional[Question]):
        modal = ctk.CTkToplevel(self)
        modal.title(title)
        modal.geometry("640x620")
        modal.transient(self.winfo_toplevel())
        modal.grab_set()

        modal.grid_columnconfigure(0, weight=1)

        lbl_modal_title = ctk.CTkLabel(
            modal,
            text=title,
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=self.theme_mgr.color("fg_primary")
        )
        lbl_modal_title.pack(anchor="w", padx=24, pady=(20, 10))

        scroll_form = ctk.CTkScrollableFrame(modal, height=480, fg_color="transparent")
        scroll_form.pack(fill="both", expand=True, padx=24, pady=6)
        scroll_form.grid_columnconfigure(0, weight=1)

        # Question Prompt
        ctk.CTkLabel(scroll_form, text="Question / Prompt:*", font=ctk.CTkFont(size=12, weight="bold")).pack(anchor="w", pady=(6, 2))
        entry_prompt = ctk.CTkTextbox(scroll_form, height=70, fg_color=self.theme_mgr.color("bg_input"))
        entry_prompt.pack(fill="x")
        if q:
            entry_prompt.insert("1.0", q.prompt)

        # Correct Answer
        ctk.CTkLabel(scroll_form, text="Correct Answer:*", font=ctk.CTkFont(size=12, weight="bold")).pack(anchor="w", pady=(10, 2))
        entry_answer = ctk.CTkEntry(scroll_form, height=36, fg_color=self.theme_mgr.color("bg_input"))
        entry_answer.pack(fill="x")
        if q:
            entry_answer.insert(0, q.answer)

        # Multiple-choice choices
        ctk.CTkLabel(scroll_form, text="Multiple Choice Options (comma-separated):", font=ctk.CTkFont(size=12)).pack(anchor="w", pady=(10, 2))
        entry_options = ctk.CTkEntry(scroll_form, height=36, placeholder_text="e.g. Option A, Option B, Option C", fg_color=self.theme_mgr.color("bg_input"))
        entry_options.pack(fill="x")
        if q and q.options:
            entry_options.insert(0, ", ".join(q.options))

        # Category & Tags
        row_cat = ctk.CTkFrame(scroll_form, fg_color="transparent")
        row_cat.pack(fill="x", pady=10)
        row_cat.grid_columnconfigure((0, 1), weight=1)

        ctk.CTkLabel(row_cat, text="Category:", font=ctk.CTkFont(size=12)).grid(row=0, column=0, sticky="w")
        entry_category = ctk.CTkEntry(row_cat, height=36, fg_color=self.theme_mgr.color("bg_input"))
        entry_category.grid(row=1, column=0, sticky="ew", padx=(0, 6))
        entry_category.insert(0, q.category if q else "General")

        ctk.CTkLabel(row_cat, text="Tags (comma-separated):", font=ctk.CTkFont(size=12)).grid(row=0, column=1, sticky="w")
        entry_tags = ctk.CTkEntry(row_cat, height=36, placeholder_text="e.g. math, basics", fg_color=self.theme_mgr.color("bg_input"))
        entry_tags.grid(row=1, column=1, sticky="ew", padx=(6, 0))
        if q and q.tags:
            entry_tags.insert(0, q.tags)

        # Hint & Explanation
        ctk.CTkLabel(scroll_form, text="Hint (Optional):", font=ctk.CTkFont(size=12)).pack(anchor="w", pady=(6, 2))
        entry_hint = ctk.CTkEntry(scroll_form, height=36, fg_color=self.theme_mgr.color("bg_input"))
        entry_hint.pack(fill="x")
        if q and q.hint:
            entry_hint.insert(0, q.hint)

        ctk.CTkLabel(scroll_form, text="Explanation (Optional):", font=ctk.CTkFont(size=12)).pack(anchor="w", pady=(10, 2))
        entry_explanation = ctk.CTkTextbox(scroll_form, height=60, fg_color=self.theme_mgr.color("bg_input"))
        entry_explanation.pack(fill="x")
        if q and q.explanation:
            entry_explanation.insert("1.0", q.explanation)

        # Save Button
        def save():
            p_text = entry_prompt.get("1.0", "end").strip()
            a_text = entry_answer.get().strip()
            if not p_text or not a_text:
                ToastNotification.show(modal, "Prompt and Answer are required!", "error")
                return

            raw_opts = entry_options.get().strip()
            opts_list = [o.strip() for o in raw_opts.split(",") if o.strip()] if raw_opts else []
            if a_text not in opts_list:
                opts_list.append(a_text)

            cat_val = entry_category.get().strip() or "General"
            tags_val = entry_tags.get().strip()
            hint_val = entry_hint.get().strip()
            exp_val = entry_explanation.get("1.0", "end").strip()

            if q and q.id:
                # Update
                updated = Question(
                    id=q.id,
                    prompt=p_text,
                    answer=a_text,
                    question_type="both",
                    options=opts_list,
                    category=cat_val,
                    tags=tags_val,
                    hint=hint_val,
                    explanation=exp_val
                )
                self.db.update_question(updated)
                ToastNotification.show(self, "Question updated successfully!", "success")
            else:
                # Insert
                new_q = Question(
                    prompt=p_text,
                    answer=a_text,
                    question_type="both",
                    options=opts_list,
                    category=cat_val,
                    tags=tags_val,
                    hint=hint_val,
                    explanation=exp_val
                )
                self.db.add_question(new_q)
                ToastNotification.show(self, "Question added successfully!", "success")

            modal.destroy()
            self.refresh_list()
            if self.on_data_changed:
                self.on_data_changed()

        btn_save = ctk.CTkButton(
            modal,
            text="💾 Save Question",
            command=save,
            height=40,
            font=ctk.CTkFont(size=14, weight="bold"),
            fg_color=self.theme_mgr.color("accent_primary"),
            hover_color=self.theme_mgr.color("accent_hover")
        )
        btn_save.pack(fill="x", padx=24, pady=16)

    # --- IMPORT / EXPORT ---
    def import_data(self):
        file_path = filedialog.askopenfilename(
            title="Import Questions",
            filetypes=[("JSON Files", "*.json"), ("CSV Files", "*.csv"), ("All Files", "*.*")]
        )
        if not file_path:
            return

        if file_path.endswith(".json"):
            items = StorageManager.import_from_json(file_path)
        elif file_path.endswith(".csv"):
            items = StorageManager.import_from_csv(file_path)
        else:
            ToastNotification.show(self, "Unsupported file format (use .json or .csv)", "error")
            return

        count = 0
        for item in items:
            self.db.add_question(item)
            count += 1

        ToastNotification.show(self, f"Successfully imported {count} questions!", "success")
        self.refresh_list()
        if self.on_data_changed:
            self.on_data_changed()

    def export_data(self):
        file_path = filedialog.asksaveasfilename(
            title="Export Questions",
            defaultextension=".json",
            filetypes=[("JSON Files", "*.json"), ("CSV Files", "*.csv")]
        )
        if not file_path:
            return

        questions = self.db.get_all_questions()
        if file_path.endswith(".csv"):
            success = StorageManager.export_to_csv(questions, file_path)
        else:
            success = StorageManager.export_to_json(questions, file_path)

        if success:
            ToastNotification.show(self, f"Exported {len(questions)} questions successfully!", "success")
        else:
            ToastNotification.show(self, "Failed to export data", "error")
