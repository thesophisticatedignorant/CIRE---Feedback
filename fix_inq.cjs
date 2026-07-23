const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix toggleDelivery syntax error
html = html.replace(/function toggleDelivery\(\) \{[\s\S]*?\} else \{[\s\S]*?\}[\s\S]*?\}/, `function toggleDelivery() {
                            const del = document.getElementById('inq-delivery').value;
                            const label = document.getElementById('location-label');
                            if (del === 'Yes') {
                                label.innerText = 'Delivery Location';
                            } else {
                                label.innerText = 'Pickup/Drop-off Location';
                            }
                        }`);

// Fix HTML layout for Delivery / Location / Out-of-state
const oldLayout = `<div class="form-row" style="margin-top:24px;">
                        <div class="form-col">
                            <label>Delivery</label>
                            <select id="inq-delivery" required onchange="toggleDelivery()">
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div class="form-col" id="pickup-col">
                            <label id="location-label">Pickup/Drop-off Location</label>
                            <input type="text" id="inq-location">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-col" id="delivery-col" style="display:none;">
                            <label>Delivery Location</label>
                            <input type="text" id="inq-delivery-location">
                        </div>
                        <div class="form-col">
                            <label>Out-of-state Plans?</label>
                            <select id="inq-out-of-state" required><option value="No">No</option><option value="Yes">Yes</option></select>
                        </div>
                    </div>`;

const newLayout = `<div class="form-row" style="margin-top:24px;">
                        <div class="form-col">
                            <label>Delivery</label>
                            <select id="inq-delivery" required onchange="toggleDelivery()">
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div class="form-col"></div>
                    </div>
                    <div class="form-row">
                        <div class="form-col">
                            <label id="location-label">Pickup/Drop-off Location</label>
                            <input type="text" id="inq-location">
                        </div>
                        <div class="form-col">
                            <label>Out-of-state Plans?</label>
                            <select id="inq-out-of-state" required><option value="No">No</option><option value="Yes">Yes</option></select>
                        </div>
                    </div>`;

html = html.replace(oldLayout, newLayout);

// Ensure toggleAdditionalDrivers is correct and the container displays properly
// The CSS for checkboxes: vertically center checkboxes with labels
html = html.replace(/\.checkbox-item input\[type="checkbox"\] \{/g, '.checkbox-item input[type="checkbox"] { margin-right: 8px; flex-shrink: 0; ');

fs.writeFileSync('index.html', html);
