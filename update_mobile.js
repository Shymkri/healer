const fs = require('fs');

const css = `
        .problem-card-item {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        @media (max-width: 768px) {
            .problem-card-item {
                flex-direction: column;
                text-align: center;
                gap: 16px;
                justify-content: center;
            }
        }
`;

const processFile = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // add CSS if not present
    if (!html.includes('.problem-card-item {')) {
        html = html.replace('/* ==========================================================================</style>', css + '\n/* ==========================================================================</style>');
    }

    // replace inline styles with the class
    html = html.replace(/<div class="card card-glow" style="display: flex; align-items: center; gap: 20px;">/g, '<div class="card card-glow problem-card-item">');
    html = html.replace(/<div class="card problem-card-center card-glow" style="display: flex; align-items: center; gap: 20px;">/g, '<div class="card problem-card-center card-glow problem-card-item">');
    
    fs.writeFileSync(filepath, html);
};

processFile('index.html');
processFile('flexifunnel-page.html');
