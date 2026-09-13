import re
import json
import os

with open('ar50.md', 'r', encoding='utf-8') as f:
    text = f.read()

# We can split by "**1.**", "**2.**", etc.
# Let's find all blocks starting with "**\d+\.**"
blocks = re.split(r'\*\*\d+\.\*\*\s*', text)[1:]
new_qs = []

options = [
    "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
    "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
    "(A) is true, but (R) is false.",
    "(A) is false, but (R) is true."
]

for block in blocks:
    # We expect:
    # **Assertion (A):** ...
    # **Reason (R):** ...
    # **Answer:** **(a)**
    # **Explanation:** ...
    
    assertion_match = re.search(r'\*\*Assertion\s*\(A\):\*\*\s*(.*?)(?=\*\*Reason\s*\(R\):\*\*)', block, re.DOTALL)
    reason_match = re.search(r'\*\*Reason\s*\(R\):\*\*\s*(.*?)(?=\*\*Answer:\*\*)', block, re.DOTALL)
    answer_match = re.search(r'\*\*Answer:\*\*\s*\*\*\(([abcd])\)\*\*', block)
    explanation_match = re.search(r'\*\*Explanation:\*\*\s*(.*)', block, re.DOTALL)
    
    if assertion_match and reason_match and answer_match and explanation_match:
        assertion_text = assertion_match.group(1).strip()
        reason_text = reason_match.group(1).strip()
        ans_letter = answer_match.group(1)
        explanation_text = explanation_match.group(1).strip()
        
        prompt = f"Assertion (A): {assertion_text}\nReason (R): {reason_text}"
        
        ans_idx = ord(ans_letter) - ord('a')
        answer_text = options[ans_idx]
        
        q_obj = {
            "prompt": prompt,
            "answer": answer_text,
            "question_type": "both",
            "options": options,
            "category": "Human Eye Assertion and Reasoning",
            "tags": "study,curriculum,physics,eye,assertion_reasoning",
            "hint": "Analyze both the assertion and reason carefully.",
            "explanation": explanation_text,
            "difficulty": 3
        }
        new_qs.append(q_obj)

print(f"Parsed {len(new_qs)} questions.")

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

last_bracket_idx = content.rfind('];')
if last_bracket_idx != -1 and new_qs:
    insert_str = ''
    for q in new_qs:
        insert_str += ',\n  ' + json.dumps(q, indent=2).replace('\n', '\n  ')
    
    new_content = content[:last_bracket_idx] + insert_str + '\n' + content[last_bracket_idx:]
    
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Successfully added the questions to questions.js')
else:
    print('Error finding questions or "];"')
