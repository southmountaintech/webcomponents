const fs = require('fs');
const path = require('path');

const webComponentCDNDirectory = 'public/build/cdn';
const ignored = ['.git', 'CDN'];
const publicFolder = path.join(__dirname, 'public');

fs.readdirSync('..')
  .filter(item => ignored.indexOf(item) < 0)
  .forEach(item => {
    const cdnPath = path.join('..', item, webComponentCDNDirectory)

    if(fs.existsSync(cdnPath)) {
      fs.readdirSync(cdnPath)
        .forEach(cdnItem =>{
          fs.copyFileSync(path.join(cdnPath, cdnItem), path.join(publicFolder, cdnItem));
        });
    }
  });
