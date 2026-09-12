import json
import re

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to extract the JSON array, parse it, clean up the strings, and write it back.
start_idx = content.find('[')
end_idx = content.rfind('];') + 1

json_str = content[start_idx:end_idx]
try:
    data = json.loads(json_str)
except Exception as e:
    print("Error parsing json:", e)
    exit(1)

def clean_text(text):
    if not isinstance(text, str): return text
    
    # fractions
    text = text.replace(r'\frac{1}{v} - \frac{1}{u} = \frac{1}{f}', '1/v - 1/u = 1/f')
    text = text.replace(r'\frac{1}{f} = \frac{1}{v} - \frac{1}{u}', '1/f = 1/v - 1/u')
    text = text.replace(r'\frac{1}{f}', '1/f')
    text = text.replace(r'\frac{1}{v}', '1/v')
    text = text.replace(r'\frac{1}{u}', '1/u')
    
    # general latex
    text = text.replace(r'\infty', 'infinity')
    text = text.replace(r'\approx', '~')
    text = text.replace(r'\text{', '')
    text = text.replace(r'}', '')
    text = text.replace(r'\angle', 'angle')
    text = text.replace(r'^\circ', ' degrees')
    text = text.replace(r'\Delta', 'Change in ')
    text = text.replace(r'\mu_0', 'mu_0')
    text = text.replace(r'\varepsilon_0', 'epsilon_0')
    text = text.replace(r'\lambda', 'wavelength')
    text = text.replace(r'\nu', 'frequency')
    text = text.replace(r'\mu', 'refractive index')
    text = text.replace(r'\propto', 'is proportional to')
    text = text.replace(r'\ll', '<<')
    text = text.replace(r'\gg', '>>')
    text = text.replace(r'\rightarrow', '->')
    text = text.replace(r'^\circ', ' degrees')
    
    # Clean up single $ signs
    text = text.replace('$', '')
    
    return text

for q in data:
    for key in ['prompt', 'answer', 'hint', 'explanation']:
        if key in q:
            q[key] = clean_text(q[key])
    
    if 'options' in q:
        q['options'] = [clean_text(opt) for opt in q['options']]

new_json_str = json.dumps(data, indent=2)
# Re-insert into content
new_content = content[:start_idx] + new_json_str + '];\n'

with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("LaTeX stripped and file updated.")
