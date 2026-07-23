const fs = require('fs');
const { JSDOM } = require('jsdom');
const content = fs.readFileSync('index.html', 'utf8');

const virtualConsole = new (require("jsdom")).VirtualConsole();
virtualConsole.on("error", (e) => {
    console.error("PAGE ERROR:", e);
});
virtualConsole.on("jsdomError", (e) => {
    console.error("JSDOM ERROR:", e.message);
});
virtualConsole.on("log", (m) => {
    console.log("PAGE LOG:", m);
});

const dom = new JSDOM(content, { 
    url: "http://localhost",
    runScripts: "dangerously", 
    virtualConsole 
});
console.log("Loaded DOM!");

setTimeout(() => {
    console.log("Triggering DOMContentLoaded...");
    const event = dom.window.document.createEvent('Event');
    event.initEvent('DOMContentLoaded', true, true);
    dom.window.document.dispatchEvent(event);
    console.log("Dispatched.");
}, 500);
