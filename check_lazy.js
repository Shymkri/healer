const fs = require('fs');
const html = fs.readFileSync('flexifunnel-page.html', 'utf8');
const imgTags = html.match(/<img[^>]+>/g) || [];
console.log(`Total images: ${imgTags.length}`);
const noLazy = imgTags.filter(img => !img.includes('loading="lazy"'));
console.log(`Images without lazy load: ${noLazy.length}`);
if (noLazy.length > 0) {
    console.log(noLazy.slice(0, 5));
}
