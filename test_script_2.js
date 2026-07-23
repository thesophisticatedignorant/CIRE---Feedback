
        document.addEventListener('contextmenu', e => e.preventDefault());
        
        const overlay = document.getElementById('deterrent-overlay');
        
        window.addEventListener('blur', () => {
            overlay.style.display = 'flex';
        });
        
        window.addEventListener('focus', () => {
            overlay.style.display = 'none';
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'PrintScreen' || 
               (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4' || e.key === '5'))) {
                overlay.style.display = 'flex';
                setTimeout(() => {
                    if(document.hasFocus()) overlay.style.display = 'none';
                }, 2000);
            }
        });

        // Make an Inquiry Form Logic
        document.getElementById('inquiry-form')?.addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            const btn = form.querySelector('button[type="submit"]');
            
            const name = document.getElementById('inquiry-name').value.trim();
            const email = document.getElementById('inquiry-email').value.trim();
            const phone = document.getElementById('inquiry-phone').value.trim();
            const interest = document.getElementById('inquiry-interest').value;
            const message = document.getElementById('inquiry-message').value.trim();
            
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.textContent = 'SUBMITTING...';
            
            const entries = JSON.parse(localStorage.getItem('cire_inquiries') || '[]');
            entries.push({ name, email, phone, interest, message, ts: new Date().toISOString() });
            localStorage.setItem('cire_inquiries', JSON.stringify(entries));

            
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
                    await window.firebaseAddDoc(window.firebaseCollection(window.firebaseDB, "inquiries"), {
                        name,
                        email,
                        phone,
                        interest,
                        message,
                        locationData: locationData,
                        timestamp: window.firebaseServerTimestamp()
                    });
                } catch (fbErr) {
                    console.error("Firebase Error: ", fbErr);
                }
            }
            
            const succMsg = document.getElementById('inquiry-success');
            form.style.display = 'none';
            succMsg.style.display = 'flex';
            
            setTimeout(() => {
                closePopup('popup-inquiry');
                form.reset();
                form.style.display = 'flex';
                succMsg.style.display = 'none';
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.textContent = 'SUBMIT INQUIRY';
            }, 3000);
        });

        // Shortcuts
        document.addEventListener('keydown', (e) => {
            // CSV Export Shortcut (Cmd/Ctrl + Shift + E)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
                e.preventDefault();
                
                // Export Network Entries
                const networkEntries = JSON.parse(localStorage.getItem('wwn_entries') || '[]');
                let csvContent = "data:text/csv;charset=utf-8,Type,Name,Email,Location,IG,Color,Phone,Interest,Message,Timestamp\n";
                
                networkEntries.forEach(entry => {
                    csvContent += `"Network","${entry.name || ''}","${entry.email || ''}","${entry.location || ''}","${entry.ig || ''}","${entry.color || ''}","","","","${new Date(entry.ts || Date.now()).toISOString()}"\n`;
                });
                
                // Export Inquiries
                const inquiryEntries = JSON.parse(localStorage.getItem('cire_inquiries') || '[]');
                inquiryEntries.forEach(entry => {
                    csvContent += `"Inquiry","${entry.name || ''}","${entry.email || ''}","","","","${entry.phone || ''}","${entry.interest || ''}","${(entry.message || '').replace(/"/g, '""')}","${entry.ts || ''}"\n`;
                });
                
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", `cire_data_export_${new Date().toISOString().split('T')[0]}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            // Folder Position Export Shortcut (Ctrl + Shift + P)
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'p') {
                e.preventDefault();
                let output = "const folderPositions = {\n";
                document.querySelectorAll('.desktop-folder').forEach(folder => {
                    const id = folder.id || folder.dataset.folder;
                    const left = parseFloat(folder.style.left) || 0;
                    const top = parseFloat(folder.style.top) || 0;
                    if (id) {
                        output += `    '${id}': { left: ${left}, top: ${top} },\n`;
                    }
                });
                output += "};";
                console.log(output);
                navigator.clipboard.writeText(output).then(() => {
                    alert("Folder positions copied to clipboard!\nPaste these to the assistant to lock them in.\n\n" + output);
                }).catch(err => {
                    alert("Folder positions:\n\n" + output);
                });
            }
        });
    