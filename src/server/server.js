import Archiver from 'archiver';
import express from 'express';
import fs from 'fs';
import proxy from 'proxy-middleware';

import colors from './colors.json';
import { getConfig } from './config';

const app = express();
const config = getConfig();

// Configure view engine
app.set('views', './src/server/views');
app.set('view engine', 'ejs');

// Configure the '/public' folder
app.use('/public', express.static('./public'));
if (config.environment === 'development') {
    app.use('/public', proxy('http://localhost:8090/public')); // for webpack-dev-server
}

app.get('/download-zip', (req, res) => {
    res.set('Content-Type', 'application/zip');
    res.set('Content-Disposition', 'attachment; filename=TeliaStyleguide.zip');

    const zip = Archiver('zip');
    zip.pipe(res);

    let componentsCss = fs.readFileSync('public/css/bundle.components.css', 'utf8');
    componentsCss = componentsCss.replace(/\/public\//g, '');

    zip.append('Follow the instuctions on the Telia Styleguide for usage.', { name: 'README.txt' })
        .append(componentsCss, { name: 'telia-styleguide.css' })
        .directory('public/fonts/', 'fonts')
        .directory('public/icons/', 'icons')
        .directory('public/images/', 'images')
        .directory('public/pebbles/', 'pebbles')
        .finalize();
});

// Send all requests to the same index.ejs view where the React app will start on the client
app.get('/*', (req, res) => {
    const initialState = {
        colors,
        variablesCss: fs.readFileSync('src/components/variables.pcss', 'utf8')
    };
    res.render('index', {
        initialState: JSON.stringify(initialState),
        environment: config.environment
    });
});

const port = (process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Styleguide app listening on port ${port}!`);
});