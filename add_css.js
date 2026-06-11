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

const filepath = 'index.html';
let html = fs.readFileSync(filepath, 'utf8');

if (!html.includes('mobile-column-center img')) {
    html = html.replace('</head>', css + '\n</head>');
}
fs.writeFileSync(filepath, html);

