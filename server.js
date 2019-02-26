const Bundler = require('parcel-bundler');
const express = require('express');

const app = express();

// Serve the frontend code
if (process.env.LOCAL_DEV === 'true') {
    // Development: Set up Parcel Bundler for hot-reloading, etc
    const bundler = new Bundler('./src/index.html', {});
    app.use(bundler.middleware());
} else {
    // Production: server the 'dist' folder
    app.use(express.static('dist'));
}

// Start server
const port = (process.env.PORT || 3001);
app.listen(port, () => {
    console.log(`Styleguide app listening on port ${port}!`);
});