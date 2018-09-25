const fs = require('fs');

const rawSvg = fs.readFileSync('./assets/allicons/allicons.svg', 'utf8');
const template = fs.readFileSync('./assets/allicons/AllIcons.jsx.Template', 'utf8');

let reactComponent =
    template.replace('[ALL_ICONS_SVG_MARKUP]', rawSvg)
    .replace(/\<symbol/gi, '        <symbol')
    .replace(/\<\/svg/gi, '    </svg');

fs.writeFileSync('./assets/allicons/AllIcons.jsx', reactComponent);