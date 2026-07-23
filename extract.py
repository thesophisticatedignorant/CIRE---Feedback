import cv2
import os

video_path = "/Users/thesophisticatedignorant/Downloads/Untitled.mov"
cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = int(cap.get(cv2.CAP_PROP_FPS))
print(f"Total frames: {total_frames}, FPS: {fps}")

# Extract 1 frame per second
for i in range(0, total_frames, fps):
    cap.set(cv2.CAP_PROP_POS_FRAMES, i)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(f"frame_sec_{i//fps}.png", frame)
    else:
        break

cap.release()
print("Done")
