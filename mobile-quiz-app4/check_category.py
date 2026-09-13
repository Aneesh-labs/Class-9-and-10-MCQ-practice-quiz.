import json

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Try to extract the JSON array to count
# content starts with "const QUESTIONS = [" and ends with "];"
try:
    json_str = content[content.find('['):content.rfind('];')+1]
    data = json.loads(json_str)
    count = 0
    for q in data:
        if q.get('category') == 'Class 10th: Science':
            count += 1
    print(f"Found {count} questions with 'Class 10th: Science'.")
except Exception as e:
    print("Error parsing:", e)
