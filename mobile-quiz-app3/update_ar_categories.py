import json
import re

with open('ar50.md', 'r', encoding='utf-8') as f:
    text = f.read()

# We need to map each question number to its section name.
section_matches = re.finditer(r'### (Section \d+:.*?)\s*\(Q', text)
sections = []
for match in section_matches:
    section_title = match.group(1).strip()
    sections.append({'title': section_title, 'start_pos': match.start()})

# Extract question numbers
q_matches = re.finditer(r'\*\*(\d+)\.\*\*', text)
q_to_section = {}
for q_match in q_matches:
    q_num = int(q_match.group(1))
    pos = q_match.start()
    
    # Find which section this question belongs to
    current_sec = "Human Eye Assertion and Reasoning"
    for sec in sections:
        if pos > sec['start_pos']:
            current_sec = "Human Eye Assertion and Reasoning - " + sec['title']
    
    q_to_section[q_num] = current_sec

print(f"Mapped {len(q_to_section)} questions to sections.")

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('[')
end_idx = content.rfind('];') + 1
json_str = content[start_idx:end_idx]

try:
    data = json.loads(json_str)
except Exception as e:
    print("Error parsing json:", e)
    exit(1)

# Update the 50 A&R questions
ar_qs = [q for q in data if q.get('category') == 'Human Eye Assertion and Reasoning']

if len(ar_qs) == 50:
    for i, q in enumerate(ar_qs):
        q_num = i + 1
        new_cat = q_to_section.get(q_num, "Human Eye Assertion and Reasoning")
        q['category'] = new_cat
    
    new_json_str = json.dumps(data, indent=2)
    new_content = content[:start_idx] + new_json_str + '];\n'
    
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated categories for the 50 A&R questions.")
else:
    print(f"Expected 50 A&R questions, found {len(ar_qs)}.")

