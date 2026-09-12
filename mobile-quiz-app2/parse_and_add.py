import re
import json
import os

with open('mcq100.md', 'r', encoding='utf-8') as f:
    text = f.read()

# The format is like:
# ### 1. Prompt text
# A. Option A
# B. Option B
# C. Option C
# D. Option D
# **Answer: X**
# *Rationale:* explanation text

# We can split by "### "
blocks = text.split("### ")[1:]
new_qs = []

for block in blocks:
    lines = [line.strip() for line in block.strip().split('\n') if line.strip()]
    if not lines: continue
    
    # Extract prompt
    # "1. When an opaque..."
    prompt_match = re.match(r'^\d+\.\s+(.*)', lines[0])
    if not prompt_match: continue
    prompt = prompt_match.group(1).strip()
    
    options = []
    answer_letter = None
    explanation = ""
    
    for line in lines[1:]:
        if line.startswith('A. '): options.append(line[3:].strip())
        elif line.startswith('B. '): options.append(line[3:].strip())
        elif line.startswith('C. '): options.append(line[3:].strip())
        elif line.startswith('D. '): options.append(line[3:].strip())
        elif line.startswith('**Answer:'):
            # **Answer: B**
            ans_match = re.search(r'\*\*Answer:\s+([A-D])\*\*', line)
            if ans_match:
                answer_letter = ans_match.group(1)
        elif line.startswith('*Rationale:*'):
            explanation = line.replace('*Rationale:*', '').strip()
    
    # Some questions might not strictly have 4 options but let's assume they do based on the text.
    if len(options) == 4 and answer_letter:
        ans_idx = ord(answer_letter) - ord('A')
        answer_text = options[ans_idx]
        
        q_obj = {
            "prompt": prompt,
            "answer": answer_text,
            "question_type": "both",
            "options": options,
            "category": "Class 10th: Science",
            "tags": "study,curriculum,light,physics",
            "hint": "Think about the principles of light reflection and refraction.",
            "explanation": explanation,
            "difficulty": 2
        }
        new_qs.append(q_obj)

print(f"Parsed {len(new_qs)} questions.")

# Append to questions.js
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
