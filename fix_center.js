const fs = require('fs');

const css = `
        .problem-card-item {
            display: flex !important;
            align-items: center !important;
            gap: 20px;
        }
        @media (max-width: 768px) {
            .problem-card-item {
                flex-direction: column !important;
                align-items: center !important;
                justify-content: center !important;
                text-align: center !important;
                gap: 16px;
            }
            .problem-card-item p.body-text {
                text-align: center !important;
                margin: 0 auto;
            }
        }
`;

const processFile = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // Replace old css block if present
    const oldCssRegex = /\.problem-card-item\s*\{[\s\S]*?gap:\s*16px;\s*justify-content:\s*center;\s*\}\s*\}/;
    if (html.match(oldCssRegex)) {
        html = html.replace(oldCssRegex, css.trim());
    } else {
        html = html.replace('/* ==========================================================================</style>', css + '\n/* ==========================================================================</style>');
    }
    
    fs.writeFileSync(filepath, html);
};

processFile('index.html');
processFile('flexifunnel-page.html');
