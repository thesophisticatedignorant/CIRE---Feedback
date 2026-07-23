from rembg import remove, new_session

with open("public/images/fleet/vehicle_0.png", "rb") as f:
    input_data = f.read()

session = new_session('sam')
out_data = remove(input_data, session=session)

with open("test_sam.png", "wb") as f:
    f.write(out_data)
