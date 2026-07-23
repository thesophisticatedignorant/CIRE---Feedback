
        // Data matching your existing structure
        const folderData = {
            'cire-canon': {
                label: 'CIRE Canon',
                files: [
                    { name: 'the continuum', type: 'folder', targetFolder: 'canon-continuum' },
                    { name: 'the charter', type: 'folder', targetFolder: 'canon-charter' },
                    { name: 'the doctrine', type: 'folder', targetFolder: 'canon-doctrine' },
                    { name: 'the access protocols', type: 'folder', targetFolder: 'canon-protocols' },
                    { name: 'maison manifest', type: 'folder', targetFolder: 'maison' },
                    { name: 'blackscale logo.png', type: 'image', src: '/blackscale CIRE logo.png' },
                    { name: 'art house.png', type: 'image', src: '/art house.png' },
                    { name: 'fashion house.png', type: 'image', src: '/fashion house.png' }
                ]
            },
            'cire-concierge': {
                label: 'CIRE Concierge',
                files: [
                    { name: 'automotive', type: 'folder', targetFolder: 'concierge-automotive' },
                    { name: 'maritime', type: 'folder', targetFolder: 'concierge-maritime' }
                ]
            },
            'cire-hospitality': {
                label: 'CIRE Hospitality',
                files: [
                    { name: 'coming soon.rfd', type: 'document', textContent: 'Exclusive access to our global hospitality network.' }
                ]
            },
            'canon-continuum': { label: 'the continuum', files: [] },
            'canon-charter': { label: 'the charter', files: [] },
            'canon-doctrine': { label: 'the doctrine', files: [] },
            'canon-protocols': { label: 'the access protocols', files: [] },
            'concierge-automotive': { label: 'automotive', files: [] },
            'concierge-maritime': { label: 'maritime', files: [] },
            'sophisticated-brilliance': {
                label: 'Sophisticated Brilliance',
                files: [
                    { name: 'teaser.mp4', type: 'video', src: '/transcendence of man.mp4' },
                    { name: 'collection 1 logo.mp4', type: 'video', src: '/SB Rotating Logo.mp4' },
                    { name: 'sophisticated brilliance.rfd', type: 'document', textContent: 'Sophisticated Brilliance is a luxury fashion and jewelry house under the CIRE Conglomerate. It represents the pinnacle of refined aesthetics and modern craftsmanship.' },
                    { name: 'transcendence of man.rfd', type: 'document', textContent: '*Sophisticated Brilliance*\'s debut collection, **Transcendence of Man**, explores the journey of refinement through experience. Each piece reflects a stage of healing — where scars are to be embraced as evidence of resilience against trials and tribulations. Like a rough diamond, shaped and reshaped through repeated cuts, the collection traces how hardship refines rather than diminishes. Each scar is intentional recognizing a simple truth: strength is built through trials, and refinement is earned through endurance.' },
                    { name: 'collection overview.rfd', type: 'document', textContent: 'The debut collection from *Sophisticated Brilliance* reinterprets sacred iconography as a reflection of the human condition via trials and revelations. Each piece examines the tension between scars and magnificence, elaborating on the paradox of endurance: suffering not only has the power to wound, but also to refine. Brilliance, in this context, is not the absence of damage, but the result of having endured it.\\n\\nAs a whole, the collection invites reflection on scars not as disfigurements, but as evidence of transformation. These works of art crafted out of precious gemstones and metals are designed to acknowledge struggle while recognizing that refinement is a process, and brilliance is achieved through endurance.' },
                    { name: 'beast.rfd', type: 'document', textContent: 'Pendant I: **Beast** explores the instinct to conceal pain rather than confront it. Material brilliance is concentrated within the damaged areas, suggesting attempts to mask unresolved wounds. The reverse mosaic setting is intentional — an uneven, fragmented surface representing the "rough around the edges" nature of the unhealed man.' },
                    { name: 'metamorphosis.rfd', type: 'document', textContent: 'Pendant II: **Metamorphosis** represents movement between denial and acceptance. The more traditional stone-setting arrangement introduces structure and order, signifying discipline, self-awareness, and progression along the journey of refinement.' },
                    { name: 'humble.rfd', type: 'document', textContent: 'Pendant III: **Humble** embodies acceptance. The wounds remain visible and unembellished, free of excess. With no stones present, the piece depicts resilience shown through transparency rather than display.' },
                    { name: 'the nails.rfd', type: 'document', textContent: 'Earrings: **The Nails** transform symbols of suffering into emblems of endurance. The Nova-cut center stone, with over 150 facets, refracts exceptional light while maintaining clarity — a metaphor for pressure turned into brilliance. The gauge-inspired backing, secured with a screw mechanism and fully pavé-set, references the transformation of an object once associated with force and cruelty into an ornament of intention.' },
                    { name: 'celestial scars.rfd', type: 'document', textContent: 'Cuban Link: **Celestial Scars** is a reimagined, reversible interpretation of the Cuban link. One side bears intentional surface scarring with a satin or sandblasted finish; the other remains smooth and polished. The duality represents the coexistence of damage and refinement — the choice to reveal or conceal, without denying either.' },
                    { name: 'transcendence of man', type: 'folder', targetFolder: 'video' }
                ]
            },
            'sophisticated-ignorance': {
                label: 'Sophisticated Ignorance',
                files: [
                    { name: 'sophisticated ignorance.rfd', type: 'document', textContent: 'Sophisticated Ignorance is a concept brand exploring the intersection of luxury culture and intentional simplicity.' },
                    { name: 'power perfected in position.rfd', type: 'document', textContent: 'Every position holds potential — not as limitation, but as leverage. **Sophisticated Ignorance** is built on the belief that elevation is earned through conviction, not circumstance. Whether one begins at **Foundations** or reigns within **Crownworks**, each tier represents a stage of growth — a moment to master before advancing to the next. To wear the brand is to embrace progression: to elevate within your means, and to build power through a solid foundation and discipline. Because ascension is not promised — it\'s pursued. And through conviction, *Power is Perfected in Position*.\n\nAt its core, the collection is organized through a **symbolic classification system** that quietly structures the brand\'s universe of garments. Categories are defined by function and refinement, each occupying a distinct role within the wardrobe. The symbols that accompany them serve as markers of position and progression, not spectacle. Because power is not loud, it is precise, therefore, is perfected in position.' },
                    { name: 'foundations', type: 'folder', targetFolder: 'si-foundations' },
                    { name: 'fortifications', type: 'folder', targetFolder: 'si-fortifications' },
                    { name: 'relics', type: 'folder', targetFolder: 'si-relics' },
                    { name: 'dominion', type: 'folder', targetFolder: 'si-dominion' },
                    { name: 'adornments', type: 'folder', targetFolder: 'si-adornments' },
                    { name: 'crownworks', type: 'folder', targetFolder: 'si-crownworks' }
                ]
            },
            'si-foundations': {
                label: 'foundations',
                files: [
                    { name: 'foundations.rfd', type: 'document', textContent: 'Foundations — The Architecture of Self\nEstablish identity and structure — the groundwork of sophistication.\n\nFoundations serves as the base layer of refinement: the stepping stones of your wardrobe, designed for structure, comfort, and everyday uniformity. Through simplicity and precision, Foundations defines the essentials that ground identity — where form takes shape and sophistication begins.' }
                ]
            },
            'si-fortifications': {
                label: 'fortifications',
                files: [
                    { name: 'fortifications.rfd', type: 'document', textContent: 'Fortifications — The Shield of Style\nProtect, reinforce, and define.\n\nFortifications represents defense through design — luxurious garments built as armor. Each piece in this tier acts as both protection and proclamation — constructed to endure, engineered to impress.' }
                ]
            },
            'si-relics': {
                label: 'relics',
                files: [
                    { name: 'relics.rfd', type: 'document', textContent: 'Relics — The Creed of Craft\nCarry heirlooms that endure — crafted in devotion to quality.\n\nRelics serve as the tactile memory of the brand: timeless leather goods that embody strength through subtlety and refinement through utility. Each piece is designed to be carried, aged, and remembered.' }
                ]
            },
            'si-dominion': {
                label: 'dominion',
                files: [
                    { name: 'dominion.rfd', type: 'document', textContent: 'Dominion — The Path of Conquest\nStride with intent. Advance with purpose.' }
                ]
            },
            'si-adornments': {
                label: 'adornments',
                files: [
                    { name: 'adornments.rfd', type: 'document', textContent: 'Adornments — The Reign of Detail\nElevate your expression. Define your distinction.' }
                ]
            },
            'si-crownworks': {
                label: 'crownworks',
                files: [
                    { name: 'crownworks.rfd', type: 'document', textContent: 'Crownworks — The Pinnacle of Refinement\nThe ultimate articulation of mastery and rule.\n\nCrownworks represents the embodiment of power perfected in presentation: garments crafted for moments of command, ceremony, and consequence. Each creation in this tier signifies composure under pressure — the discipline to remain regal, the elegance to move with authority.' }
                ]
            },
            video: {
                label: 'transcendence of man',
                files: [
                    { name: 'teaser.mp4', type: 'video', src: '/transcendence of man.mp4' },
                    { name: 'sketches', type: 'folder', targetFolder: 'tom-sketches' },
                    { name: 'cads', type: 'folder', targetFolder: 'tom-cads' },
                    { name: 'renderings', type: 'folder', targetFolder: 'tom-renderings' },
                    { name: 'wax models', type: 'folder', targetFolder: 'tom-wax' },
                    { name: 'final', type: 'folder', targetFolder: 'tom-final' }
                ]
            },
            'tom-sketches': {
                label: 'sketches',
                files: [
                    { name: 'sketch: the nails.png', type: 'image', src: '/sketch: the nails.png' },
                    { name: 'sketch: beast.png', type: 'image', src: '/sketch: beast.png' },
                    { name: 'sketch: metamorphosis.png', type: 'image', src: '/sketch: metamorphosis.png' },
                    { name: 'sketch: beast 2.png', type: 'image', src: '/sketch: beast.png' },
                    { name: 'sketch: the celestial scar.png', type: 'image', src: '/sketch: the celestial scar.png' }
                ]
            },
            'tom-cads': {
                label: 'cads',
                files: [
                    { name: 'cad: the nails.mp4', type: 'video', src: '/cad: the nails.mp4' },
                    { name: 'cad: beast.mp4', type: 'video', src: '/cad: beast.mp4' },
                    { name: 'cad: metamorphosis.mp4', type: 'video', src: '/cad: metamorphosis.mp4' },
                    { name: 'cad: beast 2.mp4', type: 'video', src: '/cad: beast.mp4' },
                    { name: 'cad: the celestial scar.mp4', type: 'video', src: '/cad: the celestial scar.mp4' }
                ]
            },
            'tom-renderings': {
                label: 'renderings',
                files: [
                    { name: 'rendering: the nails.mp4', type: 'video', src: '/rendering: the nails.mp4' },
                    { name: 'rendering: beast.mp4', type: 'video', src: '/rendering: beast.mp4' },
                    { name: 'rendering: metamorphosis.mp4', type: 'video', src: '/rendering: metamorphosis.mp4' },
                    { name: 'rendering: beast 2.mp4', type: 'video', src: '/rendering: beast.mp4' },
                    { name: 'rendering: the celestial scar.mp4', type: 'video', src: '/rendering: the celestial scar.mp4' }
                ]
            },
            'tom-wax': {
                label: 'wax models',
                files: [
                    { name: 'wax model: the nails.png', type: 'image', src: '/wax model: the nails.png' },
                    { name: 'wax model: beast.png', type: 'image', src: '/wax model: beast.png' },
                    { name: 'wax model: metamorphosis.png', type: 'image', src: '/wax model: metamorphosis.png' },
                    { name: 'wax model: beast 2.png', type: 'image', src: '/wax model: beast.png' },
                    { name: 'wax model: the celestial scar.png', type: 'image', src: '/wax model: the celestial scar.png' }
                ]
            },
            'tom-final': {
                label: 'final',
                files: [
                    { name: 'final: the nails.mp4', type: 'video', src: '/final: the nails.mp4' },
                    { name: 'final: beast.mp4', type: 'video', src: '/final: beast.mp4' },
                    { name: 'final: metamorphosis.mp4', type: 'video', src: '/final: metamorphosis.mp4' },
                    { name: 'final: beast 2.mp4', type: 'video', src: '/final: beast.mp4' },
                    { name: 'final: the celestial scar.mp4', type: 'video', src: '/final: the celestial scar.mp4' }
                ]
            },
            maison: {
                label: 'maison manifest',
                files: [
                    { name: 'maison overview.rfd', type: 'document', textContent: 'CIRE Conglomerate is a visionary, multidisciplinary luxury house bridging high jewelry, art, fashion, and private client services into a cohesive expression of contemporary sophistication. Built on the philosophy of <i>cultivating influence</i>, <i>refinement</i>, and <i>excellence</i>, CIRE operates as both creative institution and intellectual holding company: a system where craftsmanship, culture, and aspiration converge. Serving as the parent entity to <b>Sophisticated Brilliance</b> and <b>Sophisticated Ignorance</b>.' },
                    { name: 'sophisticated brilliance.rfd', type: 'document', textContent: 'Sophisticated Brilliance is a luxury fashion and jewelry house under the CIRE Conglomerate. It represents the pinnacle of refined aesthetics and modern craftsmanship.' },
                    { name: 'sophisticated ignorance.rfd', type: 'document', textContent: 'Sophisticated Ignorance is a concept brand exploring the intersection of luxury culture and intentional simplicity.' },
                    { name: 'coming soon.mp4', type: 'video', src: '/coming soon.mp4' }
                ]
            },
            curated: {
                label: 'Curated Content',
                files: Array.from({ length: 9 }).map((_, i) => ({
                    name: `TikTok Repost ${9 - i}.link`,
                    type: 'document',
                    textContent: `[View on TikTok](https://www.tiktok.com/@thesophisticatedignorant)\\n\\nThis is a curated repost.`
                }))
            }
        };

        if (window.BLUSTREET_DATA) {
            folderData['concierge-automotive'].files = window.BLUSTREET_DATA.filter(d => d.category === 'automotive').map(d => ({
                name: d.name,
                type: 'image',
                src: d.image,
                tags: d.requirements || []
            }));
            folderData['concierge-maritime'].files = window.BLUSTREET_DATA.filter(d => d.category === 'maritime').map(d => ({
                name: d.name,
                type: 'image',
                src: d.image,
                tags: d.requirements || []
            }));
        }

        let selectedFolder = 'cire-canon';
        let currentView = 'columns';
        let selectedGalleryIndex = 0;
        let selectedColumnIndex = -1;

        // Navigation history for back/forward buttons
        let navigationHistory = ['cire-canon']; // Start with initial folder
        let historyIndex = 0; // Current position in history

        const desktop = document.getElementById('desktop');
        const finderWindow = document.getElementById('finder-window');
        const sidebar = document.getElementById('sidebar');
        const contentArea = document.getElementById('content-area');
        const windowTitle = document.getElementById('window-title');
        const itemCount = document.getElementById('item-count');
        const themeToggle = document.getElementById('theme-toggle');

        // Theme toggle
        themeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('light-mode');
            } else {
                document.body.classList.remove('light-mode');
            }
        });

        // Bring finder window to front when clicked
        finderWindow.addEventListener('mousedown', () => {
            highestZIndex++;
            finderWindow.style.zIndex = highestZIndex;
        });
        const viewBtn = document.getElementById('view-btn');
        const viewMenu = document.getElementById('view-menu');
        const viewIcon = document.getElementById('view-icon');
        const viewLabel = document.getElementById('view-label');
        const shareBtn = document.getElementById('share-btn');
        const tagsBtn = document.getElementById('tags-btn');
        const tagsMenu = document.getElementById('tags-menu');
        const clipboardNotification = document.getElementById('clipboard-notification');

        // Popup window management
        let highestZIndex = 100;

        // Global keydown for navigation
        document.addEventListener('keydown', (e) => {
            // Only handle if no popup is active (except maybe image popups, but let's keep it simple)
            // and if we are in a folder view

            // Check if any input is focused
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            const files = folderData[selectedFolder]?.files || [];
            if (files.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                let newIndex = selectedColumnIndex + 1;
                if (newIndex >= files.length) newIndex = files.length - 1;

                // Select and scroll into view
                selectColumnItem(newIndex);
                scrollItemIntoView(newIndex);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                let newIndex = selectedColumnIndex - 1;
                if (newIndex < 0) newIndex = 0;

                // Select and scroll into view
                selectColumnItem(newIndex);
                scrollItemIntoView(newIndex);
            } else if (e.key === 'Enter') {
                if (selectedColumnIndex >= 0 && selectedColumnIndex < files.length) {
                    handleFileClick(files[selectedColumnIndex].name);
                }
            }
        });

        function scrollItemIntoView(index) {
            const items = document.querySelectorAll('.column-item');
            if (items[index]) {
                items[index].scrollIntoView({ block: 'nearest' });
            }
        }

        // Popup ID to display name mapping for dock
        const popupTitles = {
            'popup-maison': 'Maison Overview',
            'popup-brilliance': 'Sophisticated Brilliance',
            'popup-ignorance': 'Sophisticated Ignorance',
            'popup-transcendence': 'Transcendence of Man',
            'popup-sb-logo': 'SB Collection 1 Logo',
            'popup-guestbook': 'Join Network 🤝'
        };

        function openPopup(popupId) {
            const popup = document.getElementById(popupId);
            if (popup) {
                // Remove from dock if minimized
                const dockItem = document.querySelector(`.dock-item[data-popup="${popupId}"]`);
                if (dockItem) dockItem.remove();

                // Show popup
                popup.classList.add('active');

                // Center popup
                const popupWidth = popup.offsetWidth || parseInt(window.getComputedStyle(popup).width) || 550;
                popup.style.left = Math.max(0, (window.innerWidth - popupWidth) / 2) + 'px';
                
                if (popupId === 'popup-restricted') {
                    const popupHeight = popup.offsetHeight || 150;
                    popup.style.top = Math.max(0, (window.innerHeight - popupHeight) / 2) + 'px';
                    popup.style.transform = 'none'; // Clear any transform
                } else {
                    popup.style.top = '100px';
                }

                // Bring to front
                highestZIndex++;
                popup.style.zIndex = highestZIndex;

                // Enforce Graphite Mode for Guestbook PERMANENTLY
                if (popupId === 'popup-guestbook') {
                    if (!popup.classList.contains('graphite-mode')) {
                        popup.classList.add('graphite-mode');
                    }
                    // Initialize the Leaflet map once the popup is visible
                    setTimeout(() => {
                        if (typeof window.initGuestbookMap === 'function') {
                            window.initGuestbookMap();
                        }
                    }, 50);
                }
            }
        }

        function closePopup(popupId) {
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.classList.remove('active');
                popup.classList.remove('graphite-mode'); // Exit fullscreen

                // Remove from dock if present
                const dockItem = document.querySelector(`.dock-item[data-popup="${popupId}"]`);
                if (dockItem) dockItem.remove();

                // Reset Position to defaults (Differs from minimize)
                const centerX = window.innerWidth / 2;

                if (popupId === 'popup-maison') {
                    popup.style.left = (centerX - 150) + 'px';
                    popup.style.top = '18px';
                    popup.style.width = '450px';
                    popup.style.height = 'auto';
                } else if (popupId === 'popup-transcendence') {
                    popup.style.left = (centerX - 376) + 'px';
                    popup.style.top = '69px';
                } else if (popupId === 'popup-brilliance') {
                    popup.style.left = (centerX - 330) + 'px';
                    popup.style.top = '202px';
                } else if (popupId === 'popup-ignorance') {
                    popup.style.left = (centerX + 34) + 'px';
                    popup.style.top = '285px';
                } else if (popupId === 'popup-guestbook') {
                    popup.style.left = (centerX - 125) + 'px';
                    popup.style.top = '100px';
                }
            }
        }

        function minimizePopup(popupId) {
            const popup = document.getElementById(popupId);
            if (popup) {
                // Toggle minimized state
                if (popup.classList.contains('minimized')) {
                    popup.classList.remove('minimized');
                } else {
                    popup.classList.add('minimized');
                }
            }
        }

        function restorePopup(popupId) {
            const popup = document.getElementById(popupId);
            if (popup && popup.classList.contains('minimized')) {
                popup.classList.remove('minimized');
            }
        }

        // Store for pre-graphite state
        const popupPreGraphiteState = {};

        function toggleGraphiteMode(popupId) {
            const popup = document.getElementById(popupId);
            if (!popup) return;

            // Lock Graphite Mode for Guestbook (Prevent toggle)
            if (popupId === 'popup-guestbook') return;

            if (popup.classList.contains('graphite-mode')) {
                // Restore from graphite mode
                popup.classList.remove('graphite-mode');
                const pre = popupPreGraphiteState[popupId];
                if (pre) {
                    popup.style.left = pre.left;
                    popup.style.top = pre.top;
                    popup.style.width = pre.width;
                    popup.style.height = pre.height;
                }

                // Reset video if present
                const video = popup.querySelector('video');
                if (video) {
                    video.style.height = '300px';
                    video.style.objectFit = 'cover';
                }

                // Reset content height
                const content = popup.querySelector('.popup-content');
                if (content && (popupId === 'popup-sb-logo' || popupId === 'popup-transcendence' || popupId === 'popup-coming-soon')) {
                    content.style.height = 'auto';
                }
            } else {
                // Enter graphite mode - save current state
                popupPreGraphiteState[popupId] = {
                    left: popup.style.left,
                    top: popup.style.top,
                    width: popup.style.width,
                    height: popup.style.height
                };
                popup.classList.add('graphite-mode');
                popup.style.left = '0';
                popup.style.top = '0';
                popup.style.width = '100vw';
                popup.style.height = '100vh';

                // Adjust video for full screen
                const video = popup.querySelector('video');
                if (video) {
                    video.style.height = '100%';
                    video.style.objectFit = 'cover';
                }

                // Force content to fill height for video popups
                const content = popup.querySelector('.popup-content');
                if (content && (popupId === 'popup-sb-logo' || popupId === 'popup-transcendence' || popupId === 'popup-coming-soon')) {
                    content.style.height = 'calc(100% - 32px)';
                }
            }
        }

        // File to popup mapping (for documents that open existing popups)
        const filePopupMap = {
            'maison overview.rfd': 'popup-maison',
            'coming soon.mp4': 'popup-coming-soon',
        };

        // Folder to popup mapping
        const folderPopupMap = {
            'sophisticated-brilliance': 'popup-brilliance',
            'sophisticated-ignorance': 'popup-ignorance',
        };

        // Select column item (single click) - shows preview
        function selectColumnItem(index) {
            selectedColumnIndex = index;
            // Update selection state without regenerating entire list
            const items = document.querySelectorAll('.column-item');
            items.forEach((item, i) => {
                item.classList.toggle('selected', i === index);
            });
            // Only update the preview panel
            updateColumnPreview();
        }

        // Update only the column preview panel
        function updateColumnPreview() {
            const files = folderData[selectedFolder]?.files || [];
            const selectedFile = selectedColumnIndex >= 0 ? files[selectedColumnIndex] : null;
            const selectedIcon = selectedFile ? getFileIcon(selectedFile.type) : null;
            const fileTypeLabel = selectedFile ? (selectedFile.type === 'image' ? 'PNG image' : selectedFile.type === 'video' ? 'MPEG-4 Video' : 'Document') : '';
            
            let isFileLocked = selectedFile && !isSystemUnlocked && isItemProtected(selectedFile.name);

            let previewContent = '';
            if (isFileLocked) {
                previewContent = `
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #111; padding: 20px; box-sizing: border-box; text-align: center; overflow: hidden; height: 100%;">
                        <i class="fas fa-lock lock-icon" style="font-size: 32px; color: #636366; margin-bottom: 12px;"></i>
                        <h2 style="font-size: 15px; font-weight: 500; margin-bottom: 6px; color: #fff;">This file is locked.</h2>
                        <p style="font-size: 11px; color: #888; margin-bottom: 16px; max-width: 100%;">Enter password</p>
                        <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: transparent; border: 1px solid #3a3a3c; border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 160px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 12px; box-sizing: border-box;">
                    </div>
                `;
            } else if (selectedFile?.type === 'image' && selectedFile?.src) {
                previewContent = `<img src="${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain; background: #1a1a1a;">`;
            } else if (selectedFile?.type === 'video' && selectedFile?.src) {
                previewContent = `<video src="${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain;" autoplay muted loop playsinline></video>`;
            } else if (selectedFile?.type === 'document' && selectedFile?.textContent) {
                previewContent = `
                    <div class="document-preview-container">
                        <div class="document-preview-header">📄 ${selectedFile.name.replace(/\.png$/, '')}</div>
                        <div class="document-preview-body">${renderMarkdown(selectedFile.textContent.substring(0, 200))}...</div>
                    </div>`;
            } else if (selectedFile) {
                previewContent = `<i class="${selectedIcon.class}" style="font-size: 64px; color: ${selectedIcon.color}"></i>`;
            }

            const previewPanel = document.querySelector('.column-preview');
            if (previewPanel) {
                previewPanel.innerHTML = selectedFile ? `
                    <div class="column-preview-image">
                        ${previewContent}
                    </div>
                    <div class="column-preview-header">
                        <div class="column-preview-name">${selectedFile.name.replace(/\.png$/, '')}</div>
                        <div class="column-preview-type">${fileTypeLabel} - 256 KB</div>
                    </div>
                    <div class="gallery-info-section">
                        <div class="gallery-info-section-title">
                            Information
                            <span class="show-more">Show Less</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Created</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Modified</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Last opened</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Content created</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                    </div>
                    <div class="gallery-info-section">
                        <div class="gallery-info-section-title">Tags</div>
                        <div style="color: #888; font-size: 12px; padding: 5px 0;">Add Tags...</div>
                    </div>
                    <div class="gallery-actions">
                        <div class="gallery-action-btn">
                            <i class="fas fa-undo"></i>
                            <span>Rotate Left</span>
                        </div>
                        <div class="gallery-action-btn">
                            <i class="fas fa-marker"></i>
                            <span>Markup</span>
                        </div>
                        <div class="gallery-action-btn">
                            <i class="fas fa-ellipsis-h"></i>
                            <span>More...</span>
                        </div>
                    </div>
                ` : `
                    <div class="column-preview-empty" style="display: flex; align-items: center; justify-content: center; height: 100%; color: #888;">
                        Select a file to preview
                    </div>
                `;
            }
        }

        function handleFileClick(fileName) {
            // Check if it's a folder - navigate to it
            const currentFiles = folderData[selectedFolder]?.files || [];
            const clickedFile = currentFiles.find(f => f.name === fileName);
            
            // Protection Check
            if (!isSystemUnlocked && isItemProtected(fileName)) {
                if (currentView !== 'columns') {
                    currentView = 'columns';
                    selectedColumnIndex = currentFiles.findIndex(f => f.name === fileName);
                    
                    // Update toolbar buttons visually
                    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                    const colsBtn = document.querySelector('.fa-columns')?.closest('.view-btn');
                    if (colsBtn) colsBtn.classList.add('active');

                    populateContent();
                }
                return;
            }



            if (clickedFile && clickedFile.type === 'folder' && clickedFile.targetFolder) {
                selectFolder(clickedFile.targetFolder);
                return;
            }

            // RFD Document triggers
            if (fileName === 'maison overview.rfd') {
                openPopup('popup-maison');
                return;
            }
            if (fileName === 'private inquiry.rfd') {
                openPopup('popup-inquiry');
                return;
            }
            if (fileName === 'sophisticated brilliance.rfd') {
                openPopup('popup-brilliance');
                return;
            }
            if (fileName === 'sophisticated ignorance.rfd') {
                openPopup('popup-ignorance');
                return;
            }
            if (fileName === 'power perfected in position.rfd') {
                openPopup('popup-power');
                return;
            }
            if (fileName === 'foundations.rfd') {
                openPopup('popup-foundations');
                return;
            }
            if (fileName === 'fortifications.rfd') {
                openPopup('popup-fortifications');
                return;
            }
            if (fileName === 'relics.rfd') {
                openPopup('popup-relics');
                return;
            }
            if (fileName === 'dominion.rfd') {
                openPopup('popup-dominion');
                return;
            }
            if (fileName === 'adornments.rfd') {
                openPopup('popup-adornments');
                return;
            }
            if (fileName === 'crownworks.rfd') {
                openPopup('popup-crownworks');
                return;
            }
            if (fileName === 'coming soon.mp4') {
                openPopup('popup-coming-soon');
                return;
            }
            if (fileName === 'transcendence of man.rfd') {
                openPopup('popup-trials');
                return;
            }
            if (fileName === 'collection overview.rfd') {
                openPopup('popup-collection-overview');
                return;
            }
            if (fileName === 'beast.rfd') {
                openPopup('popup-beast');
                return;
            }
            if (fileName === 'metamorphosis.rfd') {
                openPopup('popup-metamorphosis');
                return;
            }
            if (fileName === 'humble.rfd') {
                openPopup('popup-humble');
                return;
            }
            if (fileName === 'the nails.rfd') {
                openPopup('popup-nails');
                return;
            }
            if (fileName === 'celestial scars.rfd') {
                openPopup('popup-celestial');
                return;
            }

            // Video trigger
            if (fileName === 'teaser.mp4') {
                openPopup('popup-transcendence');
                return;
            }

            // SB Logo video trigger
            if (fileName === 'logo.mp4') {
                openPopup('popup-sb-logo');
                return;
            }

            // Image popup (dynamic)
            const autoFile = folderData['concierge-automotive']?.files?.find(f => f.name === fileName);
            const maritimeFile = folderData['concierge-maritime']?.files?.find(f => f.name === fileName);
            if (autoFile || maritimeFile) {
                const productData = window.BLUSTREET_DATA?.find(d => d.name === fileName || d.name + '.png' === fileName);
                if (productData) {
                    openProductPopup(productData);
                    return;
                }
            }

            if (fileName.endsWith('.png')) {
                // Use src from file data if available, otherwise construct from filename
                const imgSrc = clickedFile && clickedFile.src ? clickedFile.src : '/' + fileName;
                openImagePopup(fileName, imgSrc);
                return;
            }

            // Link trigger
            if (fileName.endsWith('.link')) {
                window.open('https://www.tiktok.com/@thesophisticatedignorant', '_blank');
                return;
            }

            // Fallback to filePopupMap
            const popupId = filePopupMap[fileName];
            if (popupId) {
                openPopup(popupId);
            }
        }

        // Dynamic image popup
        function openImagePopup(title, src) {
            const popupId = 'popup-' + title.replace(/[^a-zA-Z0-9]/g, '-');
            let popup = document.getElementById(popupId);

            if (popup) {
                // Already exists - bring to front
                popup.classList.add('active');
                highestZIndex++;
                popup.style.zIndex = highestZIndex;
                return;
            }

            // Create new popup
            popup = document.createElement('div');
            popup.id = popupId;
            popup.className = 'popup-window active';
            popup.innerHTML = `
                <div class="popup-titlebar">
                    <div class="popup-controls">
                        <span class="popup-control close" onclick="closeImagePopup('${popupId}')"></span>
                        <span class="popup-control minimize" onclick="minimizePopup('${popupId}')"></span>
                        <span class="popup-control maximize" onclick="toggleGraphiteMode('${popupId}')"></span>
                    </div>
                    <span class="popup-title">${title}</span>
                </div>
                <div class="popup-content" style="padding: 0; background: #1a1a1a;">
                    <img src="${src}" style="max-width: 100%; display: block;">
                </div>
            `;

            // Position - match Transcendence window sizing (320px width)
            popup.style.left = (window.innerWidth / 2 - 160) + 'px';
            popup.style.top = '100px';
            popup.style.width = '320px';

            document.body.appendChild(popup);

            // Make draggable
            makeDraggable(popup);

            // Bring to front
            highestZIndex++;
            popup.style.zIndex = highestZIndex;
        }

        function closeImagePopup(popupId) {
            const popup = document.getElementById(popupId);
            if (popup) popup.remove();
        }

        // Reusable draggable function
        function makeDraggable(popup) {
            const titlebar = popup.querySelector('.popup-titlebar');
            let isDragging = false;
            let offsetX, offsetY;

            titlebar.addEventListener('mousedown', (e) => {
                if (e.target.classList.contains('popup-control')) return;
                isDragging = true;
                offsetX = e.clientX - popup.offsetLeft;
                offsetY = e.clientY - popup.offsetTop;
                highestZIndex++;
                popup.style.zIndex = highestZIndex;

                // Disable iframe pointer events during drag to prevent click-to-stick
                const iframe = popup.querySelector('iframe');
                if (iframe) iframe.style.pointerEvents = 'none';
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) {
                    // Check if mouse released outside window
                    if (isDragging) isDragging = false;
                    return;
                }
                e.preventDefault();

                let newLeft = e.clientX - offsetX;
                let newTop = e.clientY - offsetY;

                // Constraint: Keep within window bounds
                const maxLeft = window.innerWidth - popup.offsetWidth;
                const maxTop = window.innerHeight - popup.offsetHeight;

                // Clamp
                newLeft = Math.max(0, Math.min(newLeft, maxLeft));
                newTop = Math.max(0, Math.min(newTop, maxTop));

                popup.style.left = newLeft + 'px';
                popup.style.top = newTop + 'px';
            });

            document.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    // Re-enable iframe pointer events after drag
                    const iframe = popup.querySelector('iframe');
                    if (iframe) iframe.style.pointerEvents = 'auto';

                    // UPDATE RELATIVE OFFSET AFTER DRAG
                    // This ensures subsequent resizes respect the new position
                    const currentLeft = parseFloat(popup.style.left) || 0;
                    popup.dataset.centerOffset = currentLeft - (window.innerWidth / 2);
                }
            });

            // V1 behavior: double-click titlebar to restore minimized window
            titlebar.addEventListener('dblclick', () => {
                restorePopup(popup.id);
            });
        }

        // Make existing popups draggable
        document.querySelectorAll('.popup-window').forEach(popup => {
            makeDraggable(popup);
        });

        // Generate carousel items
        function generateCarousels() {
            const topCarousel = document.getElementById('carousel-top');
            const bottomCarousel = document.getElementById('carousel-bottom');

            // Top carousel: 25 SB jewelry pieces
            // File associations (for when media is uploaded):
            // Item 1: sketch: the nails.png | Item 2: cad: the nails.mp4 | Item 3: wax model: the nails.png
            // Item 4: rendering: the nails.mp4 | Item 5: final: the nails.mp4
            // Item 6: sketch: beast.png | Item 7: cad: beast.mp4 | Item 8: wax model: beast.png
            // Item 9: rendering: beast.mp4 | Item 10: final: beast.mp4
            // Item 11: sketch: metamorphosis.png | Item 12: cad: metamorphosis.mp4 | Item 13: wax model: metamorphosis.png
            // Item 14: rendering: metamorphosis.mp4 | Item 15: final: metamorphosis.mp4
            // Item 16: sketch: beast.png | Item 17: cad: beast.mp4 | Item 18: wax model: beast.png
            // Item 19: rendering: beast.mp4 | Item 20: final: beast.mp4
            // Item 21: sketch: the celestial scar.png | Item 22: cad: the celestial scar.mp4 | Item 23: wax model: the celestial scar.png
            // Item 24: rendering: the celestial scar.mp4 | Item 25: final: the celestial scar.mp4
            const topItems = Array.from({ length: 25 }).map((_, i) => ({
                id: i,
                title: `Item ${i + 1}`,
                color: `hsl(0, 0%, ${(i * 4) % 100}%)`
            }));

            // Bottom carousel: 23 slides
            // File associations (for reference when media is uploaded):
            // Item 1: foundations logo.png | Item 2: foundations: camo shiesty.png | Item 3: foundations: black shiesty.png
            // Item 4: foundations: black tee.png | Item 5: foundations: white tee.png | Item 6: fortifications logo.png
            // Item 7: foundations: orange tracksuit.png | Item 8: foundations: purple tracksuit.png | Item 9: foundations: black tracksuit.png
            // Item 10: fortifications: reversible racing jacket.png | Item 11: fortifications: f-1 motorcycle jacket.png | Item 12: fortifications: sample puffer jacket.png
            // Item 13: relics logo.png | Item 14: relics: boxing set.png | Item 15: dominion logo.png
            // Item 16: adornments logo.png | Item 17: crownsworks logo.png | Item 18: crownsworks: lgrey 3P suit.png
            // Item 19: crownsworks: blue 2P suit.png | Item 20: crownsworks: dgrey 2P suit.png | Item 21: crownsworks: navy 3P suit.png
            // Item 22: crownsworks: black 3P suit.png | Item 23: crownsworks: black DB suit.png
            const bottomItems = Array.from({ length: 23 }).map((_, i) => ({
                id: i,
                title: `Item ${i + 1}`,
                color: `hsl(0, 0%, ${(i * 5) % 100}%)`
            }));

            // Duplicate for infinite effect
            const allTopItems = [...topItems, ...topItems];
            const allBottomItems = [...bottomItems, ...bottomItems];

            topCarousel.innerHTML = allTopItems.map((item, index) => `
                <div class="carousel-item" style="background-color: ${item.color}">
                    <span>${item.title}</span>
                </div>
            `).join('');

            bottomCarousel.innerHTML = allBottomItems.map((item, index) => `
                <div class="carousel-item" style="background-color: ${item.color}">
                    <span>${item.title}</span>
                </div>
            `).join('');
        }

        // Populate sidebar
        // Folders that are now nested inside other folders (not shown in sidebar)
        const nestedFolders = ['video', 'maison', 'power', 'tom-sketches', 'tom-cads', 'tom-renderings', 'tom-wax', 'tom-final', 'si-foundations', 'si-fortifications', 'si-relics', 'si-dominion', 'si-adornments', 'si-crownworks', 'private-services', 'canon-continuum', 'canon-charter', 'canon-doctrine', 'canon-protocols', 'concierge-automotive', 'concierge-maritime'];

        function populateSidebar() {
            sidebar.innerHTML = `
                <div class="sidebar-section">
                    <div class="sidebar-title">Favorites</div>
                </div>
            `;

            const section = sidebar.querySelector('.sidebar-section');

            Object.keys(folderData).forEach(key => {
                // Skip nested folders - they're inside other folders now
                if (nestedFolders.includes(key)) return;

                const folder = folderData[key];
                const item = document.createElement('div');
                item.className = 'sidebar-item' + (key === selectedFolder ? ' active' : '');
                item.dataset.folder = key;

                const count = folder.files.length;
                item.innerHTML = `
                    <i class="fas fa-folder"></i>
                    ${folder.label}
                    ${count > 0 ? `<span class="count">${count}</span>` : ''}
                `;

                item.addEventListener('click', () => selectFolder(key));
                section.appendChild(item);
            });

            // Add Join Network item at the bottom of favorites
            const joinNetworkItem = document.createElement('div');
            joinNetworkItem.className = 'sidebar-item';
            joinNetworkItem.dataset.folder = 'join-network';
            joinNetworkItem.innerHTML = `
                <i class="fas fa-folder"></i>
                Join Network 🤝
            `;
            joinNetworkItem.addEventListener('click', () => {
                openPopup('popup-guestbook');
            });
            section.appendChild(joinNetworkItem);
        }

        // Select folder
        function selectFolder(folderKey, fromHistory = false) {
            selectedFolder = folderKey;
            selectedColumnIndex = -1; // Reset column selection

            // Update navigation history (only if not navigating from history)
            if (!fromHistory) {
                // Remove any forward history if we're navigating from middle of stack
                navigationHistory = navigationHistory.slice(0, historyIndex + 1);
                // Only add to history if it's different from the current folder
                const currentFolder = navigationHistory[historyIndex];
                if (currentFolder !== folderKey) {
                    navigationHistory.push(folderKey);
                    historyIndex = navigationHistory.length - 1;
                }
                // Update button states
                updateNavigationButtons();
            }

            // Update sidebar active state
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.toggle('active', item.dataset.folder === folderKey);
            });

            // Update window title
            // Update window title - ALWAYS Macintosh HD per user request
            windowTitle.textContent = 'Macintosh HD';

            // Bring Finder to front when Macintosh HD is clicked
            if (folderKey === 'macintosh-hd') {
                highestZIndex++;
                finderWindow.style.zIndex = highestZIndex;
            }

            // Populate files (no longer opens popup for SB/SI - just shows folder contents)
            populateContent();
        }

        // Update navigation button states
        function updateNavigationButtons() {
            const backBtn = document.querySelector('.toolbar-button .fa-chevron-left')?.parentElement;
            const forwardBtn = document.querySelector('.toolbar-button .fa-chevron-right')?.parentElement;

            if (backBtn) {
                if (historyIndex > 0) {
                    backBtn.style.opacity = '1';
                    backBtn.style.cursor = 'pointer';
                    backBtn.style.pointerEvents = 'auto';
                } else {
                    backBtn.style.opacity = '0.3';
                    backBtn.style.cursor = 'not-allowed';
                    backBtn.style.pointerEvents = 'none';
                }
            }

            if (forwardBtn) {
                if (historyIndex < navigationHistory.length - 1) {
                    forwardBtn.style.opacity = '1';
                    forwardBtn.style.cursor = 'pointer';
                    forwardBtn.style.pointerEvents = 'auto';
                } else {
                    forwardBtn.style.opacity = '0.3';
                    forwardBtn.style.cursor = 'not-allowed';
                    forwardBtn.style.pointerEvents = 'none';
                }
            }
        }

        // Navigate back in history
        function navigateBack() {
            if (historyIndex > 0) {
                historyIndex--;
                selectFolder(navigationHistory[historyIndex], true);
                updateNavigationButtons();
            }
        }

        // Navigate forward in history
        function navigateForward() {
            if (historyIndex < navigationHistory.length - 1) {
                historyIndex++;
                selectFolder(navigationHistory[historyIndex], true);
                updateNavigationButtons();
            }
        }

        // Get file icon
        function getFileIcon(type) {
            if (type === 'folder') return { class: 'fas fa-folder', color: '#5ac8fa' };
            if (type === 'image') return { class: 'far fa-image image-icon', color: '#30d158' };
            if (type === 'video') return { class: 'fas fa-film video-icon', color: '#ff375f' };
            return { class: 'far fa-file-alt file-icon', color: '#aaa' };
        }

        // Render markdown to HTML
        function renderMarkdown(text) {
            if (!text) return '';
            // Convert **bold** to <strong>
            text = text.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
            // Convert *italic* to <em>
            text = text.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
            // Convert newlines to <br>
            text = text.replace(/\\n/g, '<br>');
            return text;
        }

        let isSystemUnlocked = false;

        // Strict whitelist — ONLY these names can be accessed without a password
        // Folders: the key used in folderData (targetFolder value)
        // Files: the exact name string in the files array
        const OPEN_FOLDERS = new Set([
            'archive',           // Root CIRE folder
            'macintosh-hd',      // Root nav
            'cire-concierge',
            'concierge-automotive',
            'concierge-maritime',
            'automotive',
            'maritime'
        ]);

        const OPEN_FILES = new Set([
            'blackscale logo.png',
            'art house.png',
            'fashion house.png',
            'coming soon.mp4',
            'teaser.mp4',
            'collection 1 logo.mp4'
        ]);

        function isItemProtected(name) {
            if (isSystemUnlocked) return false;
            // Check if it's an open folder key (or spaced display name)
            if (OPEN_FOLDERS.has(name) || OPEN_FOLDERS.has(name.replace(' ', '-'))) return false;
            // Check if it's an open file name
            if (OPEN_FILES.has(name)) return false;

            // Check if it's an automotive or maritime listing
            if (folderData['concierge-automotive']?.files?.some(f => f.name === name)) return false;
            if (folderData['concierge-maritime']?.files?.some(f => f.name === name)) return false;

            return true;
        }

        window.checkSystemPassword = function(e) {
            if (e.key === 'Enter') {
                if (e.target.value === 'Divin3lyProt3ct3dHighlyFavor3d!') {
                    isSystemUnlocked = true;
                    populateContent();
                } else {
                    e.target.style.borderColor = '#ff3b30';
                    e.target.value = '';
                    setTimeout(() => {
                        e.target.style.borderColor = '#3a3a3c';
                    }, 500);
                }
            }
        };

        // Populate content based on view
        function populateContent() {
            if (!isSystemUnlocked && isItemProtected(selectedFolder)) {
                if (currentView === 'icons') {
                    contentArea.innerHTML = `
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #111; height: 100%; box-sizing: border-box; text-align: center;">
                            <i class="fas fa-lock lock-icon" style="font-size: 40px; color: #636366; margin-bottom: 16px;"></i>
                            <h2 style="font-size: 16px; font-weight: 500; margin-bottom: 8px; color: #fff;">This folder is locked.</h2>
                            <p style="font-size: 12px; color: #888; margin-bottom: 20px;">Enter password to unlock</p>
                            <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: rgba(255,255,255,0.05); border: 1px solid #3a3a3c; border-radius: 8px; padding: 8px 12px; width: 100%; max-width: 180px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 14px;">
                        </div>
                    `;
                } else if (currentView === 'gallery') {
                    contentArea.innerHTML = `
                        <div class="gallery-view" style="display: flex; flex-direction: column; height: 100%;">
                            <div class="gallery-main" style="display: flex; flex: 1; min-height: 0; margin-bottom: 0;">
                                <div class="gallery-preview-area" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #111;">
                                    <i class="fas fa-lock lock-icon" style="font-size: 48px; color: #636366; margin-bottom: 16px;"></i>
                                    <h2 style="font-size: 18px; font-weight: 500; margin-bottom: 8px; color: #fff;">This folder is locked.</h2>
                                    <p style="font-size: 13px; color: #888; margin-bottom: 24px;">Enter password to unlock</p>
                                    <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: rgba(255,255,255,0.05); border: 1px solid #3a3a3c; border-radius: 8px; padding: 10px 14px; width: 100%; max-width: 200px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 14px;">
                                </div>

                            </div>
                        </div>
                    `;
                } else {
                    // List and Columns
                    contentArea.innerHTML = `
                        <div class="column-view" style="height: 100%; display: flex; width: 100%; box-sizing: border-box; overflow: hidden;">
                            <div class="column" style="width: 200px; min-width: 200px; border-right: 1px solid #1a1a1a; background: #222; box-sizing: border-box;">
                                <!-- Left column intentionally left blank for lock screen -->
                            </div>
                            <div class="column-preview" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #111; padding: 20px; box-sizing: border-box; text-align: center; overflow: hidden;">
                                <i class="fas fa-lock lock-icon" style="font-size: 32px; color: #636366; margin-bottom: 12px;"></i>
                                <h2 style="font-size: 15px; font-weight: 500; margin-bottom: 6px; color: #fff;">This file is locked.</h2>
                                <p style="font-size: 11px; color: #888; margin-bottom: 16px; max-width: 100%;">Enter password</p>
                                <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: transparent; border: 1px solid #3a3a3c; border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 160px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 12px; box-sizing: border-box;">
                            </div>
                        </div>
                    `;
                }
                return;
            }

            if (selectedFolder === 'curated') {
                renderCuratedContent(contentArea);
                return;
            }

            const files = folderData[selectedFolder]?.files || [];

            if (currentView === 'list') {
                contentArea.innerHTML = `
                    <div class="list-view">
                        <div class="list-header">
                            <span>Name</span>
                            <span>Date Modified</span>
                            <span>Size</span>
                        </div>
                        <div class="list-items">
                        ${files.map(file => {
                    const icon = getFileIcon(file.type);
                    let previewHtml;

                    if (file.type === 'image' && file.src) {
                        previewHtml = `<img src="${file.src}" style="width: 20px; height: 20px; object-fit: contain; margin-right: 10px;">`;
                    } else if (file.type === 'video' && file.src) {
                        previewHtml = `<video src="${file.src}#t=0.1" style="width: 20px; height: 20px; object-fit: cover; border-radius: 2px; margin-right: 10px;" muted playsinline onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`;
                    } else if (file.type === 'document' && file.textContent) {
                        previewHtml = `
                            <div style="width: 16px; height: 20px; background: white; color: black; font-size: 2px; overflow: hidden; padding: 1px; margin-right: 10px; font-family: sans-serif; opacity: 0.9; border: 1px solid #ccc;">
                                ${renderMarkdown(file.textContent)}
                            </div>
                        `;
                    } else {
                        previewHtml = `<i class="${icon.class}" style="color: ${icon.color}; margin-right: 10px;"></i>`;
                    }

                    return `
                                <div class="list-item" onclick="handleFileClick('${file.name.replace(/\.png$/, '')}')">
                                    <div class="file-name" style="display: flex; align-items: center;">
                                        ${previewHtml}
                                        ${file.name.replace(/\.png$/, '')}
                                    </div>
                                    <span class="date-modified">Dec 7, 2025</span>
                                    <span class="size">--</span>
                                </div>
                            `;
                }).join('')}
                        </div>
                    </div>
                `;
            } else if (currentView === 'icons') {
                contentArea.innerHTML = `
                    <div class="icon-view">
                        ${files.map(file => {
                    const icon = getFileIcon(file.type);
                    let previewHtml;

                    if (file.type === 'image' && file.src) {
                        previewHtml = `<img src="${file.src}" style="width: 64px; height: 64px; object-fit: contain; margin-bottom: 10px;">`;
                    } else if (file.type === 'video' && file.src) {
                        previewHtml = `<video src="${file.src}#t=0.1" style="width: 64px; height: 64px; object-fit: cover; border-radius: 4px; margin-bottom: 10px;" muted playsinline onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`;
                    } else if (file.type === 'document' && file.textContent) {
                        previewHtml = `
                            <div style="width: 50px; height: 64px; background: white; color: black; font-size: 4px; overflow: hidden; padding: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); text-align: left; margin-bottom: 10px; font-family: sans-serif; opacity: 0.9;">
                                ${file.textContent}
                            </div>
                        `;
                    } else {
                        previewHtml = `<i class="${icon.class}" style="color: ${icon.color}; font-size: 48px; margin-bottom: 10px;"></i>`;
                    }

                    return `
                                <div class="icon-view-item" onclick="handleFileClick('${file.name.replace(/\.png$/, '')}')">
                                    ${previewHtml}
                                    <span class="name">${file.name.replace(/\.png$/, '')}</span>
                                </div>
                            `;
                }).join('')}
                    </div>
                `;
            } else if (currentView === 'columns') {
                const selectedFile = selectedColumnIndex >= 0 ? files[selectedColumnIndex] : null;
                const selectedIcon = selectedFile ? getFileIcon(selectedFile.type) : null;
                const fileTypeLabel = selectedFile ? (selectedFile.type === 'image' ? 'PNG image' : selectedFile.type === 'video' ? 'MPEG-4 Video' : 'Document') : '';

                let isFileLocked = selectedFile && !isSystemUnlocked && isItemProtected(selectedFile.name);

                let previewContent = '';
                if (isFileLocked) {
                    previewContent = `
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #111; padding: 20px; box-sizing: border-box; text-align: center; overflow: hidden; height: 100%;">
                            <i class="fas fa-lock lock-icon" style="font-size: 32px; color: #636366; margin-bottom: 12px;"></i>
                            <h2 style="font-size: 15px; font-weight: 500; margin-bottom: 6px; color: #fff;">This file is locked.</h2>
                            <p style="font-size: 11px; color: #888; margin-bottom: 16px; max-width: 100%;">Enter password</p>
                            <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: transparent; border: 1px solid #3a3a3c; border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 160px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 12px; box-sizing: border-box;">
                        </div>
                    `;
                } else if (selectedFile?.type === 'image' && selectedFile?.src) {
                    previewContent = `<img src="${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
                } else if (selectedFile?.type === 'video' && selectedFile?.src) {
                    previewContent = `<video src="${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain;" autoplay muted loop playsinline></video>`;
                } else if (selectedFile?.type === 'document' && selectedFile?.textContent) {
                    previewContent = `
                        <div class="document-preview-container">
                            <div class="document-preview-header">📄 ${selectedFile.name.replace(/\.png$/, '')}</div>
                            <div class="document-preview-body">${renderMarkdown(selectedFile.textContent.substring(0, 200))}...</div>
                        </div>`;
                } else if (selectedFile) {
                    previewContent = `<i class="${selectedIcon.class}" style="font-size: 64px; color: ${selectedIcon.color}"></i>`;
                }

                contentArea.innerHTML = `
                    <div class="column-view">
                        <div class="column">
                            ${files.map((file, index) => {
                    const icon = getFileIcon(file.type);
                    let itemPreviewHtml;

                    if (file.type === 'image' && file.src) {
                        itemPreviewHtml = `<img src="${file.src}" style="width: 20px; height: 20px; object-fit: contain; margin-right: 10px;">`;
                    } else if (file.type === 'video' && file.src) {
                        itemPreviewHtml = `<video src="${file.src}#t=0.1" style="width: 20px; height: 20px; object-fit: cover; border-radius: 2px; margin-right: 10px;" muted playsinline></video>`;
                    } else if (file.type === 'document' && file.textContent) {
                        itemPreviewHtml = `
                            <div style="width: 16px; height: 20px; background: white; color: black; font-size: 2px; overflow: hidden; padding: 1px; margin-right: 10px; font-family: sans-serif; opacity: 0.9; border: 1px solid #ccc;">
                                ${file.textContent}
                            </div>
                        `;
                    } else {
                        itemPreviewHtml = `<i class="${icon.class}" style="color: ${icon.color}; margin-right: 10px;"></i>`;
                    }

                    return `
                        <div class="column-item${index === selectedColumnIndex ? ' selected' : ''}" 
                             onclick="selectColumnItem(${index})" 
                             ondblclick="handleFileClick('${file.name.replace(/\.png$/, '')}')" 
                             style="display: flex; align-items: center;">
                            ${itemPreviewHtml}
                            ${file.name.replace(/\.png$/, '')}
                        </div>
                    `;
                }).join('')}
                        </div>
                        <div class="column-preview">
                            ${selectedFile ? `
                                <div class="column-preview-image">
                                    ${previewContent}
                                </div>
                                <div class="column-preview-header">
                                    <div class="column-preview-name">${selectedFile.name.replace(/\.png$/, '')}</div>
                                    <div class="column-preview-type">${fileTypeLabel} - 256 KB</div>
                                </div>
                                <div class="gallery-info-section">
                                    <div class="gallery-info-section-title">
                                        Information
                                        <span class="show-more">Show Less</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Created</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Modified</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Last opened</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Content created</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                </div>
                                <div class="gallery-info-section">
                                    <div class="gallery-info-section-title">Tags</div>
                                    <div style="color: #888; font-size: 12px; padding: 5px 0;">Add Tags...</div>
                                </div>
                                <div class="gallery-actions">
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-undo"></i>
                                        <span>Rotate Left</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-marker"></i>
                                        <span>Markup</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-ellipsis-h"></i>
                                        <span>More...</span>
                                    </div>
                                </div>
                            ` : `
                                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #888;">
                                    Select a file to preview
                                </div>
                            `}
                        </div>
                    </div>
                `;
            } else if (currentView === 'gallery') {
                const selectedFile = files[selectedGalleryIndex] || files[0];
                const icon = selectedFile ? getFileIcon(selectedFile.type) : { class: '', color: '' };
                const fileTypeLabel = selectedFile ? (selectedFile.type.charAt(0).toUpperCase() + selectedFile.type.slice(1)) : '';
                let isFileLocked = selectedFile && !isSystemUnlocked && isItemProtected(selectedFile.name);

                // Tag list
                const tagsList = [];

                // Initialize tags if not present
                if (selectedFile && !selectedFile.tags) selectedFile.tags = [];

                // Generate tag options HTML
                const tagColors = {
                    "CFDA Award Candidate": "green",
                    "The Fashion Awards Candidate": "green",
                    "International Woolmark Prize Candidate": "green",
                    "JWA Candidate": "yellow",
                    "GEM Award Candidate": "yellow",
                    "Inhorgenta Award Candidate": "yellow"
                };

                const tagOptionsHTML = tagsList.map(tag => {
                    const color = tagColors[tag] || 'gray';
                    return `
                        <div class="gallery-tag-option" data-tag="${tag}">
                            <div class="gallery-tag-circle ${color}"></div>
                            ${tag}
                        </div>
                    `;
                }).join('');

                // Generate chosen tags HTML
                const chosenTagsHTML = selectedFile && selectedFile.tags ? selectedFile.tags.map(tag => `
                    <div class="gallery-tag-chip">
                        ${tag} <i class="fas fa-times" data-remove-tag="${tag}"></i>
                    </div>
                `).join('') : '';

                // File Preview Logic - Images, Videos, and Documents
                let previewContent;
                if (selectedFile?.type === 'image' && selectedFile?.src) {
                    previewContent = `<img src="${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;">`;
                } else if (selectedFile?.type === 'video' && selectedFile?.src) {
                    previewContent = `<video src="${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" autoplay muted loop playsinline></video>`;
                } else if (selectedFile?.type === 'document' && selectedFile?.textContent) {
                    previewContent = `
                        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 20px; max-width: 300px; max-height: 250px; overflow: hidden; text-align: left; font-family: 'Georgia', serif;">
                            <div style="font-size: 11px; color: #888; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">📄 ${selectedFile.name.replace(/\.png$/, '')}</div>
                            <div style="font-size: 13px; color: #ddd; line-height: 1.6;">${renderMarkdown(selectedFile.textContent)}</div>
                        </div>`;
                } else {
                    previewContent = `<i class="${icon.class}" style="color: ${icon.color}"></i>`;
                }

                contentArea.innerHTML = `
                    <div class="gallery-view">
                        <div class="gallery-main">
                            <div class="gallery-preview">
                                <div class="gallery-preview-content">
                                    ${previewContent}
                                </div>
                            </div>
${isFileLocked ? '' : `
                            <div class="gallery-info">
                                <div class="gallery-info-header">
                                    <i class="${icon.class}" style="color: ${icon.color}"></i>
                                    <div>
                                        <div class="info-name">${selectedFile?.name.replace(/\.png$/, '') || 'No file selected'}</div>
                                        <div class="info-type">${fileTypeLabel}${selectedFile ? ' - 256 KB' : ''}</div>
                                    </div>
                                </div>
                                <div class="gallery-info-section">
                                    <div class="gallery-info-section-title">
                                        Information
                                        <span class="show-more">Show More</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Created</span>
                                        <span class="value">Dec 7, 2025 at 23:57</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Modified</span>
                                        <span class="value">Dec 7, 2025 at 23:57</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Last opened</span>
                                        <span class="value">Dec 7, 2025 at 23:57</span>
                                    </div>
                                </div>
                                <div class="gallery-actions">
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-undo"></i>
                                        <span>Rotate Left</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-marker"></i>
                                        <span>Markup</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-ellipsis-h"></i>
                                        <span>More...</span>
                                    </div>
                                </div>
                            </div>
`}
                        </div>
                        <div class="gallery-thumbnails" id="gallery-thumbnails"></div>
                    </div>
                `;

                // Add event listeners for tags
                const tagsInput = document.getElementById('gallery-tags-input');
                const tagsDropdown = document.getElementById('gallery-tags-dropdown');

                if (tagsInput) {
                    tagsInput.addEventListener('click', (e) => {
                        e.stopPropagation();
                        // Close any other menus
                        document.querySelectorAll('.show').forEach(el => {
                            if (el !== tagsDropdown) el.classList.remove('show');
                        });

                        // Toggle dropdown - move to body to escape transform stacking context
                        if (tagsDropdown.classList.contains('show')) {
                            tagsDropdown.classList.remove('show');
                            tagsInput.classList.remove('active');
                        } else {
                            // Position dropdown using fixed positioning
                            const rect = tagsInput.getBoundingClientRect();
                            document.body.appendChild(tagsDropdown); // Move to body to escape parent overflow/transform
                            tagsDropdown.style.left = rect.left + 'px';
                            tagsDropdown.style.top = (rect.bottom + 4) + 'px';
                            tagsDropdown.classList.add('show');
                            tagsInput.classList.add('active');
                        }
                    });

                    // Tag selection
                    document.querySelectorAll('.gallery-tag-option').forEach(option => {
                        option.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const tag = option.dataset.tag;
                            if (selectedFile && !selectedFile.tags.includes(tag)) {
                                selectedFile.tags.push(tag);
                                populateContent();
                            }
                        });
                    });

                    // Tag removal
                    document.querySelectorAll('[data-remove-tag]').forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const tagToRemove = btn.dataset.removeTag;
                            if (selectedFile) {
                                selectedFile.tags = selectedFile.tags.filter(t => t !== tagToRemove);
                                populateContent();
                            }
                        });
                    });
                }

                // Populate thumbnails
                const thumbnailsContainer = document.getElementById('gallery-thumbnails');
                files.forEach((file, index) => {
                    const thumbIcon = getFileIcon(file.type);
                    const thumb = document.createElement('div');
                    thumb.className = 'gallery-thumbnail' + (index === selectedGalleryIndex ? ' selected' : '');

                    let previewHtml;
                    if (file.type === 'image' && file.src) {
                        previewHtml = `<img src="${file.src}" style="width: 100%; height: 100%; object-fit: contain;">`;
                    } else if (file.type === 'video' && file.src) {
                        previewHtml = `<video src="${file.src}#t=0.1" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`;
                    } else if (file.type === 'document' && file.textContent) {
                        previewHtml = `
                            <div style="width: 100%; height: 100%; background: white; color: black; font-size: 3px; overflow: hidden; padding: 2px; font-family: sans-serif; text-align: left;">
                                ${file.textContent}
                            </div>
                        `;
                    } else {
                        previewHtml = `<i class="${thumbIcon.class}" style="color: ${thumbIcon.color}"></i>`;
                    }

                    thumb.innerHTML = previewHtml;
                    thumb.addEventListener('click', () => {
                        selectedGalleryIndex = index;
                        populateContent();
                    });
                    thumbnailsContainer.appendChild(thumb);
                });
            }

            itemCount.textContent = `${files.length} item${files.length !== 1 ? 's' : ''}`;
        }

        // Open finder window
        function openFinderWindow(folderKey) {
            selectedFolder = folderKey || 'cire-canon';
            finderWindow.classList.add('active');

            // Reset position to center to ensure it's always centered when opened
            const startLeft = Math.max(0, (window.innerWidth - 700) / 2);
            const startTop = 100;
            const centerX = window.innerWidth / 2;

            finderWindow.style.left = startLeft + 'px';
            finderWindow.style.top = startTop + 'px';

            // Calculate and store offset for resize logic
            finderWindow.dataset.centerOffset = startLeft - centerX;

            // Initialize navigation history with the starting folder
            navigationHistory = [selectedFolder];
            historyIndex = 0;
            updateNavigationButtons();

            // Bring to front
            highestZIndex++;
            finderWindow.style.zIndex = highestZIndex;

            populateSidebar();
            populateContent();

            // Update desktop folder selection
            deselectAllFolders();
            const selectedDesktopFolder = document.querySelector(`.desktop-folder[data-folder="${selectedFolder}"]`);
            if (selectedDesktopFolder) {
                selectedDesktopFolder.classList.add('selected');
            }
        }

        // Close finder window
        function closeFinderWindow() {
            finderWindow.classList.remove('active');
            deselectAllFolders();
        }

        // Deselect all folders
        function deselectAllFolders() {
            document.querySelectorAll('.desktop-folder').forEach(folder => {
                folder.classList.remove('selected');
            });
        }

        // Event listeners for desktop folders (locked positions - no dragging)
        document.querySelectorAll('.desktop-folder').forEach(folder => {
            folder.addEventListener('dblclick', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent wallpaper reveal from triggering
                
                const isJoined = localStorage.getItem('cire_network_joined') === 'true';
                const folderName = folder.dataset.folder;
                
                if (folderName === 'inquiry') {
                    openPopup('popup-inquiry');
                    return;
                }
                
                if (folder.id === 'macintosh-hd') {
                    openFinderWindow('cire-canon');
                    return;
                }

                if (!isJoined && folderName !== 'cire-concierge') {
                    openPopup('popup-restricted');
                    return;
                }

                if (folderName) {
                    openFinderWindow(folderName);
                }
            });

            // Prevent single click from doing anything (except selection if we add that later)
            folder.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });

        // Click on desktop to deselect folders
        desktop.addEventListener('click', (e) => {
            if (e.target === desktop || e.target.classList.contains('macos-desktop')) {
                deselectAllFolders();
            }
        });

        // Close button
        document.getElementById('close-btn').addEventListener('click', closeFinderWindow);

        // Back button
        const backBtn = document.querySelector('.toolbar-button .fa-chevron-left')?.parentElement;
        if (backBtn) {
            backBtn.addEventListener('click', navigateBack);
        }

        // Forward button
        const forwardBtn = document.querySelector('.toolbar-button .fa-chevron-right')?.parentElement;
        if (forwardBtn) {
            forwardBtn.addEventListener('click', navigateForward);
        }

        // Initialize button states
        updateNavigationButtons();

        // Theme toggle
        themeToggle.addEventListener('change', (e) => {
            document.body.classList.toggle('light-mode', e.target.checked);
        });

        // View button toggle
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            viewMenu.classList.toggle('show');
        });

        // View menu items
        document.querySelectorAll('.view-menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const view = item.dataset.view;
                currentView = view;

                // Update menu selection
                document.querySelectorAll('.view-menu-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');

                // Update button icon and label
                const icons = {
                    list: 'fa-th-list',
                    icons: 'fa-th-large',
                    columns: 'fa-columns',
                    gallery: 'fa-images'
                };
                const labels = {
                    list: 'List',
                    icons: 'Icons',
                    columns: 'Columns',
                    gallery: 'Gallery'
                };
                viewIcon.className = `fas ${icons[view]}`;
                viewLabel.textContent = labels[view];

                // Close menu and refresh content
                viewMenu.classList.remove('show');
                populateContent();
            });
        });

        // Close menus when clicking elsewhere
        document.addEventListener('click', (e) => {
            viewMenu.classList.remove('show');
            tagsMenu.classList.remove('show');

            // Close tags dropdown if it exists
            const tagsDropdown = document.getElementById('gallery-tags-dropdown');
            const tagsInput = document.getElementById('gallery-tags-input');
            if (tagsDropdown && !e.target.closest('.gallery-tags-wrapper')) {
                tagsDropdown.classList.remove('show');
                if (tagsInput) tagsInput.classList.remove('active');
            }
        });

        // Toggle toolbar tags menu
        tagsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tagsMenu.classList.toggle('show');
        });

        // Initialize toolbar tags
        const globalTagsList = [];

        const tagColors = {
            "CFDA Award Candidate": "green",
            "The Fashion Awards Candidate": "green",
            "International Woolmark Prize Candidate": "green",
            "JWA Candidate": "yellow",
            "GEM Award Candidate": "yellow",
            "Inhorgenta Award Candidate": "yellow"
        };

        tagsMenu.innerHTML = globalTagsList.map(tag => {
            const color = tagColors[tag] || 'gray';
            return `
                <div class="view-menu-item" style="color: #ddd;">
                    <div class="gallery-tag-circle ${color}" style="margin-right: 8px;"></div> ${tag}
                </div>
            `;
        }).join('');

        // Share button - copy to clipboard
        shareBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            try {
                await navigator.clipboard.writeText('cireconglomerate.com');
                clipboardNotification.classList.add('show');
                setTimeout(() => {
                    clipboardNotification.classList.remove('show');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });

        // Draggable window (Fixed with bounds)
        const finderWin = document.getElementById('finder-window');
        const finderTitlebar = finderWin.querySelector('.window-titlebar');

        let isFinderDragging = false;
        let finderOffsetX, finderOffsetY;

        finderTitlebar.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('window-control')) return;
            isFinderDragging = true;
            finderOffsetX = e.clientX - finderWin.offsetLeft;
            finderOffsetY = e.clientY - finderWin.offsetTop;

            // Ensure z-index handling
            if (typeof highestZIndex !== 'undefined') {
                highestZIndex++;
                finderWin.style.zIndex = highestZIndex;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!isFinderDragging) return;
            e.preventDefault();

            let newLeft = e.clientX - finderOffsetX;
            let newTop = e.clientY - finderOffsetY;

            // BOUNDS CHECKING
            const maxLeft = window.innerWidth - finderWin.offsetWidth;
            const maxTop = window.innerHeight - finderWin.offsetHeight;

            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            newTop = Math.max(0, Math.min(newTop, maxTop));

            finderWin.style.left = newLeft + 'px';
            finderWin.style.top = newTop + 'px';

            // Remove transform if it exists from previous attempts
            finderWin.style.transform = 'none';
        });

        document.addEventListener('mouseup', () => {
            if (isFinderDragging) {
                isFinderDragging = false;
                // Update center offset for resize logic
                const currentLeft = parseFloat(finderWin.style.left) || 0;
                finderWin.dataset.centerOffset = currentLeft - (window.innerWidth / 2);
            }
        });


        // Desktop Folder Positioning - Responsive to window size
        function positionDesktopFolders() {
            const viewportWidth = window.innerWidth;
            const leftFoldersX = 20; // Matches approx right edge at 97
            // Ensure folder (approx 100px width) is fully visible + 20px margin from right edge
            const rightFoldersX = Math.max(leftFoldersX + 100, viewportWidth - 120); 

            // Define folder positions adaptively based on screenshots
            const folderPositions = {
                // Left Side (moved up 30px net)
                'macintosh-hd': { left: leftFoldersX, top: 200 },
                'inquiry': { left: leftFoldersX, top: 320 }
            };
            
            // Calculate right folder positions dynamically to ensure exactly 30px vertical gap
            let currentTop = 120; // Lowered by 25px
            const rightFolderIds = [
                'sophisticated-ignorance',
                'sophisticated-brilliance',
                'cire-hospitality',
                'cire-concierge',
                'cire-canon'
            ];
            
            // X axis + 10px
            const updatedRightFoldersX = rightFoldersX + 10;
            
            rightFolderIds.forEach(folderId => {
                const folder = document.getElementById(folderId) || document.querySelector(`[data-folder="${folderId}"]`);
                if (folder) {
                    folderPositions[folderId] = { left: updatedRightFoldersX, top: currentTop };
                    folder.style.left = updatedRightFoldersX + 'px';
                    folder.style.top = currentTop + 'px';
                    // We must calculate the height it takes. If display is none, it might be 0, but it should be visible here.
                    const fHeight = folder.offsetHeight || 85; 
                    currentTop += fHeight + 10; // exactly 10px apart vertically
                }
            });

            // Apply positions to each folder
            Object.keys(folderPositions).forEach(folderId => {
                const folder = document.getElementById(folderId) ||
                    document.querySelector(`[data-folder="${folderId}"]`);

                if (folder) {
                    folder.style.left = folderPositions[folderId].left + 'px';
                    folder.style.top = folderPositions[folderId].top + 'px';
                }
            });
        }

        // Make desktop folders draggable
        function makeDesktopDraggable(folder) {
            let isDragging = false;
            let startX, startY, initialLeft, initialTop;

            folder.addEventListener('mousedown', (e) => {
                // Prevent dragging if content locked (e.g. reveal mode)
                if (folder.style.pointerEvents === 'none') return;

                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialLeft = folder.offsetLeft;
                initialTop = folder.offsetTop;

                // Bring to front slightly
                folder.style.zIndex = 10;
                e.preventDefault();
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;

                let newLeft = initialLeft + dx;
                let newTop = initialTop + dy;

                // Bounds checking
                const maxLeft = window.innerWidth - folder.offsetWidth;
                const maxTop = window.innerHeight - folder.offsetHeight;

                newLeft = Math.max(0, Math.min(newLeft, maxLeft));
                newTop = Math.max(0, Math.min(newTop, maxTop));

                folder.style.left = newLeft + 'px';
                folder.style.top = newTop + 'px';

                // Mark as manually moved
                folder.dataset.manuallyMoved = 'true';
            });

            document.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    // Save positions to localStorage
                    try {
                        const stored = localStorage.getItem('cire-folder-positions') || '{}';
                        const savedPositions = JSON.parse(stored);
                        const folderId = folder.id || folder.dataset.folder;
                        if (folderId) {
                            savedPositions[folderId] = {
                                left: parseFloat(folder.style.left),
                                top: parseFloat(folder.style.top)
                            };
                            localStorage.setItem('cire-folder-positions', JSON.stringify(savedPositions));
                        }
                    } catch(e) {
                        console.error("Error saving position", e);
                    }
                }
            });
        }

        // Debounce function to limit resize event frequency
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Add resize listener with debouncing
        window.addEventListener('resize', debounce(() => {
            positionDesktopFolders();

            // Reposition ALL open windows relative to new center
            // This maintains their visual position relative to the center of the screen
            const newCenterX = window.innerWidth / 2;
            document.querySelectorAll('.popup-window').forEach(popup => {
                // If we have a stored offset, use it. usage of || 0 handles potential NaNs
                const offset = parseFloat(popup.dataset.centerOffset);
                if (!isNaN(offset)) {
                    popup.style.left = (newCenterX + offset) + 'px';
                }
            });

            // Handle Finder window specifically
            if (finderWindow) {
                const offset = parseFloat(finderWindow.dataset.centerOffset);
                if (!isNaN(offset)) {
                    finderWindow.style.left = (newCenterX + offset) + 'px';
                }
            }
        }, 10));

        // Position initial popups relative to viewport center
        function positionInitialPopups() {
            const centerX = window.innerWidth / 2;

            function setInitialPos(id, offset, top) {
                const el = document.getElementById(id);
                if (el) {
                    // Only set if not already set (preserve manual moves if re-called)
                    if (!el.dataset.centerOffset) {
                        el.style.left = (centerX + offset) + 'px';
                        el.style.top = top;
                        el.dataset.centerOffset = offset; // Store relative position
                    }
                }
            }

            setInitialPos('popup-maison', -150, '18px');
            setInitialPos('popup-transcendence', -376, '69px');
            setInitialPos('popup-brilliance', -330, '202px');
            setInitialPos('popup-ignorance', 34, '285px');
            setInitialPos('popup-guestbook', -125, '100px');
            setInitialPos('popup-coming-soon', 100, '200px');
            setInitialPos('popup-power', -200, '120px');
        }

        // Initialize
        window.addEventListener('DOMContentLoaded', () => {
            positionDesktopFolders();
            generateCarousels();

            const hasJoined = localStorage.getItem('cire_network_joined') === 'true';

            // Open windows on launch
            setTimeout(() => {
                openPopup('popup-maison');
                openPopup('popup-transcendence');
                openPopup('popup-brilliance');
                openPopup('popup-ignorance');
                
                if (!hasJoined) {
                    openPopup('popup-guestbook');
                }

                // Initialize draggable desktop folders
                document.querySelectorAll('.desktop-folder').forEach(folder => {
                    makeDesktopDraggable(folder);
                });

                // Position all popups after opening
                positionInitialPopups();


                // Maison Manifest Delay - Block ONLY controls
                const maisonWindow = document.getElementById('popup-maison');
                if (maisonWindow) {
                    const titlebar = maisonWindow.querySelector('.popup-titlebar');
                    if (titlebar) {
                        const blocker = document.createElement('div');
                        blocker.id = 'maison-blocker';
                        blocker.style.position = 'absolute';
                        blocker.style.top = '0';
                        blocker.style.left = '0';
                        blocker.style.width = '100%';
                        blocker.style.height = '100%';
                        blocker.style.zIndex = '50'; // Above controls
                        blocker.style.cursor = 'wait';
                        titlebar.appendChild(blocker);

                        setTimeout(() => {
                            if (titlebar.contains(blocker)) {
                                titlebar.removeChild(blocker);
                            }
                        }, 5000);
                    }
                }

                // Enforce Graphite Mode with 5s delay for Guestbook
                setTimeout(() => {
                    const gbWindow = document.getElementById('popup-guestbook');
                    if (gbWindow) {
                        // 1. Force Fullscreen (Graphite Mode)
                        if (!gbWindow.classList.contains('graphite')) {
                            toggleGraphiteMode('popup-guestbook');
                        }

                        // 2. Global Interaction Blocker
                        let globalBlocker = document.getElementById('global-blocker');
                        if (!globalBlocker) {
                            globalBlocker = document.createElement('div');
                            globalBlocker.id = 'global-blocker';
                            globalBlocker.style.position = 'fixed';
                            globalBlocker.style.top = '0';
                            globalBlocker.style.left = '0';
                            globalBlocker.style.width = '100vw';
                            globalBlocker.style.height = '100vh';
                            globalBlocker.style.zIndex = '9998'; // Just below Guestbook (9999)
                            globalBlocker.style.cursor = 'wait';
                            globalBlocker.style.background = 'transparent'; // Invisible wall
                            document.body.appendChild(globalBlocker);

                            // Ensure Guestbook is ON TOP
                            gbWindow.style.zIndex = '9999';
                        }

                        // 3. Block Window Controls (Close/Min/Max) specifically
                        const controls = gbWindow.querySelectorAll('.popup-control');
                        controls.forEach(c => {
                            c.style.pointerEvents = 'none';
                            c.style.opacity = '0.5';
                        });

                        // Remove blocking immediately (was 5000ms)
                        setTimeout(() => {
                            // Remove global blocker
                            if (globalBlocker && document.body.contains(globalBlocker)) {
                                document.body.removeChild(globalBlocker);
                            }

                            // Re-enable window controls
                            controls.forEach(c => {
                                c.style.pointerEvents = 'auto';
                                c.style.opacity = '1';
                            });
                        }, 5000); // RESTORED TO 5000ms per user request
                    }
                }, 100);
            }, 300);
        });

        // GLOBAL Z-INDEX HANDLER (Delegated)
        document.addEventListener('mousedown', (e) => {
            const popup = e.target.closest('.popup-window');
            if (popup) {
                if (parseInt(popup.style.zIndex) !== highestZIndex) {
                    highestZIndex++;
                    popup.style.zIndex = highestZIndex;
                }
            }
        }, true);

        // Click wallpaper to reveal desktop (macOS-style)
        let desktopRevealed = false;
        const desktopEl = document.getElementById('desktop') || document.querySelector('.macos-desktop');

        if (desktopEl) {
            // Prevent event bubbling on window controls
            document.querySelectorAll('.popup-window').forEach(popup => {
                const controls = popup.querySelectorAll('.popup-control');
                controls.forEach(control => {
                    control.addEventListener('click', (e) => { e.stopPropagation(); });
                    control.addEventListener('mousedown', (e) => { e.stopPropagation(); });
                });
            });

            desktopEl.addEventListener('click', (e) => {
                const folder = e.target.closest('.desktop-folder');

                // If clicking a folder, do NOT trigger desktop restore or reveal
                if (folder) {
                    return;
                }

                // Handle Reveal Desktop (only if clicking wallpaper)
                if (e.target !== desktopEl && !e.target.classList.contains('macos-desktop')) return;

                const allPopups = document.querySelectorAll('.popup-window.active');
                const finderWin = document.getElementById('finder-window');

                if (!desktopRevealed) {
                    desktopRevealed = true;
                    allPopups.forEach((popup, i) => {
                        const rect = popup.getBoundingClientRect();
                        popup.dataset.preRevealLeft = popup.style.left;
                        popup.dataset.preRevealTop = popup.style.top;
                        if (!popup.style.left) popup.dataset.preRevealLeft = rect.left + 'px';
                        if (!popup.style.top) popup.dataset.preRevealTop = rect.top + 'px';

                        popup.style.transition = 'left 0.4s ease, top 0.4s ease, opacity 0.4s ease';
                        popup.style.right = 'auto';
                        if (i % 2 === 0) {
                            popup.style.setProperty('left', '-' + (popup.offsetWidth + 50) + 'px', 'important');
                        } else {
                            popup.style.setProperty('left', (window.innerWidth + 50) + 'px', 'important');
                        }
                    });
                    if (finderWin && finderWin.style.display !== 'none') {
                        finderWin.dataset.preRevealLeft = finderWin.style.left;
                        finderWin.dataset.preRevealTop = finderWin.style.top;
                        finderWin.style.transition = 'left 0.4s ease, top 0.4s ease';
                        finderWin.style.left = (window.innerWidth + 50) + 'px';
                    }
                } else {
                    desktopRevealed = false;
                    allPopups.forEach(popup => {
                        popup.style.transition = 'left 0.4s ease, top 0.4s ease';
                        if (popup.dataset.preRevealLeft) {
                            popup.style.left = popup.dataset.preRevealLeft;
                            popup.style.top = popup.dataset.preRevealTop;
                            delete popup.dataset.preRevealTop;
                        }
                        
                        // Always explicitly recenter
                        const pWidth = popup.offsetWidth || parseInt(window.getComputedStyle(popup).width) || 550;
                        popup.style.left = Math.max(0, (window.innerWidth - pWidth) / 2) + 'px';
                            if (popup.id === 'popup-restricted') {
                                const pHeight = popup.offsetHeight || 150;
                                popup.style.top = Math.max(0, (window.innerHeight - pHeight) / 2) + 'px';
                            } else {
                                popup.style.top = '100px';
                            }
                    });
                    if (finderWin) {
                        if (finderWin.dataset.preRevealLeft) {
                            finderWin.style.left = finderWin.dataset.preRevealLeft;
                            finderWin.style.top = finderWin.dataset.preRevealTop;
                            delete finderWin.dataset.preRevealLeft;
                            delete finderWin.dataset.preRevealTop;
                        } else if (finderWin.style.display !== 'none') {
                            finderWin.style.left = Math.max(0, (window.innerWidth - 700) / 2) + 'px';
                            finderWin.style.top = '100px';
                        }
                    }
                    setTimeout(() => {
                        allPopups.forEach(p => p.style.transition = '');
                        if (finderWin) finderWin.style.transition = '';
                    }, 500);
                }
            });
        }


        // Grid Toggle Feature
        let gridVisible = false;
        const gridOverlay = document.getElementById('grid-overlay');
        const mouseXDisplay = document.getElementById('mouse-x');
        const mouseYDisplay = document.getElementById('mouse-y');
        const centerOffsetDisplay = document.getElementById('center-offset');
        const gridLineX = document.getElementById('grid-line-x');
        const gridLineY = document.getElementById('grid-line-y');

        document.addEventListener('keydown', (e) => {
            if (e.key === 'g' || e.key === 'G') {
                gridVisible = !gridVisible;
                gridOverlay.style.display = gridVisible ? 'block' : 'none';
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (gridVisible) {
                mouseXDisplay.textContent = e.clientX;
                mouseYDisplay.textContent = e.clientY;
                const centerOffset = Math.round(e.clientX - window.innerWidth / 2);
                centerOffsetDisplay.textContent = centerOffset;

                // Move crosshair lines
                if (gridLineX && gridLineY) {
                    gridLineX.style.top = e.clientY + 'px';
                    gridLineY.style.left = e.clientX + 'px';
                }
            }
        });

        // Ensure popups come to front on click
        document.querySelectorAll('.popup-window').forEach(popup => {
            popup.addEventListener('mousedown', () => {
                if (parseInt(popup.style.zIndex) !== highestZIndex) {
                    highestZIndex++;
                    popup.style.zIndex = highestZIndex;
                }
            });
        });
        // --- Curated Content Custom Gallery (TikTok) ---
        function renderCuratedContent(container) {
            container.innerHTML = `
                <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background: #111;">
                    <!-- Mosaic Feed View -->
                    <div id="curated-feed-view" style="display: flex; justify-content: center; overflow-y: auto; flex-grow: 1; padding: 20px;">
                        <div style="width: 100%; max-width: 1200px; display: flex; justify-content: center;">
                            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@thesophisticatedignorant" data-unique-id="thesophisticatedignorant" data-embed-type="creator" style="max-width: 100%; min-width: 288px;" >
                                <section>
                                    <a target="_blank" href="https://www.tiktok.com/@thesophisticatedignorant?refer=creator_embed">@thesophisticatedignorant</a>
                                </section>
                            </blockquote>
                        </div>
                    </div>
                </div>
            `;
            
            // Reload TikTok embed script to parse the newly added creator embed
            if (window.tiktokEmbed && window.tiktokEmbed.embed) {
                window.tiktokEmbed.embed();
            } else {
                const script = document.createElement('script');
                script.src = 'https://www.tiktok.com/embed.js';
                script.async = true;
                document.body.appendChild(script);
            }
        }

        window.openTikTokPlayer = function(videoId) {
            const feedView = document.getElementById('curated-feed-view');
            const playerView = document.getElementById('curated-player-view');
            
            if (feedView) feedView.style.display = 'none';
            if (playerView) playerView.style.display = 'flex';
            
            const container = document.getElementById('tiktok-embed-container');
            if (container) {
                container.innerHTML = `<div class="loader" style="border: 2px solid #333; border-top: 2px solid #fff; border-radius: 50%; width: 24px; height: 24px; animation: spin 1s linear infinite;"></div>`;
                
                // Use TikTok's official embed player for native features
                setTimeout(() => {
                    container.innerHTML = `
                        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@thesophisticatedignorant/video/${videoId}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px; width: 100%; height: 100%; margin: 0; padding: 0; border: none; background: transparent;" >
                            <section> 
                                <a target="_blank" title="@thesophisticatedignorant" href="https://www.tiktok.com/@thesophisticatedignorant?refer=embed">@thesophisticatedignorant</a> 
                            </section> 
                        </blockquote>
                    `;
                    // Load TikTok embed script if not already loaded
                    if (!document.getElementById('tiktok-embed-script')) {
                        const script = document.createElement('script');
                        script.id = 'tiktok-embed-script';
                        script.src = 'https://www.tiktok.com/embed.js';
                        script.async = true;
                        document.body.appendChild(script);
                    } else {
                        if (window.tiktokEmbed && window.tiktokEmbed.embed) {
                            window.tiktokEmbed.embed();
                        }
                    }
                }, 300);
            }
        };

        window.closeTikTokPlayer = function() {
            const feedView = document.getElementById('curated-feed-view');
            const playerView = document.getElementById('curated-player-view');
            const container = document.getElementById('tiktok-embed-container');
            
            if (feedView) feedView.style.display = 'block';
            if (playerView) playerView.style.display = 'none';
            if (container) container.innerHTML = '';
        };

        // --- Automotive & Maritime Custom Gallery ---
        async function renderProductGallery(folderKey, container) {
            container.innerHTML = `<div style="padding: 20px; color: white; display:flex; justify-content:center; align-items:center; height:100%;">
                <div class="loader" style="border: 2px solid #333; border-top: 2px solid #fff; border-radius: 50%; width: 24px; height: 24px; animation: spin 1s linear infinite;"></div>
            </div>`;
            try {
                const res = await fetch('/src/blustreet_data.json');
                const data = await res.json();
                const category = folderKey === 'concierge-automotive' ? 'automotive' : 'maritime';
                const filtered = data.filter(d => d.category === category);
                
                let html = `<div class="product-gallery" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px; padding: 24px; overflow-y: auto; height: 100%; box-sizing: border-box;">`;
                filtered.forEach((item, index) => {
                    const imgSrc = item.image;
                    html += `
                        <div class="product-card" onclick="openProductDetail(${index}, '${category}')" style="background: rgba(28, 28, 30, 0.8); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; cursor: pointer; transition: transform 0.2s, background 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center;">
                            <img src="${imgSrc}" style="width: 100%; height: 130px; object-fit: contain; margin-bottom: 20px; filter: contrast(1.1) brightness(1.1); ">
                            <h3 style="color: #fff; font-size: 15px; font-weight: 500; margin: 0 0 8px 0; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">${item.name}</h3>
                            
                        </div>
                    `;
                });
                html += `</div>`;
                container.innerHTML = html;
                
                window.currentShowroomData = filtered;
            } catch (e) {
                console.error(e);
                container.innerHTML = `<div style="padding: 20px; color: #ff453a; text-align: center; font-family: -apple-system, sans-serif;">Failed to load fleet data.<br>Please ensure the data file exists.</div>`;
            }
        }

        let isOpeningModal = false;
        function openProductDetail(index, category) {
            if (isOpeningModal) return;
            isOpeningModal = true;
            
            try {
                const modal = document.getElementById('product-detail-modal');
                if (modal && modal.style.display === 'flex') return;
                const item = window.currentShowroomData[index];
                const imgSrc = item.image;
                
                document.getElementById('pd-image').src = imgSrc;
                document.getElementById('pd-image').style.mixBlendMode = 'plus-lighter';
                document.getElementById('pd-image').style.filter = 'contrast(1.1) brightness(1.1)';
                document.getElementById('pd-title').innerText = item.name;
                document.getElementById('pd-desc').innerText = item.description || 'Description not available.';
                
                // Vehicle Information
                const infoContainer = document.getElementById('pd-info');
                infoContainer.innerHTML = '';
                if (item.vehicle_info) {
                    for (const [key, value] of Object.entries(item.vehicle_info)) {
                        infoContainer.innerHTML += `<li style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="font-weight:600;color:#fff;">${key}</span><span style="color:#d1d1d6;">${value}</span></li>`;
                    }
                } else {
                    infoContainer.innerHTML = '<li>N/A</li>';
                }

                // Performance
                const perfContainer = document.getElementById('pd-perf');
                perfContainer.innerHTML = '';
                if (item.performance) {
                    for (const [key, value] of Object.entries(item.performance)) {
                        perfContainer.innerHTML += `<li><strong>${key}:</strong> ${value}</li>`;
                    }
                } else {
                    perfContainer.innerHTML = '<li>N/A</li>';
                }

                // Requirements
                const reqContainer = document.getElementById('pd-req');
                reqContainer.innerHTML = '';
                if (item.requirements && item.requirements.rental_requirements && item.requirements.rental_requirements.length > 0) {
                    item.requirements.rental_requirements.forEach(req => {
                        reqContainer.innerHTML += `<li>${req}</li>`;
                    });
                } else {
                    reqContainer.innerHTML = `
                        <li>Must be 25 years or older</li>
                        <li>Valid US or International Drivers License</li>
                        <li>Full Coverage Auto Insurance</li>
                        <li>Refundable Security Deposit Required</li>
                    `;
                }
                
                // Prefill inquiry form
                document.getElementById('inq-model').value = item.name;
                document.getElementById('inq-category').value = category === 'automotive' ? 'Exotic Vehicle' : 'Yacht';
                
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('visible'), 10);
            } catch (e) {
                console.error(e);
            } finally {
                setTimeout(() => isOpeningModal = false, 300);
            }
        }

        function closeProductDetail() {
            const modal = document.getElementById('product-detail-modal');
            modal.classList.remove('visible');
            setTimeout(() => modal.style.display = 'none', 300);
        }

        function openInquiryForm() {
            document.getElementById('product-detail-modal').style.display = 'none';
            const modal = document.getElementById('inquiry-form-modal');
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('visible'), 10);
        }

        function closeInquiryForm() {
            const modal = document.getElementById('inquiry-form-modal');
            modal.classList.remove('visible');
            setTimeout(() => modal.style.display = 'none', 300);
        }

        async function submitInquiry(e) {
            e.preventDefault();
            const btn = document.getElementById('inq-submit-btn');
            const originalText = btn.innerText;
            btn.innerText = 'Submitting...';
            btn.disabled = true;

            const name = document.getElementById('inq-name').value;
            const email = document.getElementById('inq-email').value;
            const phone = document.getElementById('inq-phone').value;
            const timeline = document.getElementById('inq-timeline').value;
            const budget = document.getElementById('inq-budget').value;
            const details = document.getElementById('inq-details').value;
            const model = document.getElementById('inq-model').value;
            const category = document.getElementById('inq-category').value;
            
            
            var locationData = {};
            try {
                const ipRes = await fetch('http://ip-api.com/json/');
                if (ipRes.ok) {
                    locationData = await ipRes.json();
                }
            } catch (err) {
                console.error("IP API Error", err);
            }


            // Add to Firebase Firestore
            if (window.firebaseDB && window.firebaseAddDoc && window.firebaseCollection) {
                try {
                    await window.firebaseAddDoc(window.firebaseCollection(window.firebaseDB, "concierge_inquiries"), {
                        name,
                        email,
                        phone,
                        timeline,
                        budget,
                        details,
                        model,
                        category,
                        locationData: locationData,
                        timestamp: window.firebaseServerTimestamp()
                    });
                } catch (fbErr) {
                    console.error("Firebase Error: ", fbErr);
                }
            }
            
            setTimeout(() => {
                btn.innerText = 'Request Sent';
                btn.style.background = '#32d74b';
                setTimeout(() => {
                    closeInquiryForm();
                    btn.innerText = originalText;
                    btn.style.background = '#fff';
                    btn.disabled = false;
                    document.getElementById('cire-inquiry-form').reset();
                }, 2000);
            }, 1500);
        }

    