const fs = require('fs');

const optimizeFile = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Add preload for the main hero image
    const preloadLink = '<link rel="preload" as="image" href="https://img.flexifunnels.com/images/33520/drpradeepmentorcard_v5lee_1122.png">\n</head>';
    if (!html.includes('rel="preload" as="image"')) {
        html = html.replace('</head>', preloadLink);
    }

    // 2. Add loading="lazy" and decoding="async" to all images
    // First, let's just globally replace <img> tags carefully
    
    // Replace all img tags with a function to append lazy if needed
    html = html.replace(/<img([^>]+)>/g, (match, p1) => {
        let newAttrs = p1;
        
        // Add decoding="async" if not present
        if (!newAttrs.includes('decoding=')) {
            newAttrs += ' decoding="async"';
        }
        
        // If it's the hero image, we use fetchpriority="high" and DO NOT lazy load
        if (newAttrs.includes('hero-mentor-image-v2') || newAttrs.includes('drpradeepmentorcard_v5lee_1122.png')) {
            if (!newAttrs.includes('fetchpriority=')) {
                newAttrs += ' fetchpriority="high"';
            }
            // Remove loading="lazy" if it accidentally has it
            newAttrs = newAttrs.replace(/\s*loading=["']lazy["']/g, '');
        } else {
            // It's a below-the-fold image, add lazy loading
            if (!newAttrs.includes('loading=')) {
                newAttrs += ' loading="lazy"';
            }
        }
        
        return `<img${newAttrs}>`;
    });

    // Minify HTML lightly: Remove excessive blank lines to reduce size by a few KB
    html = html.replace(/\n\s*\n\s*\n/g, '\n\n');

    fs.writeFileSync(filepath, html);
};

optimizeFile('index.html');
optimizeFile('flexifunnel-page.html');
