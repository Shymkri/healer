const fs = require('fs');

const replaceIconsWithImages = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');
    
    // Replace 1st card
    html = html.replace(
        /<div class="problem-icon-circle"><i class="fas fa-times"><\/i><\/div>\s*<p class="body-text">You give readings/,
        '<img src="./2(1).webp" alt="Predictions not perfectly accurate" style="width: 100px; height: 100px; object-fit: contain; border-radius: 12px; flex-shrink: 0;">\n                    <p class="body-text">You give readings'
    );
    
    // Replace 2nd card
    html = html.replace(
        /<div class="problem-icon-circle"><i class="fas fa-times"><\/i><\/div>\s*<p class="body-text">You sense the issue/,
        '<img src="./2(2).webp" alt="Root cause" style="width: 100px; height: 100px; object-fit: contain; border-radius: 12px; flex-shrink: 0;">\n                    <p class="body-text">You sense the issue'
    );

    // Replace 3rd card
    html = html.replace(
        /<div class="problem-icon-circle"><i class="fas fa-times"><\/i><\/div>\s*<p class="body-text">Clients feel better/,
        '<img src="./2(3).webp" alt="Negative patterns repeat" style="width: 100px; height: 100px; object-fit: contain; border-radius: 12px; flex-shrink: 0;">\n                    <p class="body-text">Clients feel better'
    );

    // Replace 4th card
    html = html.replace(
        /<div class="problem-icon-circle"><i class="fas fa-times"><\/i><\/div>\s*<p class="body-text">You attract clients/,
        '<img src="./2(4).webp" alt="Free advice" style="width: 100px; height: 100px; object-fit: contain; border-radius: 12px; flex-shrink: 0;">\n                    <p class="body-text">You attract clients'
    );

    // Replace 5th card
    html = html.replace(
        /<div class="problem-icon-circle"><i class="fas fa-times"><\/i><\/div>\s*<p class="body-text">You feel drained/,
        '<img src="./2(5).webp" alt="Drained by energies" style="width: 100px; height: 100px; object-fit: contain; border-radius: 12px; flex-shrink: 0;">\n                    <p class="body-text">You feel drained'
    );
    
    fs.writeFileSync(filepath, html);
};

replaceIconsWithImages('index.html');
replaceIconsWithImages('flexifunnel-page.html');
