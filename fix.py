import re
import sys

def main():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. CSS
        css = '''
      .popup-share-icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: #636366;
        font-size: 11px;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .popup-share-icon:hover {
        color: #888;
      }
'''
        if '.popup-share-icon {' not in content:
            content = content.replace('.popup-title {', css + '\n      .popup-title {')

        # 2. Add share icon to all popup-titlebar
        def replace_titlebar(m):
            title = m.group(1)
            shareTitle = title.strip().replace("'", "\\'")
            return f'<span class="popup-title">{title}</span>\n          <span class="popup-share-icon" title="Share Link" onclick="copyShareUrl(\'file\', \'{shareTitle}\', this)"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>\n        </div>'

        content = re.sub(r'<span class="popup-title">([^<]+)</span>\s*</div>', replace_titlebar, content)

        # 3. Fix openImagePopup
        old_share_btn = '<span class="popup-control share-btn" style="cursor:pointer; margin-right:8px; display: flex; align-items: center; justify-content: center;" title="Share Link" onclick="copyShareUrl(\'file\', \'${title}\', this)"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #636366; font-size: 11px;"></i></span>'
        content = content.replace(old_share_btn, '')

        # 4. Update openImagePopup to fix sketch sizes
        content = content.replace('popup.style.paddingBottom = "0px";', '''popup.style.paddingBottom = "0px";

        if (title.toLowerCase().startsWith("sketch")) {
            popup.style.width = "400px";
            popup.style.height = "550px";
            const img = popup.querySelector("img");
            if (img) {
                img.style.height = "100%";
                img.style.objectFit = "cover";
            }
        }''')

        # 5. Fix handleFileSingleClick
        old_single_click = '''          if (window.innerWidth <= 768 && selectedColumnIndex === index) {
            if (clickedFile.type === "folder") {
                selectFolder(clickedFile.targetFolder);
            } else {
                handleFileDoubleClick(clickedFile.name.replace(/\.png$/, ""));
            }
            return;
          }'''
        new_single_click = '''          if (window.innerWidth <= 768) {
            if (clickedFile.type === "folder") {
                selectFolder(clickedFile.targetFolder);
            } else {
                handleFileDoubleClick(clickedFile.name.replace(/\.png$/, ""));
            }
            return;
          }'''
        content = content.replace(old_single_click, new_single_click)

        # 6. Fix handleFileDoubleClick
        old_double_click = '''// SB Logo video trigger
        if (fileName === "logo.mp4") {
          openPopup("popup-sb-logo");
          return;
        }'''
        new_double_click = '''// SB Logo video trigger
        if (fileName === "logo.mp4" || fileName === "collection 1 logo.mp4") {
          openPopup("popup-sb-logo");
          return;
        }
        
        if (fileName === "collection narrative.rfd") {
          openPopup("popup-collection-overview");
          return;
        }'''
        content = content.replace(old_double_click, new_double_click)

        # 7. Remove duplicate onclick
        content = content.replace('onclick="copyShareLink()"\\n              style="', 'style="')
        content = content.replace('onclick="copyShareLink()"\\n                style="', 'style="')
        content = content.replace('onclick="copyShareLink()"\\n                  style="', 'style="')
        # Wait, the exact string is:
        #             onclick="copyShareLink()"
        #             style="
        # Let's use regex for that to be safe
        content = re.sub(r'onclick="copyShareLink\(\)"\s+style="', 'style="', content)

        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    main()
