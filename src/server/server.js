import express from 'express';
import path from 'path';
import proxy from 'proxy-middleware';

const app = express();
app.use('/public', express.static('./public'));
app.use('/public', proxy('http://localhost:8080/public'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(3000, () => {
    console.log('Styleguide app listening on port 3000!');
});