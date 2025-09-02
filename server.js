const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let nomorAntrian = '';
let dipanggil = true;

app.post('/update-antrian', (req, res) => {
    nomorAntrian = req.body.nomor;
    dipanggil = false; // tandai perlu dipanggil
    res.send({ status: 'ok' });
});

app.get('/get-antrian', (req, res) => {
    res.send({ nomor: nomorAntrian, dipanggil });
});

app.post('/sudah-dipanggil', (req, res) => {
    dipanggil = true;
    res.send({ status: 'ok' });
});

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(5443, () => {
    console.log('Antrian HTTPS server berjalan di https://10.82.7.4:5443');
});
