const folderData = {
    'concierge-automotive': {
        files: [{ name: 'Test.png' }]
    }
};
function isItemProtected(name) {
    if (folderData['concierge-automotive']?.files?.some(f => f.name === name)) return false;
    return true;
}
console.log(isItemProtected('Test.png'));
