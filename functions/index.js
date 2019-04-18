var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', async function (req, res) {
    try {

        const raw = await fetch('https://bicing.barcelona/get-stations', {
            method: 'POST',
        });
        const data = await raw.json();
        res.json(data);
    } catch (e) {
        res.send(500);
    }
});

app.get('/lines', async function (req, res) {
    try {
        const raw = await fetch('http://opendata-ajuntament.barcelona.cat/resources/bcn/CARRIL_BICI.geojson');
        const data = await raw.json();
        res.json(data);
    } catch (e) {
        res.send(500);
    }
});

module.exports.BISING = app;
