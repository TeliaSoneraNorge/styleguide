import express from 'express';
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
    app.use('/public', proxy('http://localhost:8080/public')); // for webpack-dev-server
}

// Send all requests to the same index.ejs view where the React app will start on the client
app.get('/*', (req, res) => {
    const initialState = { colors };
    res.render('index', {
        initialState: JSON.stringify(initialState),
        environment: config.environment
    });
});

const port = (process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Styleguide app listening on port ${port}!`);
});