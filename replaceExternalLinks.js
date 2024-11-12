const cdnizerFactory = require('cdnizer');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const cdnizer = cdnizerFactory({
  defaultCDNBase: `//${process.env.REACT_APP_LOCAL_DOMAIN}`, // Use environment variable
  files: [
    'http://*/**/*',
    'https://*/**/*',
  ],
});

const buildDir = path.join(__dirname, 'build'); // Adjust to your build directory
const htmlFilePath = path.join(buildDir, 'index.html'); // Adjust to your HTML file

const contents = fs.readFileSync(htmlFilePath, 'utf8');
const replacedContents = cdnizer(contents);

fs.writeFileSync(htmlFilePath, replacedContents);

console.log('External links replaced with local URLs');
