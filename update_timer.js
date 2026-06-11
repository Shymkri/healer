const fs = require('fs');

const processFile = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Add ID to the date span
    html = html.replace(
        /<span class="hero-detail-value-v2">1st to 4th June 2026<\/span>/g,
        '<span class="hero-detail-value-v2" id="dynamic-workshop-date">1st to 4th June 2026</span>'
    );

    // 2. Replace timer start logic with dynamic variables
    const oldTimerLogic = `        // Timer
        function startTimer() {
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 2);
            endDate.setHours(endDate.getHours() + 5);`;

    const newTimerLogic = `        // ==========================================
        // WORKSHOP DATE & TIMER SETTINGS
        // ==========================================
        const WORKSHOP_DISPLAY_DATE = "20th to 24th July 2026";
        const WORKSHOP_START_DATE = "July 20, 2026 00:00:00"; 

        document.addEventListener("DOMContentLoaded", function() {
            const dateEl = document.getElementById("dynamic-workshop-date");
            if (dateEl) {
                dateEl.innerText = WORKSHOP_DISPLAY_DATE;
            }
        });

        // Timer
        function startTimer() {
            const endDate = new Date(WORKSHOP_START_DATE);`;

    html = html.replace(oldTimerLogic, newTimerLogic);

    fs.writeFileSync(filepath, html);
};

processFile('index.html');
processFile('flexifunnel-page.html');
