const fs = require('fs');

const originalHtml = `            <div class="grid-2">
                 <div class="card card-glow" style="display: flex; align-items: center; gap: 20px;">
                    <div class="problem-icon-circle"><i class="fas fa-times"></i></div>
                    <p class="body-text">You give readings or therapy sessions but sometimes your predictions are not perfectly accurate.</p>
                </div>

                <div class="card card-glow" style="display: flex; align-items: center; gap: 20px;">
                    <div class="problem-icon-circle"><i class="fas fa-times"></i></div>
                    <p class="body-text">You sense the issue intuitively but don’t know how to physically work on the root cause.</p>
                </div>

                <div class="card card-glow" style="display: flex; align-items: center; gap: 20px;">
                    <div class="problem-icon-circle"><i class="fas fa-times"></i></div>
                    <p class="body-text">Clients feel better in the moment but their deep-rooted negative patterns repeat.</p>
                </div>

                <div class="card card-glow" style="display: flex; align-items: center; gap: 20px;">
                    <div class="problem-icon-circle"><i class="fas fa-times"></i></div>
                    <p class="body-text">You attract clients who only want free advice instead of committing to premium paid programs.</p>
                </div>

                <div class="card problem-card-center card-glow" style="display: flex; align-items: center; gap: 20px;">
                    <div class="problem-icon-circle"><i class="fas fa-times"></i></div>
                    <p class="body-text">You feel drained by heavy client energies and lack a proper psychic shielding process.</p>
                </div>
            </div>`;

const undoChanges = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');
    
    // Replace HTML
    html = html.replace(/<div class="grid-2">\s*<div class="card-problem-custom p-theme-crystal">[\s\S]*?<\/div>\s*<\/div>/, originalHtml);
    
    // Remove CSS
    const cssStart = '/* Custom Problem Cards CSS */';
    const cssEnd = '/* ==========================================================================</style>';
    
    if (html.includes(cssStart)) {
        let beforeCss = html.substring(0, html.indexOf(cssStart));
        let afterCssStart = html.substring(html.indexOf(cssStart));
        
        let afterCss = afterCssStart.substring(afterCssStart.indexOf(cssEnd));
        
        html = beforeCss + afterCss;
    }
    
    fs.writeFileSync(filepath, html);
};

undoChanges('index.html');
undoChanges('flexifunnel-page.html');
