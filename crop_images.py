import os
try:
    from PIL import Image
except ImportError:
    print("Pillow library is not installed. Installing it now...")
    os.system("python3 -m pip install Pillow")
    from PIL import Image

def crop_transparent_pixels(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            cropped_img = img.crop(bbox)
            cropped_img.save(image_path)
            print(f"Successfully cropped: {os.path.basename(image_path)}")
        else:
            print(f"Empty or fully transparent image: {os.path.basename(image_path)}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

directory = os.path.dirname(os.path.abspath(__file__))

print(f"Scanning directory recursively: {directory}")
for root, dirs, files in os.walk(directory):
    # skip node_modules to avoid scanning thousands of unrelated files
    if 'node_modules' in dirs:
        dirs.remove('node_modules')
    if '.git' in dirs:
        dirs.remove('.git')
    
    for filename in files:
        if filename.lower().endswith(".png"):
            file_path = os.path.join(root, filename)
            crop_transparent_pixels(file_path)

print("Done processing images!")
