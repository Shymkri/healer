const fs = require('fs');

const updateDate = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    html = html.replace('const WORKSHOP_DISPLAY_DATE = "20th to 24th July 2026";', 'const WORKSHOP_DISPLAY_DATE = "20th to 24th June 2026";');
    html = html.replace('const WORKSHOP_START_DATE = "July 20, 2026 00:00:00";', 'const WORKSHOP_START_DATE = "June 20, 2026 00:00:00";');

    fs.writeFileSync(filepath, html);
};

updateDate('index.html');
updateDate('flexifunnel-page.html');
