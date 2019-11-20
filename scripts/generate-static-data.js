const fs = require('fs');
const marked = require('marked');

const packageJson = require('../package.json');
const colorsJson = require('../src/colors.json');

const staticData = {
  colors: colorsJson,
  variablesCss: fs.readFileSync('./component-lib/src/variables.pcss', 'utf8'),
  versionsHtml: marked(fs.readFileSync('./VERSIONS.md', 'utf8')),
  icons: fs.readdirSync('./component-lib/assets/icons').filter(f => f.match(/\.svg$/)),
  pebbles: fs.readdirSync('./component-lib/assets/pebbles'),
  version: packageJson.version,
};

fs.writeFileSync('./src/static-data.json', JSON.stringify(staticData, null, 2));
