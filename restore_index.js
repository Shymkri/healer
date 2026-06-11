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
            .mobile-column-center img {
                margin: 0 auto !important;
            }
        }
`;

const processFile = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // Add CSS before </style> if not already there
    if (!html.includes('.mobile-column-center {')) {
        html = html.replace('/* ==========================================================================</style>', css + '\n/* ==========================================================================</style>');
    }

    // Add the class back to the HTML elements
    html = html.replace(/<div class="card card-glow" style="display: flex; align-items: center; gap: 20px;">/g, '<div class="card card-glow mobile-column-center" style="display: flex; align-items: center; gap: 20px;">');
    html = html.replace(/<div class="card problem-card-center card-glow" style="display: flex; align-items: center; gap: 20px;">/g, '<div class="card problem-card-center card-glow mobile-column-center" style="display: flex; align-items: center; gap: 20px;">');
    
    fs.writeFileSync(filepath, html);
};

processFile('index.html');
