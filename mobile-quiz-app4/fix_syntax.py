with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace ]]; with ]; at the end of the file
if content.strip().endswith(']];'):
    content = content.replace(']];', '];')
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed syntax error.")
else:
    print("No syntax error found at the end of the file.")
