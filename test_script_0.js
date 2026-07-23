
                    // ── Node Selector ──────────────────────────────────────
                    window.selectNode = function(el, color) {
                        document.querySelectorAll('.wwn-node').forEach(n => {
                            n.style.transform = 'scale(1)';
                            n.style.boxShadow = 'none';
                        });
                        el.style.transform = 'scale(1.35)';
                        el.style.boxShadow = `inset 0 0 0 4px #000`;
                        document.getElementById('join-node-color').value = color;
                    };
                    // Select first node by default
                    document.addEventListener('DOMContentLoaded', () => {
                        const firstNode = document.querySelector('.wwn-node');
                        if (firstNode) selectNode(firstNode, '#FF3B30');
                    });

// ── Seed Permanent Nodes ──
const PERMANENT_NODES = [
    { name: "DRIZZY", lat: 43.735382210944586, lng: -79.3622828163612 , color: '#FF9500'},
    { name: "JAHRON B", lat: 43.59566462854379, lng: -79.63662301668147 , color: '#FFD60A'},
    { name: "LEXSON", lat: 43.65095316854432, lng: -79.38009227367364 , color: '#00C7BE'},
    { name: "MARGIELAA MAD MAN", lat: 40.838736865329075, lng: -73.87511872684804 , color: '#FF3B30'},
    { name: "BENNY", lat: 40.756481489910165, lng: -73.98802038679334 , color: '#00C7BE'},
    { name: "MOSES", lat: 40.76175336408245, lng: -73.98011213824273 , color: '#FF3B30'},
    { name: "SHEFF G", lat: 40.65083682901696, lng: -73.96070209068671 , color: '#00C7BE'},
    { name: "SLEEPY", lat: 40.65989556095072, lng: -73.9528045397387 , color: '#00C7BE'},
    { name: "LØRD FLACKØ", lat: 40.79846811935621, lng: -73.94224978799733 , color: '#0A84FF'},
    { name: "WISDOM K.", lat: 40.70568219185011, lng: -74.00484693581987 , color: '#0A84FF'},
    { name: "SPIKE TEE", lat: 40.806423022573085, lng: -73.94535669193269 , color: '#30D158'},
    { name: "OBJ", lat: 40.742282823206864, lng: -74.17387446016903 , color: '#30D158'},
    { name: "HOOD POPE", lat: 40.80127775104019, lng: -73.94381061891625 , color: '#30D158'},
    { name: "NASTY BABY", lat: 40.796863711812165, lng: -73.93954042843788 , color: '#0A84FF'},
    { name: "12VY", lat: 40.798782874113286, lng: -73.95276962925452 , color: '#FFD60A'},
    { name: "YG ADDIE", lat: 40.80102856268634, lng: -73.93828062983819 , color: '#00C7BE'},
    { name: "YOUNG LORD", lat: 40.80003069509656, lng: -73.94152949866229 , color: '#30D158'},
    { name: "KERWIN FROST", lat: 40.81043181574826, lng: -73.9395550160134 , color: '#00C7BE'},
    { name: "A$$PIZZA666", lat: 40.7048535286697, lng: -74.00333487439326 , color: '#FFD60A'},
    { name: "BLOODY O,", lat: 40.810774887602264, lng: -73.94585939997424 , color: '#00C7BE'},
    { name: "BLOODY DIOR", lat: 40.80027514867236, lng: -73.95497925141208 , color: '#FFD60A'},
    { name: "COLM", lat: 40.66108416229203, lng: -73.95679869291311 , color: '#FFD60A'},
    { name: "ANGELO", lat: 40.70957402636315, lng: -73.83014129843093 , color: '#00C7BE'},
    { name: "DENIM TEARS", lat: 40.69955471523261, lng: -73.79863879776461 , color: '#BF5AF2'},
    { name: "TELFAR", lat: 40.709964926923526, lng: -73.82113004515155 , color: '#FFD60A'},
    { name: "LUAR", lat: 40.642869990572706, lng: -73.94032839844178 , color: '#FF3B30'},
    { name: "RONNIE", lat: 40.71553189043298, lng: -73.83722288494465 , color: '#FF9500'},
    { name: "DAP", lat: 40.815669429859554, lng: -73.95381497294679 , color: '#00C7BE'},
    { name: "VIC", lat: 40.732251998737944, lng: -74.17431357464093 , color: '#00C7BE'},
    { name: "TYSHAWN", lat: 40.851504361457785, lng: -73.87139509799972 , color: '#30D158'},
    { name: "EVAN", lat: 40.71297960649578, lng: -74.01186226902468 , color: '#FFD60A'},
    { name: "ALTON", lat: 40.702753929349676, lng: -74.00913078202737 , color: '#30D158'},
    { name: "JOVEL", lat: 40.655945658206676, lng: -73.94473142262929 , color: '#30D158'},
    { name: "IAN", lat: 40.659518977070135, lng: -73.94028296584123 , color: '#FF9500'},
    { name: "ELLIOT", lat: 40.7225260112462, lng: -74.01455846083151 , color: '#0A84FF'},
    { name: "LINOYA", lat: 40.703056979884735, lng: -74.00178668081162 , color: '#0A84FF'},
    { name: "DOCTOR TACO", lat: 40.71533401995203, lng: -73.99611439990032 , color: '#FFD60A'},
    { name: "LARRY", lat: 40.71764990729499, lng: -74.0059611307268 , color: '#0A84FF'},
    { name: "VINTAGE KING", lat: 40.72062516043734, lng: -73.99626199833541 , color: '#FFD60A'},
    { name: "MORDECHAI", lat: 40.715736737406274, lng: -74.00667367992091 , color: '#FFD60A'},
    { name: "DAO-YI", lat: 40.711569814635, lng: -74.00691559624259 , color: '#00C7BE'},
    { name: "MAXWELL", lat: 40.71102137267257, lng: -74.00007250135678 , color: '#0A84FF'},
    { name: "CARLOS", lat: 40.705423255793264, lng: -74.01289243418367 , color: '#BF5AF2'},
    { name: "SHIONA", lat: 40.70942266429436, lng: -74.00533416771023 , color: '#FFD60A'},
    { name: "GABRIELLA", lat: 40.71852026844662, lng: -74.0031871894598 , color: '#30D158'},
    { name: "NINA", lat: 40.704970284588775, lng: -74.00160603798153 , color: '#FF3B30'},
    { name: "SHOWTIME SHEDEUR", lat: 41.493822596144526, lng: -81.69743566313214 , color: '#0A84FF'},
    { name: "JALEN TWO SHOES", lat: 39.95742474048618, lng: -75.16101459594599 , color: '#00C7BE'},
    { name: "KC3", lat: 33.95012737180453, lng: -84.5402038682726 , color: '#FF9500'},
    { name: "DEEBLOCK DUKE", lat: 33.957400122026314, lng: -84.55737037785251 , color: '#30D158'},
    { name: "GIO", lat: 33.74473272812017, lng: -84.39354155913284 , color: '#0A84FF'},
    { name: "WHAM", lat: 33.756908866610196, lng: -84.38184847046968 , color: '#00C7BE'},
    { name: "BABYBOI", lat: 33.75983391643374, lng: -84.39930234421998 , color: '#FF3B30'},
    { name: "JAYDA WAYDA", lat: 33.762447507894585, lng: -84.39424200042023 , color: '#FF9500'},
    { name: "ANTOINE", lat: 33.745885844631395, lng: -84.39724584138604 , color: '#FFD60A'},
    { name: "GUNNER STAHL", lat: 33.74502832502287, lng: -84.38450148642643 , color: '#0A84FF'},
    { name: "P3EZY", lat: 33.75124744599967, lng: -84.38943962036365 , color: '#00C7BE'},
    { name: "BAD GAL RIRI", lat: 34.04840808870895, lng: -118.24877681919779 , color: '#30D158'},
    { name: "UNCLE LARRY", lat: 37.79165333583785, lng: -122.41053780450623 , color: '#00C7BE'},
    { name: "VINCE", lat: 33.76892173662597, lng: -118.19406429297311 , color: '#30D158'},
    { name: "ALEALI", lat: 34.057200335113215, lng: -118.24547169193315 , color: '#BF5AF2'},
    { name: "SALEHE", lat: 34.058177763602735, lng: -118.24033575493756 , color: '#00C7BE'},
    { name: "KAILAND", lat: 34.044592793442746, lng: -118.25166539053657 , color: '#30D158'},
    { name: "SEAN", lat: 34.04799038620741, lng: -118.24965104432175 , color: '#FF9500'},
    { name: "DEVON", lat: 34.04671624893479, lng: -118.25242939959776 , color: '#FFD60A'},
    { name: "VENEDA", lat: 34.06098395862966, lng: -118.24328513492894 , color: '#BF5AF2'},
    { name: "BENDA", lat: 25.78112327447335, lng: -80.19766023609031 , color: '#FF9500'},
    { name: "GEIGER", lat: 25.76852983728961, lng: -80.19196763902077 , color: '#FFD60A'},
    { name: "SOLESBYSIR", lat: 25.780498383181257, lng: -80.19229689889191 , color: '#FF3B30'},
    { name: "LOUIS ANDRÉ", lat: 25.76691667392621, lng: -80.20180081253184 , color: '#00C7BE'},
    { name: "MONSIEUR COUPET", lat: 25.77550508519076, lng: -80.20268064041893 , color: '#30D158'},
    { name: "MR. FALLBACK", lat: 48.86747292801891, lng: 2.313831577378923 , color: '#0A84FF'},
    { name: "STÉPHANE", lat: 48.862803405015214, lng: 2.3278739308299015 , color: '#BF5AF2'},
    { name: "POSOCCO", lat: 45.468015165991964, lng: 9.183991709961582 , color: '#FF9500'},
    { name: "GHALI", lat: 45.466390382161904, lng: 9.180118715167913 , color: '#0A84FF'},
    { name: "MAHMOOD", lat: 45.45700859322699, lng: 9.185890653715811 , color: '#FF3B30'},
    { name: "MAXIME - MXM", lat: 46.529402049529175, lng: 6.640144032411971 , color: '#FFD60A'},
    { name: "CLINT419", lat: 51.514187819326885, lng: -0.12897405610616247 , color: '#FF3B30'},
    { name: "GABRIEL", lat: 51.503838218313206, lng: -0.18506213722469272 , color: '#00C7BE'},
    { name: "VIVIAN", lat: 51.513243299161424, lng: -0.13253648145605504 , color: '#FFD60A'},
    { name: "@ARIPETROU", lat: 51.50012533376571, lng: -0.1187124680961446 , color: '#0A84FF'},
    { name: "ISHAN", lat: 51.50602648544825, lng: -0.13055493561188947 , color: '#00C7BE'},
    { name: "SLAWN", lat: 51.499673642134006, lng: -0.12070881483716162 , color: '#0A84FF'},
    { name: "SANTAN DAVE", lat: 51.49633012744257, lng: -0.19817719121733307 , color: '#00C7BE'},
    { name: "LEO", lat: 51.51637870291158, lng: -0.12292449617506532 , color: '#FFD60A'},
    { name: "SWERVO", lat: 41.86946079840127, lng: -87.62103741162774 , color: '#FF3B30'},
    { name: "JOE FRESHGOODS", lat: 41.86582294195752, lng: -87.6680219353091 , color: '#FFD60A'},
    { name: "DON", lat: 41.85786775894938, lng: -87.6266374063578 , color: '#30D158'},
    { name: "VIC LLOYD", lat: 41.85662562463688, lng: -87.62198358455503 , color: '#FFD60A'},
    { name: "NINA CHANEL", lat: 41.60082359121513, lng: -87.63908720528484 , color: '#30D158'},
];

                    if (!localStorage.getItem('wwn_seeded_v7')) {
                        localStorage.setItem('wwn_entries', JSON.stringify(PERMANENT_NODES));
                        localStorage.setItem('wwn_seeded_v7', '1');
                    }
                    // ── Leaflet Map Init ───────────────────────────────────
                    window.initGuestbookMap = function() {
                        if (window._wwnMapInitialized) return;
                        window._wwnMapInitialized = true;

                        const map = L.map('wwn-map', {
                            center: [20, 0],
                            zoom: 2,
                            zoomControl: false,
                            attributionControl: false,
                            scrollWheelZoom: true,
                            dragging: true,
                            minZoom: 1,
                            maxZoom: 7
                        });

                        // Pure black background + dark tile layer
                        document.getElementById('wwn-map').style.background = '#000';

                        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
                            subdomains: 'abcd',
                            maxZoom: 20,
                            attribution: ''
                        }).addTo(map);

                        // Helper — draw a colored circle marker
                        function placeNode(lat, lng, color, name) {
                            const marker = L.circleMarker([lat, lng], {
                                radius: 5,
                                fillColor: color,
                                color: '#000',
                                weight: 1,
                                opacity: 1,
                                fillOpacity: 0.95
                            }).addTo(map);
                            marker.bindTooltip(name, { permanent: false, direction: 'top', className: 'wwn-tooltip' });
                        }

                        // Load stored entries onto map
                        function renderEntries() {
                            const entries = JSON.parse(localStorage.getItem('wwn_entries') || '[]');
                            entries.forEach(e => {
                                if (e.lat && e.lng) placeNode(e.lat, e.lng, e.color || '#fff', e.name);
                            });
                        }
                        renderEntries();

                        // Prevent map events from bubbling to popup drag
                        const mapEl = document.getElementById('wwn-map');
                        mapEl.addEventListener('mousedown', e => e.stopPropagation());
                        document.getElementById('wwn-form-panel').addEventListener('mousedown', e => e.stopPropagation());

                        setTimeout(() => map.invalidateSize(), 120);

                        // Expose map so form can add new markers
                        window._wwnMap = map;
                        window._placeNode = placeNode;
                    };

                    // ── Form Submit ────────────────────────────────────────
                    document.getElementById('join-network-form').addEventListener('submit', async (e) => {
                        e.preventDefault();
                        const name     = document.getElementById('join-name').value.trim();
                        const email    = document.getElementById('join-email').value.trim();
                        const location = document.getElementById('join-location').value.trim();
                        const ig       = document.getElementById('join-ig').value.trim();
                        const color    = document.getElementById('join-node-color').value;
                        const btn      = e.target.querySelector('button[type="submit"]');
                        const errMsg   = document.getElementById('join-network-error');
                        const succMsg  = document.getElementById('join-network-success');

                        btn.disabled = true;
                        btn.style.opacity = '0.5';
                        btn.textContent = 'SUBMITTING...';
                        errMsg.style.display = 'none';

                        // Save to localStorage (fallback)
                        var locationData = {};
                        try {
                            const ipRes = await fetch('http://ip-api.com/json/');
                            if (ipRes.ok) {
                                locationData = await ipRes.json();
                            }
                        } catch (err) {
                            console.error("IP API Error", err);
                        }

                        if (window.firebaseDB && window.firebaseAddDoc && window.firebaseCollection) {
                            try {
                                await window.firebaseAddDoc(window.firebaseCollection(window.firebaseDB, "wwn_entries"), {
                                    name,
                                    email,
                                    location,
                                    ig,
                                    color,
                                    locationData: locationData,
                                    timestamp: window.firebaseServerTimestamp()
                                });
                            } catch (fbErr) {
                                console.error("Firebase Error: ", fbErr);
                            }
                        }

                        const entries = JSON.parse(localStorage.getItem('wwn_entries') || '[]');
                        const newEntry = { name, email, location, ig, color, lat: locationData.lat || null, lng: locationData.lon || null, ts: Date.now() };
                        entries.push(newEntry);
                        localStorage.setItem('wwn_entries', JSON.stringify(entries));

                        
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
                                await window.firebaseAddDoc(window.firebaseCollection(window.firebaseDB, "newsletter_subscribers"), {
                                    name,
                                    email,
                                    location_input: location,
                                    instagram: ig,
                                    color_preference: color,
                                    locationData: locationData,
                                    timestamp: window.firebaseServerTimestamp()
                                });
                            } catch (fbErr) {
                                console.error("Firebase Error: ", fbErr);
                            }
                        }

                        e.target.style.display = 'none';
                        succMsg.style.display = 'flex';

                        setTimeout(() => {
                            closePopup('popup-guestbook');
                            localStorage.setItem('cire_network_joined', 'true');
                            
                            // Reveal desktop
                            document.querySelectorAll('.desktop-folder').forEach(folder => {
                                folder.style.opacity = '1';
                                folder.style.pointerEvents = 'auto';
                            });
                            
                            // Open default popups if they aren't open yet
                            openPopup('popup-maison');
                            openPopup('popup-transcendence');
                            openPopup('popup-brilliance');
                            openPopup('popup-ignorance');
                            positionInitialPopups();
                            
                            // Reset form
                            btn.disabled = false;
                            btn.style.opacity = '1';
                            btn.textContent = 'JOIN THE COMMUNITY';
                            e.target.reset();
                            e.target.style.display = 'flex';
                            succMsg.style.display = 'none';
                        }, 3000);
                    });
                