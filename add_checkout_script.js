const fs = require('fs');

const scriptBlock = `
    <!-- GLOBAL CHECKOUT LINK SETTING -->
    <script>
        // ==========================================
        // UPDATE THIS ONE LINK TO CHANGE ALL BUTTONS
        // ==========================================
        const GLOBAL_CHECKOUT_LINK = "#register"; 

        document.addEventListener("DOMContentLoaded", function() {
            const ctaButtons = document.querySelectorAll('.cta, .shift-cta');
            ctaButtons.forEach(button => {
                // This updates every button to use the link above
                button.href = GLOBAL_CHECKOUT_LINK;
            });
        });
    </script>
`;

const processFile = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // Add the script right before </body>
    if (!html.includes('GLOBAL_CHECKOUT_LINK')) {
        html = html.replace('</body>', scriptBlock + '\n</body>');
        fs.writeFileSync(filepath, html);
    }
};

processFile('index.html');
processFile('flexifunnel-page.html');
