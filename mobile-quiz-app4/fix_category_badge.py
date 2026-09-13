import re

with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
found_first = False

for line in lines:
    if 'const categoryBadge =' in line:
        if not found_first:
            found_first = True
            new_lines.append(line)
        else:
            # Skip the second declaration
            print('Removed duplicate categoryBadge declaration.')
            continue
    else:
        new_lines.append(line)

with open('app.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('app.js updated successfully.')
