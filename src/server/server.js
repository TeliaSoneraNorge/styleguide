import express from 'express';
import path from 'path';
import proxy from 'proxy-middleware';

import { getConfig } from './config';

const app = express();
const config = getConfig();

// Configure the '/public' folder
app.use('/public', express.static('./public'));
if (config.environment === 'development') {
    app.use('/public', proxy('http://localhost:8080/public')); // for webpack-dev-server
}

// Send all requests to the .html file where the React app will start on the client
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

const port = (process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Styleguide app listening on port ${port}!`);
});