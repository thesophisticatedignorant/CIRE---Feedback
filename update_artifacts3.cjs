const fs = require('fs');

let impPlan = fs.readFileSync('/Users/thesophisticatedignorant/.gemini/antigravity/brain/05532c4f-97ea-422b-a99b-1c44284089fd/implementation_plan.md', 'utf8');

impPlan += `

### Follow-Up UI & Reactivity Fixes (v3)

#### [MODIFY] [index.html](file:///Users/thesophisticatedignorant/.gemini/antigravity/scratch/CIRE-github/index.html)
- **Selection Consistency**: Standardized selection state across Icon and List views to mirror Column view logic. A single click now sets the active index (\`selectedColumnIndex\`) to highlight the file, and a double-click triggers file opening/folder navigation.
- **Keyboard Navigation**: Substantially expanded the \`keydown\` event listener to handle Arrow keys, Enter, and Escape across all four view types (List, Icon, Columns, Gallery). Arrow keys seamlessly cycle the selection while smoothly scrolling the container to keep the active item in view. Enter will open the targeted item. Esc closes the top-most active popup window.
- **Popup Centering**: Set \`popup-restricted\` to explicitly use \`top: 50%\`, \`left: 50%\`, and \`transform: translate(-50%, -50%)\` to guarantee it displays directly in the absolute center of the user's screen regardless of dimensional calculation.
- **Reveal Desktop Persistence**: Eliminated the script block that was maliciously forcing popups to snap to the top-center (\`top: 100px\`) when restoring from Reveal Desktop. Popups will now transition smoothly back to their precise prior X/Y coordinates on screen.
- **Text Update**: Modified the product detail modal submission button text from "Request Access" to "Private Inquiry" per user request.

## Verification Plan

### Manual Verification
- Open the codebase and test navigation using the Arrow Keys in all four views (List, Icon, Columns, Gallery). Verify Enter opens items properly and Esc closes active windows.
- Toggle "Reveal Desktop", move windows, and exit reveal mode to ensure windows restore their coordinates gracefully.
`;

fs.writeFileSync('/Users/thesophisticatedignorant/.gemini/antigravity/brain/05532c4f-97ea-422b-a99b-1c44284089fd/implementation_plan.md', impPlan);

let taskFile = fs.readFileSync('/Users/thesophisticatedignorant/.gemini/antigravity/brain/05532c4f-97ea-422b-a99b-1c44284089fd/task.md', 'utf8');
taskFile += `
- [x] **Follow-Up Iteration 2**
    - [x] Fix single-click select / double-click open paradigm in Icons and List views.
    - [x] Support global Arrow keys / Enter / Esc across all view modes.
    - [x] Update restricted popup centering logic.
    - [x] Correct Restore Desktop behavior.
    - [x] Update Private Inquiry button text.
`;
fs.writeFileSync('/Users/thesophisticatedignorant/.gemini/antigravity/brain/05532c4f-97ea-422b-a99b-1c44284089fd/task.md', taskFile);
