const fs = require('fs');
let c = fs.readFileSync('flexifunnel-page.html', 'utf8');
c = c.replace(/<iframe /g, '<iframe loading="lazy" ');
c = c.replace(/<img /g, '<img loading="lazy" ');
// Remove double lazy if it existed
c = c.replace(/loading="lazy" loading="lazy"/g, 'loading="lazy"');
fs.writeFileSync('flexifunnel-page.html', c);

let i = fs.readFileSync('index.html', 'utf8');
i = i.replace(/<iframe /g, '<iframe loading="lazy" ');
i = i.replace(/<img /g, '<img loading="lazy" ');
i = i.replace(/loading="lazy" loading="lazy"/g, 'loading="lazy"');
fs.writeFileSync('index.html', i);
