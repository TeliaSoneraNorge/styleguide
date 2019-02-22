import express from 'express';
import fs from 'fs';
import path from 'path';

import proxy from 'proxy-middleware';

import colors from './colors.json';
import { getConfig } from './config';
import marked from 'marked';

const app = express();
const config = getConfig();

// Configure view engine
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

// Configure the '/public' folder
app.use('/public', express.static('./dist/public'));
if (config.environment === 'development') {
    app.use('/public', proxy('http://localhost:8090/public')); // for webpack-dev-server
}

// Send all requests to the same index.ejs view where the React app will start on the client
app.get('/*', (req, res) => {
    const staticData = {
        colors,
        variablesCss: fs.readFileSync('./component-lib/src/variables.pcss', 'utf8'),
        versionsHtml: marked(fs.readFileSync('./VERSIONS.md', 'utf8')),
        icons: fs.readdirSync('./component-lib/assets/icons'),
        pebbles: fs.readdirSync('./component-lib/assets/pebbles'),
    };
    res.render('index', {
        staticData: JSON.stringify(staticData),
        environment: config.environment
    });
});

const port = (process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Styleguide app listening on port ${port}!`);
});