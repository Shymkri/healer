const fs = require('fs');

const removeMobileColumnCSS = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // Remove the CSS block for mobile-column-center completely
    const cssRegex = /\s*@media\s*\(max-width:\s*768px\)\s*\{\s*\.mobile-column-center\s*\{[\s\S]*?\}\s*\}\s*/g;
    html = html.replace(cssRegex, '\n');

    // Remove the .mobile-column-center class from the HTML elements
    html = html.replace(/class="card card-glow mobile-column-center"/g, 'class="card card-glow"');
    html = html.replace(/class="card problem-card-center card-glow mobile-column-center"/g, 'class="card problem-card-center card-glow"');

    // Ensure the inline styles still have gap and align-items
    // style="display: flex; align-items: center; gap: 20px;" is already there
    
    fs.writeFileSync(filepath, html);
};

removeMobileColumnCSS('index.html');
removeMobileColumnCSS('flexifunnel-page.html');
