const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Move "Additional Drivers?" up to share the line with "Full Coverage Insurance"
// The insurance-container goes to its own line
indexHtml = indexHtml.replace(
    /<div class="form-row">\s*<div class="form-col">\s*<label>Full Coverage Insurance<\/label>\s*<select id="inq-full-coverage" required><option value="Yes">Yes<\/option><option value="No">No<\/option><\/select>\s*<\/div>\s*<div class="form-col" id="insurance-container" style="display:none;">([\s\S]*?)<\/div>\s*<\/div>\s*<div class="form-row">\s*<div class="form-col">\s*<label>Additional Drivers\?<\/label>\s*<select id="inq-has-additional-drivers" onchange="toggleAdditionalDrivers\(\)">\s*<option value="No">No<\/option>\s*<option value="Yes">Yes<\/option>\s*<\/select>\s*<\/div>\s*<div class="form-col"><\/div>\s*<\/div>/,
    `<div class="form-row">
                            <div class="form-col">
                                <label>Full Coverage Insurance</label>
                                <select id="inq-full-coverage" required><option value="Yes">Yes</option><option value="No">No</option></select>
                            </div>
                            <div class="form-col">
                                <label>Additional Drivers?</label>
                                <select id="inq-has-additional-drivers" onchange="toggleAdditionalDrivers()">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row" id="insurance-container" style="display:none; margin-top: 24px;">
                            <div class="form-col">
$1                            </div>
                            <div class="form-col"></div>
                        </div>`
);


// 2. Add ID to delivery section, location section, and driver eligibility
indexHtml = indexHtml.replace(
    /<div class="form-row" style="margin-top:24px;">\s*<div class="form-col">\s*<label>Delivery<\/label>/,
    '<div class="form-row" style="margin-top:24px;" id="delivery-section">\n                        <div class="form-col">\n                            <label>Delivery</label>'
);
indexHtml = indexHtml.replace(
    /<div class="form-row">\s*<div class="form-col">\s*<label id="location-label">Pickup\/Dropoff Location<\/label>/,
    '<div class="form-row" id="location-section">\n                        <div class="form-col">\n                            <label id="location-label">Pickup/Dropoff Location</label>'
);
indexHtml = indexHtml.replace(
    /<h3 class="form-section-title">Driver Eligibility<\/h3>/,
    '<div id="driver-eligibility-section">\n                    <h3 class="form-section-title">Driver Eligibility</h3>'
);

// Close the driver-eligibility-section div right before "Concierge Add-ons"
indexHtml = indexHtml.replace(
    /<h3 class="form-section-title">Concierge Add-ons<\/h3>/,
    '</div>\n\n                    <h3 class="form-section-title">Concierge Add-ons</h3>'
);


// 3. Modify openInquiryForm to handle maritime logic
const newOpenInquiryForm = `        function openInquiryForm() {
            document.getElementById('product-detail-modal').style.display = 'none';
            const modal = document.getElementById('inquiry-form-modal');
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('visible'), 10);
            
            const category = window.currentShowroomData[0]?.category;
            const yachtCheckbox = document.getElementById('addon-yacht');
            const experienceSelect = document.getElementById('inq-experience');
            const deliverySection = document.getElementById('delivery-section');
            const locationSection = document.getElementById('location-section');
            const driverSection = document.getElementById('driver-eligibility-section');
            
            if (category === 'maritime') {
                if (yachtCheckbox) {
                    yachtCheckbox.disabled = true;
                    yachtCheckbox.checked = false;
                    yachtCheckbox.nextElementSibling.style.textDecoration = 'line-through';
                    yachtCheckbox.nextElementSibling.style.opacity = '0.5';
                }
                if (experienceSelect) {
                    Array.from(experienceSelect.options).forEach(opt => {
                        if (opt.value === 'Real Estate Showing') opt.style.display = 'none';
                    });
                    if(experienceSelect.value === 'Real Estate Showing') experienceSelect.value = '';
                }
                if (deliverySection) deliverySection.style.display = 'none';
                if (locationSection) locationSection.style.display = 'none';
                if (driverSection) driverSection.style.display = 'none';
            } else {
                if (yachtCheckbox) {
                    yachtCheckbox.disabled = false;
                    yachtCheckbox.nextElementSibling.style.textDecoration = 'none';
                    yachtCheckbox.nextElementSibling.style.opacity = '1';
                }
                if (experienceSelect) {
                    Array.from(experienceSelect.options).forEach(opt => {
                        if (opt.value === 'Real Estate Showing') opt.style.display = 'block';
                    });
                }
                if (deliverySection) deliverySection.style.display = 'flex';
                if (locationSection) locationSection.style.display = 'flex';
                if (driverSection) driverSection.style.display = 'block';
            }
        }`;

indexHtml = indexHtml.replace(
    /function openInquiryForm\(\) \{[\s\S]*?setTimeout\(\(\) => modal\.classList\.add\('visible'\), 10\);\s*\}/,
    newOpenInquiryForm
);

// 4. Fix popup-restricted to be TRUE center screen
indexHtml = indexHtml.replace(
    /if \(popupId === 'popup-restricted'\) \{\s*popup\.style\.top = '50%';\s*popup\.style\.left = '50%';/g,
    `if (popupId === 'popup-restricted') {
                    popup.style.top = '50%';
                    popup.style.left = '50%';
                    popup.style.transform = 'translate(-50%, -50%)';`
);

fs.writeFileSync('index.html', indexHtml);
console.log('Modifications complete');
