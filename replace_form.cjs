const fs = require('fs');

const states = [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ];

let statesHtml = '<option value="">Select State...</option>';
states.forEach(s => statesHtml += `<option value="${s}">${s}</option>`);

const htmlContent = `                <form id="cire-inquiry-form" onsubmit="submitInquiry(event)">
                    <style>
                        #cire-inquiry-form label { display: block; color: rgba(255,255,255,0.5); font-size: 10px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 24px; font-weight: 400; }
                        #cire-inquiry-form label:first-child { margin-top: 0; }
                        #cire-inquiry-form input[type="text"], #cire-inquiry-form input[type="email"], #cire-inquiry-form input[type="tel"], #cire-inquiry-form input[type="date"], #cire-inquiry-form select { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.1); color: white; padding: 8px 0; border-radius: 0; font-size: 14px; font-weight: 300; box-sizing: border-box; font-family: inherit; outline: none; transition: border-color 0.3s; text-transform: uppercase; }
                        #cire-inquiry-form input:focus, #cire-inquiry-form select:focus { border-color: rgba(255,255,255,0.8); }
                        #cire-inquiry-form input::placeholder { color: rgba(255,255,255,0.2); font-weight: 300; text-transform: uppercase; }
                        
                        /* Contrast calendar icon */
                        ::-webkit-calendar-picker-indicator { filter: invert(1) brightness(1.5); cursor: pointer; }
                        
                        /* Range slider styling */
                        input[type=range] { -webkit-appearance: none; width: 100%; background: transparent; padding: 10px 0; margin-top: 5px; }
                        input[type=range]:focus { outline: none; }
                        input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 2px; cursor: pointer; background: rgba(255,255,255,0.2); }
                        input[type=range]::-webkit-slider-thumb { height: 16px; width: 16px; border-radius: 50%; background: #fff; cursor: pointer; -webkit-appearance: none; margin-top: -7px; }
                        
                        .form-row { display: flex; gap: 24px; }
                        .form-col { flex: 1; }
                        .checkbox-group { display: grid; grid-template-columns: repeat(2, 1fr); row-gap: 24px; column-gap: 16px; margin-top: 16px; align-items: center; }
                        .checkbox-item { display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 300; width: 100%; cursor: pointer; text-transform: uppercase; line-height: 1; }
                        .checkbox-item input[type="checkbox"] { appearance: none; -webkit-appearance: none; width: 16px; height: 16px; min-width: 16px; border: 1px solid rgba(255,255,255,0.3); border-radius: 2px; background: transparent; cursor: pointer; transition: all 0.2s; position: relative; margin: 0; padding: 0; display: flex; align-items: center; justify-content: center; }
                        .checkbox-item input[type="checkbox"]:checked { background: #fff; border-color: #fff; }
                        .checkbox-item input[type="checkbox"]:checked::after { content: ''; position: absolute; left: 4px; top: 1px; width: 4px; height: 8px; border: solid black; border-width: 0 2px 2px 0; transform: rotate(45deg); }
                        .form-section-title { color: white; font-size: 12px; font-weight: 400; letter-spacing: 0.15em; text-transform: uppercase; margin: 40px 0 24px 0; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; }
                    </style>
                    
                    <h3 class="form-section-title" style="margin-top: 0;">Client Details</h3>
                    <div class="form-row">
                        <div class="form-col"><label>Full Name</label><input type="text" id="inq-name" required></div>
                        <div class="form-col"><label>Email</label><input type="email" id="inq-email" required></div>
                    </div>
                    <div class="form-row">
                        <div class="form-col">
                            <label>Phone</label>
                            <div style="display:flex; gap:8px;">
                                <select id="inq-country-code" style="width:100px; padding:8px 4px;" required>
                                    <option value="+1">+1 (US)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+33">+33 (FR)</option>
                                    <option value="+971">+971 (AE)</option>
                                    <option value="other">Other</option>
                                </select>
                                <input type="tel" id="inq-phone" style="flex:1;" required>
                            </div>
                        </div>
                        <div class="form-col"><label>Company / Affiliation</label><input type="text" id="inq-company" placeholder="(Optional)"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-col"><label>Referral Source</label><input type="text" id="inq-referral"></div>
                        <div class="form-col"></div>
                    </div>

                    <h3 class="form-section-title">Experience & Vehicle</h3>
                    <div class="form-row">
                        <div class="form-col">
                            <label>Experience Type</label>
                            <select id="inq-experience" required>
                                <option value="">Select...</option>
                                <option>Private Arrival</option>
                                <option>Weekend Rental</option>
                                <option>Photoshoot</option>
                                <option>Music Video</option>
                                <option>Wedding</option>
                                <option>Real Estate Showing</option>
                                <option>Brand Activation</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="form-col">
                            <label>Vehicle Category</label>
                            <input type="text" id="inq-category" readonly style="background: #1c1c1e; color: #8e8e93;">
                        </div>
                    </div>
                    <label>Specific Model Desired</label>
                    <input type="text" id="inq-model" readonly style="background: #1c1c1e; color: #8e8e93; margin-bottom: 16px;">
                    
                    <div class="form-row">
                        <div class="form-col"><label>Color Preference</label><input type="text" id="inq-color"></div>
                        <div class="form-col"><label>Number of Vehicles</label><select id="inq-vehicle-count"><option>1</option><option>2</option><option>3+</option></select></div>
                    </div>
                    <div class="form-row">
                        <div class="form-col">
                            <label>Budget Range</label>
                            <div style="display:flex; align-items:center; gap:16px;">
                                <input type="range" id="inq-budget" min="500" max="25000" step="500" value="5000" oninput="document.getElementById('budget-val').innerText = '$' + parseInt(this.value).toLocaleString() + (this.value == 25000 ? '+' : '')">
                                <span id="budget-val" style="color:white; font-size:14px; min-width:80px; text-align:right;">$5,000</span>
                            </div>
                        </div>
                    </div>

                    <h3 class="form-section-title">Timing & Location</h3>
                    <div class="form-row">
                        <div class="form-col">
                            <label>Desired Date (Pick-up - Return)</label>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <input type="date" id="inq-date-start" required style="flex:1;">
                                <span style="color:rgba(255,255,255,0.5);">-</span>
                                <input type="date" id="inq-date-end" required style="flex:1;">
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-col">
                            <label>Start Time</label>
                            <div style="display:flex; gap:4px; align-items:center;">
                                <select id="inq-time-hr" style="flex:1; padding-left:4px;" required>
                                    <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09" selected>09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>
                                </select>
                                <span style="color:white; padding-top:4px;">:</span>
                                <select id="inq-time-min" style="flex:1; padding-left:4px;" required>
                                    <option value="00">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option>
                                </select>
                                <select id="inq-time-ampm" style="flex:1; padding-left:4px;" required>
                                    <option value="AM" selected>AM</option><option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-col">
                            <label>End Time (Optional)</label>
                            <div style="display:flex; gap:4px; align-items:center;">
                                <select id="inq-end-hr" style="flex:1; padding-left:4px;">
                                    <option value="">--</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>
                                </select>
                                <span style="color:white; padding-top:4px;">:</span>
                                <select id="inq-end-min" style="flex:1; padding-left:4px;">
                                    <option value="">--</option><option value="00">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option>
                                </select>
                                <select id="inq-end-ampm" style="flex:1; padding-left:4px;">
                                    <option value="">--</option><option value="AM">AM</option><option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <label style="display:flex; align-items:center; gap:8px; margin-top:24px; color:#d1d1d6; text-transform:uppercase;"><input type="checkbox" id="inq-flexible-timing"> MY TIMING IS FLEXIBLE</label>
                    <label style="display:flex; align-items:center; gap:8px; margin-top:12px; color:#d1d1d6; text-transform:uppercase;"><input type="checkbox" id="inq-24-hour"> 24-HOUR RENTAL OR EVENT WINDOW</label>
                    
                    <div class="form-row" style="margin-top:24px;">
                        <div class="form-col">
                            <label>Delivery</label>
                            <select id="inq-delivery" required><option value="No">No</option><option value="Yes">Yes</option></select>
                        </div>
                        <div class="form-col"><label>Pickup/Drop-off Location</label><input type="text" id="inq-location"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-col">
                            <label>Out-of-state Plans?</label>
                            <select id="inq-out-of-state" required><option value="No">No</option><option value="Yes">Yes</option></select>
                        </div>
                        <div class="form-col"></div>
                    </div>

                    <h3 class="form-section-title">Driver Eligibility</h3>
                    <div class="form-row">
                        <div class="form-col"><label>Driver Age</label><input type="text" id="inq-age" required></div>
                        <div class="form-col">
                            <label>License Type</label>
                            <select id="inq-license-type" required onchange="toggleInsuranceField()">
                                <option value="">Select...</option>
                                <option value="US License">US License</option>
                                <option value="International License">International License</option>
                            </select>
                        </div>
                    </div>
                    
                    <script>
                        function toggleInsuranceField() {
                            const type = document.getElementById('inq-license-type').value;
                            const container = document.getElementById('insurance-container');
                            const label = document.getElementById('insurance-label');
                            const stateSelect = document.getElementById('inq-insurance-state');
                            const countrySelect = document.getElementById('inq-insurance-country');
                            
                            if (type === 'US License') {
                                container.style.display = 'block';
                                label.innerText = 'Insurance State';
                                stateSelect.style.display = 'block';
                                stateSelect.required = true;
                                countrySelect.style.display = 'none';
                                countrySelect.required = false;
                            } else if (type === 'International License') {
                                container.style.display = 'block';
                                label.innerText = 'Insurance Country';
                                stateSelect.style.display = 'none';
                                stateSelect.required = false;
                                countrySelect.style.display = 'block';
                                countrySelect.required = true;
                            } else {
                                container.style.display = 'none';
                                stateSelect.required = false;
                                countrySelect.required = false;
                            }
                        }
                    </script>
                    
                    <div class="form-row">
                        <div class="form-col">
                            <label>Full Coverage Insurance</label>
                            <select id="inq-full-coverage" required><option value="Yes">Yes</option><option value="No">No</option></select>
                        </div>
                        <div class="form-col" id="insurance-container" style="display:none;">
                            <label id="insurance-label">Insurance State</label>
                            <select id="inq-insurance-state" style="display:none;">
                                ${statesHtml}
                            </select>
                            <select id="inq-insurance-country" style="display:none;">
                                <option value="">Select Country...</option>
                                <option value="UK">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="OTHER">Other...</option>
                            </select>
                        </div>
                    </div>
                    <label>Additional Drivers?</label><input type="text" id="inq-additional-drivers" placeholder="Names and ages (if any)">

                    <h3 class="form-section-title">Concierge Add-ons</h3>
                    <div class="checkbox-group">
                        <label class="checkbox-item"><input type="checkbox" id="addon-chauffeur"> <span>Chauffeur Request</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="addon-photo"> <span>Photographer / Videographer</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="addon-security"> <span>Security</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="addon-hotel"> <span>Hotel Pickup</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="addon-event"> <span>Event Coordination</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="addon-multicar"> <span>Multiple-Car Arrival</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="addon-yacht"> <span>Yacht Pairing</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="addon-dinner"> <span>Private Dinner / Nightlife</span></label>
                    </div>

                    <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 12px; margin-top: 32px;">
                        <label class="checkbox-item" style="width: 100%; align-items: flex-start; color: #8e8e93; font-size: 12px; line-height: 1.5; text-transform:none; letter-spacing:0;">
                            <input type="checkbox" required style="margin-top: 2px;">
                            <span>I understand CIRE Concierge is an arranging party and that all rentals are subject to partner approval, insurance verification, deposit requirements, and final rental agreement.</span>
                        </label>
                    </div>
                </form>
            </div>
            <div style="padding: 24px 32px; border-top: 1px solid rgba(255,255,255,0.05); text-align: right;">
                <button type="submit" form="cire-inquiry-form" id="inq-submit-btn" style="background: white; color: black; border: none; padding: 12px 36px; border-radius: 4px; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: background 0.3s; font-family: inherit;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.8)'" onmouseout="this.style.backgroundColor='white'">Submit Inquiry</button>
            </div>`;

let fullHtml = fs.readFileSync('index.html', 'utf8');

// Replace everything between <form id="cire-inquiry-form" onsubmit="submitInquiry(event)"> and </div>\n            <div style="padding: 24px 32px; border-top: 1px solid rgba(255,255,255,0.05); text-align: right;">
const startTag = '<form id="cire-inquiry-form" onsubmit="submitInquiry(event)">';
const endTag = '                <button type="submit" form="cire-inquiry-form" id="inq-submit-btn" style="background: white; color: black; border: none; padding: 12px 36px; border-radius: 4px; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: background 0.3s; font-family: inherit;" onmouseover="this.style.backgroundColor=\'rgba(255,255,255,0.8)\'" onmouseout="this.style.backgroundColor=\'white\'">Submit Inquiry</button>\n            </div>';

const startIndex = fullHtml.indexOf(startTag);
const endIndex = fullHtml.indexOf(endTag) + endTag.length;

if (startIndex === -1 || endIndex < startTag.length) {
    console.error("Could not find start or end tags");
    process.exit(1);
}

const before = fullHtml.slice(0, startIndex);
const after = fullHtml.slice(endIndex);

fs.writeFileSync('index.html', before + htmlContent + after);
console.log("Form HTML replaced");
