const fs = require('fs');

const jsContent = `        async function submitInquiry(e) {
            e.preventDefault();
            const btn = document.getElementById('inq-submit-btn');
            const originalText = btn.innerText;
            btn.innerText = 'Submitting...';
            btn.disabled = true;

            const getVal = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
            const getCheck = (id) => { const el = document.getElementById(id); return el ? el.checked : false; };

            const name = getVal('inq-name');
            const email = getVal('inq-email');
            const phone = getVal('inq-country-code') + ' ' + getVal('inq-phone');
            const company = getVal('inq-company');
            const referral = getVal('inq-referral');
            
            const experience = getVal('inq-experience');
            const category = getVal('inq-category');
            const model = getVal('inq-model');
            const color = getVal('inq-color');
            const vehicleCount = getVal('inq-vehicle-count');
            const budget = getVal('inq-budget');

            const dateStart = getVal('inq-date-start');
            const dateEnd = getVal('inq-date-end');
            const timeStart = getVal('inq-time-hr') + ':' + getVal('inq-time-min') + ' ' + getVal('inq-time-ampm');
            const timeEnd = getVal('inq-end-hr') ? (getVal('inq-end-hr') + ':' + getVal('inq-end-min') + ' ' + getVal('inq-end-ampm')) : '';
            
            const timingFlexible = getCheck('inq-flexible-timing');
            const twentyFourHour = getCheck('inq-24-hour');
            
            const delivery = getVal('inq-delivery');
            const location = getVal('inq-location');
            const outOfState = getVal('inq-out-of-state');
            
            const driverAge = getVal('inq-age');
            const licenseType = getVal('inq-license-type');
            const fullCoverage = getVal('inq-full-coverage');
            const insuranceState = getVal('inq-insurance-state');
            const insuranceCountry = getVal('inq-insurance-country');
            const additionalDrivers = getVal('inq-additional-drivers');
            
            const addons = {
                chauffeur: getCheck('addon-chauffeur'),
                photo: getCheck('addon-photo'),
                security: getCheck('addon-security'),
                hotel: getCheck('addon-hotel'),
                event: getCheck('addon-event'),
                multicar: getCheck('addon-multicar'),
                yacht: getCheck('addon-yacht'),
                dinner: getCheck('addon-dinner')
            };

            var locationData = {};
            try {
                const ipRes = await fetch('http://ip-api.com/json/');
                if (ipRes.ok) {
                    locationData = await ipRes.json();
                }
            } catch (err) {
                console.error("IP API Error", err);
            }

            // Add to Firebase Firestore - 'private_inquiry' collection
            if (window.firebaseDB && window.firebaseAddDoc && window.firebaseCollection) {
                try {
                    await window.firebaseAddDoc(window.firebaseCollection(window.firebaseDB, "private_inquiry"), {
                        name, email, phone, company, referral,
                        experience, category, model, color, vehicleCount, budget,
                        dateStart, dateEnd, timeStart, timeEnd, timingFlexible, twentyFourHour,
                        delivery, location, outOfState,
                        driverAge, licenseType, fullCoverage, insuranceState, insuranceCountry, additionalDrivers,
                        addons,
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
                    // Reset conditional logic UI
                    document.getElementById('insurance-container').style.display = 'none';
                    document.getElementById('budget-val').innerText = '$5,000';
                }, 2000);
            }, 1500);
        }`;

let fullHtml = fs.readFileSync('index.html', 'utf8');

const startTag = '        async function submitInquiry(e) {';
const endTag = '        }\n\n    </script>';

const startIndex = fullHtml.indexOf(startTag);
const endIndex = fullHtml.indexOf(endTag) + endTag.length - 14; // leaving </script>

if (startIndex === -1 || endIndex < startTag.length) {
    console.error("Could not find start or end tags for submitInquiry");
    process.exit(1);
}

const before = fullHtml.slice(0, startIndex);
const after = fullHtml.slice(endIndex);

fs.writeFileSync('index.html', before + jsContent + after);
console.log("Submit Logic replaced");
