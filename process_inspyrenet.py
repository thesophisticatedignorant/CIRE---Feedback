import json
import os
import io
from PIL import Image
from transparent_background import Remover

print("Initializing Remover (InSPyReNet) and downloading weights if needed...")
remover = Remover()
print("Remover initialized successfully.")

with open('public/blustreet_data.js', 'r') as f:
    content = f.read()
    json_str = content.split('=', 1)[1].strip().rstrip(';')
    data = json.loads(json_str)

total = len(data)
for i, item in enumerate(data):
    input_path = f"public/images/fleet/vehicle_{i}.png"
    output_path = f"public{item['image']}"
    
    if os.path.exists(input_path):
        print(f"[{i+1}/{total}] Processing {input_path}...")
        img = Image.open(input_path).convert('RGB')
        
        # InSPyReNet uses highly refined boundaries
        out = remover.process(img)
        
        out.save(output_path)
    else:
        print(f"Missing {input_path}")

print("Done processing backgrounds.")
