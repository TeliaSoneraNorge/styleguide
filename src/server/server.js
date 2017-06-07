import express from 'express';
import proxy from 'proxy-middleware';

import { getConfig } from './config';
import { getColorsFromFilePath } from './colorUtil';

const app = express();
const config = getConfig();

// Configure view engine
app.set('views', './src/server/views');
app.set('view engine', 'ejs');

// Configure the '/public' folder
app.use('/public', express.static('./public'));
if (config.environment === 'development') {
    app.use('/public', proxy('http://localhost:8080/public')); // for webpack-dev-server
}

// Send all requests to the same index.ejs view where the React app will start on the client
app.get('/*', (req, res) => {
    const initialState = {
        colors: getColorsFromFilePath('src/components', 'colors.pcss')
    };
    res.render('index', {
        initialState: JSON.stringify(initialState)
    });
});

const port = (process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Styleguide app listening on port ${port}!`);
});