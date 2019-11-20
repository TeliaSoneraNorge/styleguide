const fs = require('fs');

const rawSvg = fs.readFileSync('./assets/business-allicons/business-allicons.svg', 'utf8');
const template = fs.readFileSync('./src/business/Icon/AllBusinessIcons.tsx.template', 'utf8');

let reactComponent = template
  .replace('[ALL_ICONS_LAST_GENERATED_AT]', new Date().toISOString())
  .replace('[ALL_ICONS_SVG_MARKUP]', rawSvg)
  .replace(/<symbol/gi, '        <symbol')
  .replace(/<\/svg/gi, '    </svg');

fs.writeFileSync('./src/business/Icon/AllBusinessIcons.tsx', reactComponent);
