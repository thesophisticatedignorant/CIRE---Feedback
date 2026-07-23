import json
import os
from rembg import remove, new_session

with open('public/blustreet_data.js', 'r') as f:
    content = f.read()
    json_str = content.split('=', 1)[1].strip().rstrip(';')
    data = json.loads(json_str)

session = new_session('isnet-general-use')

total = len(data)
for i, item in enumerate(data):
    input_path = f"public/images/fleet/vehicle_{i}.png"
    output_path = f"public{item['image']}"
    
    if os.path.exists(input_path):
        print(f"[{i+1}/{total}] Processing {input_path} with IS-Net + alpha matting...")
        with open(input_path, 'rb') as i_f:
            input_data = i_f.read()
            
            output_data = remove(
                input_data,
                session=session,
                alpha_matting=True,
                alpha_matting_foreground_threshold=240,
                alpha_matting_background_threshold=10,
                alpha_matting_erode_size=10
            )
            
            with open(output_path, 'wb') as o_f:
                o_f.write(output_data)
    else:
        print(f"Missing {input_path}")

print("Done processing backgrounds.")
