const fs = require('fs');

const updateImageUrls = (filepath) => {
    let html = fs.readFileSync(filepath, 'utf8');
    
    html = html.replace(/\.\/2\(1\)\.webp/g, 'https://img.flexifunnels.com/images/33520/21_wh73z_360.webp');
    html = html.replace(/\.\/2\(2\)\.webp/g, 'https://img.flexifunnels.com/images/33520/22_5zpc0_360.webp');
    html = html.replace(/\.\/2\(3\)\.webp/g, 'https://img.flexifunnels.com/images/33520/23_81qfc_360.webp');
    html = html.replace(/\.\/2\(4\)\.webp/g, 'https://img.flexifunnels.com/images/33520/24_her72_360.webp');
    html = html.replace(/\.\/2\(5\)\.webp/g, 'https://img.flexifunnels.com/images/33520/25_rly33_360.webp');
    
    fs.writeFileSync(filepath, html);
};

updateImageUrls('index.html');
updateImageUrls('flexifunnel-page.html');
