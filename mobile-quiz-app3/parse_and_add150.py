import re
import json
import os

with open('mcq150.md', 'r', encoding='utf-8') as f:
    text = f.read()

# We can split by "#### " since these questions use "#### 1. " instead of "### 1. "
blocks = text.split("#### ")[1:]
new_qs = []

for block in blocks:
    lines = [line.strip() for line in block.strip().split('\n') if line.strip()]
    if not lines: continue
    
    # Extract prompt
    # "1. On which structure..."
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
            ans_match = re.search(r'\*\*Answer:\s+([A-D])\*\*', line)
            if ans_match:
                answer_letter = ans_match.group(1)
        elif line.startswith('*Rationale:*'):
            explanation = line.replace('*Rationale:*', '').strip()
    
    if len(options) == 4 and answer_letter:
        ans_idx = ord(answer_letter) - ord('A')
        answer_text = options[ans_idx]
        
        q_obj = {
            "prompt": prompt,
            "answer": answer_text,
            "question_type": "both",
            "options": options,
            "category": "Class 10th: Chapter 10 — The Human Eye and the Colourful World",
            "tags": "study,curriculum,physics,eye",
            "hint": "Think about the principles related to the human eye and colorful world.",
            "explanation": explanation,
            "difficulty": 2
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
