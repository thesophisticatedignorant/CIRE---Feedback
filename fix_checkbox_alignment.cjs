const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Update .checkbox-item align-items to flex-start so checkboxes align at the top
indexHtml = indexHtml.replace(
    /\.checkbox-item \{ display: flex !important; flex-direction: row !important; align-items: center !important;/g,
    '.checkbox-item { display: flex !important; flex-direction: row !important; align-items: flex-start !important;'
);

// Add top margin to the checkbox so it aligns with the first line of text
indexHtml = indexHtml.replace(
    /\.checkbox-item input\[type="checkbox"\] \{ flex-shrink: 0 !important; appearance: none; -webkit-appearance: none; width: 16px !important; height: 16px !important; border: 1px solid rgba\(255,255,255,0\.3\); border-radius: 2px; background: transparent; cursor: pointer; transition: all 0\.2s; position: relative; margin: 0 !important;/g,
    '.checkbox-item input[type="checkbox"] { flex-shrink: 0 !important; appearance: none; -webkit-appearance: none; width: 16px !important; height: 16px !important; border: 1px solid rgba(255,255,255,0.3); border-radius: 2px; background: transparent; cursor: pointer; transition: all 0.2s; position: relative; margin: 0 !important; margin-top: -1px !important;'
);

// Decrease gap to make it tighter
indexHtml = indexHtml.replace(
    /\.checkbox-group \{ display: grid; grid-template-columns: repeat\(2, 1fr\); row-gap: 14px; column-gap: 12px; margin-top: 12px; align-items: center; \}/g,
    '.checkbox-group { display: grid; grid-template-columns: repeat(2, 1fr); row-gap: 10px; column-gap: 10px; margin-top: 12px; align-items: flex-start; }'
);

fs.writeFileSync('index.html', indexHtml);
console.log('Alignment fixed');
