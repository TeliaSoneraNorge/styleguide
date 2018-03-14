const process = require('process');
const fs = require('fs');
const path = require('path');

console.log(process.argv.length);

if (process.argv.length != 3) {
    console.error("Usage: npm run export -- PATH");
    process.exit(1);
}

const src = path.join('public');
const dest = process.argv[2];

// Create the target directory if it doesn't exit
try {
    fs.accessSync(dest);
} catch(err) {
    fs.mkdirSync(dest);
}

// Copy the CSS into place
let componentsCss = fs.readFileSync(path.join(src, 'css', 'bundle.components.css'), 'utf8');
componentsCss = componentsCss.replace(/\/public\//g, '');
fs.writeFileSync(path.join(dest, 'telia-styleguide.css'), componentsCss);

function copyDeep(src, dest) {
    console.log("Copying", src, dest)
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        const dir = path.basename(src);

        // Create the destination directory if it doesn't exist.
        // Is there really no better way to check if an FD exists without throwing an error?!?!?
        try {
            fs.accessSync(dest);
        } catch(err) {
            fs.mkdirSync(dest);
        }

        fs.readdirSync(src).forEach(file => {
            copyDeep(path.join(src, file), path.join(dest, file));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}


// Copy the rest of the artifacts
copyDeep(path.join(src, 'fonts'), path.join(dest, 'fonts'));
copyDeep(path.join(src, 'icons'), path.join(dest, 'icons'));
copyDeep(path.join(src, 'images'), path.join(dest, 'images'));
copyDeep(path.join(src, 'pebbles'), path.join(dest, 'pebbles'));

