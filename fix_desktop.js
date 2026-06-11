const fs = require('fs');

const css = `
        @media (max-width: 768px) {
            .mobile-column-center {
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
                text-align: center !important;
                gap: 16px !important;
            }
            .mobile-column-center .body-text {
                text-align: center !important;
                margin: 0 auto !important;
            }
        }
`;

const processFile = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // Remove the old .problem-card-item CSS block
    const oldCssRegex = /\.problem-card-item\s*\{[\s\S]*?margin:\s*0\s*auto;\s*\}\s*\}/;
    if (html.match(oldCssRegex)) {
        html = html.replace(oldCssRegex, css.trim());
    } else {
        html = html.replace('/* ==========================================================================</style>', css + '\n/* ==========================================================================</style>');
    }

    // Replace classes and restore inline styles
    html = html.replace(/<div class="card card-glow problem-card-item">/g, '<div class="card card-glow mobile-column-center" style="display: flex; align-items: center; gap: 20px;">');
    html = html.replace(/<div class="card problem-card-center card-glow problem-card-item">/g, '<div class="card problem-card-center card-glow mobile-column-center" style="display: flex; align-items: center; gap: 20px;">');
    
    fs.writeFileSync(filepath, html);
};

processFile('index.html');
processFile('flexifunnel-page.html');
