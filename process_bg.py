import json
import os
import io
import time
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
        t0 = time.time()
        print(f"[{i+1}/{total}] Processing {input_path} with isnet+alpha_matting...", flush=True)
        with open(input_path, 'rb') as i_f:
            input_data = i_f.read()
            
            output_data = remove(
                input_data,
                session=session,
                alpha_matting=True,
                alpha_matting_foreground_threshold=240,
                alpha_matting_background_threshold=15,
                alpha_matting_erode_size=15
            )
            
            with open(output_path, 'wb') as o_f:
                o_f.write(output_data)
        print(f" -> took {time.time()-t0:.2f}s", flush=True)
    else:
        print(f"Missing {input_path}", flush=True)

print("Done processing backgrounds.", flush=True)
