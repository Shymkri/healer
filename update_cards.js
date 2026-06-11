const fs = require('fs');

const css = `
        /* Custom Problem Cards CSS */
        .card-problem-custom {
            background: linear-gradient(145deg, rgba(20, 10, 35, 0.9) 0%, rgba(10, 5, 20, 0.95) 100%);
            border: 1px solid rgba(124, 58, 237, 0.3);
            border-radius: 20px;
            padding: 24px 32px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(124, 58, 237, 0.05);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 24px;
        }
        .card-problem-custom:hover {
            border-color: rgba(245, 197, 66, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(245, 197, 66, 0.1);
        }
        .problem-custom-icon {
            width: 100px;
            height: 100px;
            min-width: 100px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            background: radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
            border: 1px solid rgba(196, 134, 255, 0.15);
            overflow: hidden;
        }
        .p-icon-glow {
            position: absolute;
            width: 60%;
            height: 60%;
            border-radius: 50%;
            filter: blur(15px);
            z-index: 1;
        }
        .p-icon-main {
            font-size: 40px;
            z-index: 2;
            background: linear-gradient(135deg, #E6C27A, #F5C542, #FF9A00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 10px rgba(245, 197, 66, 0.4));
        }
        .p-icon-main.p-purple-grad {
            background: linear-gradient(135deg, #D9C8FF, #9B6DFF);
            -webkit-background-clip: text;
            filter: drop-shadow(0 0 10px rgba(155, 109, 255, 0.5));
        }
        .p-theme-crystal .p-icon-glow { background: rgba(245, 197, 66, 0.3); }
        .p-theme-chakra .p-icon-glow { background: rgba(66, 245, 197, 0.2); }
        .p-theme-loop .p-icon-glow { background: rgba(196, 134, 255, 0.4); }
        .p-theme-money .p-icon-glow { background: rgba(245, 197, 66, 0.4); }
        .p-theme-shield .p-icon-glow { background: rgba(124, 58, 237, 0.4); }
        .p-sec-icon {
            position: absolute;
            font-size: 14px;
            color: rgba(255,255,255,0.7);
            z-index: 3;
        }
        @media (max-width: 768px) {
            .card-problem-custom { padding: 20px; gap: 16px; flex-direction: column; text-align: center; }
        }
`;

const replaceCards = (html) => {
    // We will replace the entire grid-2 in the problems section
    // First, find the block starting with `<div class="grid-2">` right after `Intuition is great, but without...`
    
    const newHtml = `            <div class="grid-2">
                <div class="card-problem-custom p-theme-crystal">
                    <div class="problem-custom-icon">
                        <div class="p-icon-glow"></div>
                        <i class="fas fa-eye p-icon-main"></i>
                        <i class="fas fa-question p-sec-icon" style="top: 15px; left: 20px;"></i>
                        <i class="fas fa-star p-sec-icon" style="bottom: 15px; right: 20px; font-size: 10px;"></i>
                    </div>
                    <p class="body-text">You give readings or therapy sessions but sometimes your predictions are not perfectly accurate.</p>
                </div>

                <div class="card-problem-custom p-theme-chakra">
                    <div class="problem-custom-icon">
                        <div class="p-icon-glow"></div>
                        <i class="fas fa-child p-icon-main p-purple-grad"></i>
                        <i class="fas fa-spa p-sec-icon" style="bottom: 10px; color: #E6C27A;"></i>
                    </div>
                    <p class="body-text">You sense the issue intuitively but don’t know how to physically work on the root cause.</p>
                </div>

                <div class="card-problem-custom p-theme-loop">
                    <div class="problem-custom-icon">
                        <div class="p-icon-glow"></div>
                        <i class="fas fa-user p-icon-main p-purple-grad" style="font-size: 32px;"></i>
                        <i class="fas fa-sync-alt p-sec-icon" style="font-size: 50px; color: rgba(196, 134, 255, 0.5); z-index: 1;"></i>
                    </div>
                    <p class="body-text">Clients feel better in the moment but their deep-rooted negative patterns repeat.</p>
                </div>

                <div class="card-problem-custom p-theme-money">
                    <div class="problem-custom-icon">
                        <div class="p-icon-glow"></div>
                        <i class="fas fa-comment-dollar p-icon-main"></i>
                        <i class="fas fa-star p-sec-icon" style="top: 15px; right: 20px; font-size: 10px; color: #F5C542;"></i>
                    </div>
                    <p class="body-text">You attract clients who only want free advice instead of committing to premium paid programs.</p>
                </div>

                <div class="card-problem-custom p-theme-shield problem-card-center">
                    <div class="problem-custom-icon">
                        <div class="p-icon-glow"></div>
                        <i class="fas fa-user-shield p-icon-main p-purple-grad"></i>
                        <i class="fas fa-bolt p-sec-icon" style="top: 20px; left: 15px; font-size: 12px; color: #E6C27A;"></i>
                        <i class="fas fa-bolt p-sec-icon" style="top: 20px; right: 15px; font-size: 12px; color: #E6C27A;"></i>
                    </div>
                    <p class="body-text">You feel drained by heavy client energies and lack a proper psychic shielding process.</p>
                </div>
            </div>`;

    let out = html.replace(/<div class="grid-2">\s*<div class="card card-glow" style="display: flex; align-items: center; gap: 20px;">\s*<div class="problem-icon-circle"><i class="fas fa-times"><\/i><\/div>\s*<p class="body-text">You give readings[\s\S]*?<\/div>\s*<\/div>/, newHtml);
    return out;
};

let i = fs.readFileSync('index.html', 'utf8');
if (!i.includes('.card-problem-custom')) {
    i = i.replace('/* ==========================================================================</style>', css + '\n/* ==========================================================================</style>');
}
i = replaceCards(i);
fs.writeFileSync('index.html', i);

let f = fs.readFileSync('flexifunnel-page.html', 'utf8');
if (!f.includes('.card-problem-custom')) {
    f = f.replace('/* ==========================================================================</style>', css + '\n/* ==========================================================================</style>');
}
f = replaceCards(f);
fs.writeFileSync('flexifunnel-page.html', f);
