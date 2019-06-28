const Bundler = require('parcel-bundler');
const express = require('express');
const path = require('path');

const app = express();

// Serve the frontend code
if (process.env.LOCAL_DEV === 'true') {
  // Development: Set up Parcel Bundler for hot-reloading, etc
  const bundler = new Bundler('./src/index.html', {});
  app.use(bundler.middleware());
} else {
  // Production: serve the 'dist' folder
  app.use(express.static('dist'));

  // All page requests should serve the index.html file (client-side routing then handles the rest)
  app.get('/*', (req, res) => {
    const indexHtml = path.resolve(__dirname, './dist/index.html');
    res.sendFile(indexHtml);
  });
}

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Styleguide app listening on port ${port}!`);
});
