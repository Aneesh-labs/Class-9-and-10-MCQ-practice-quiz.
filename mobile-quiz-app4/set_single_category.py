import json
import re

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('[')
end_idx = content.rfind('];') + 1
json_str = content[start_idx:end_idx]

try:
    data = json.loads(json_str)
except Exception as e:
    print('Error parsing JSON:', e)
    exit(1)

count = 0
for q in data:
    if 'Assertion and Reasoning' in q.get('category', ''):
        q['category'] = 'Eye Assertion and reasoning'
        count += 1

print(f'Updated {count} questions to category: "Eye Assertion and reasoning"')

new_content = 'const QUESTIONS = ' + json.dumps(data, indent=2) + ';\n'

with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Successfully written questions.js')
