import json

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We can just do a string replacement since we know the exact string
new_content = content.replace('"category": "Class 10th: Science"', '"category": "Class 10th: Chapter 9 — Light: Reflection and Refraction"')

with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Category renamed successfully.")
