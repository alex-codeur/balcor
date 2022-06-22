// DOCUMENTATION
// https://www.npmjs.com/package/convert-excel-to-json
// https://github.com/DiegoZoracKy/convert-excel-to-json/


// Imports
const express = require('express');
const upload = require("express-fileupload");
const importExcel = require('convert-excel-to-json');
const del = require('del');
const xlsx = require('xlsx');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');
const jsonToHtml = require('node-json2html');
const jsonHtml = require('json2html');
const _ = require('lodash');
const xlsToJSON = require("excel-to-clean-json");

// const { donnees } = require('./public/js/balance.js');

// express app
const app = express();

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// register view engine
app.use(expressLayouts);
app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');
app.use(upload());

// listen for requests
app.listen(3000, () => {
    console.log('application demarre sur le port 3000');
});

// Navigation
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/balcor', (req, res) => {
    res.render('balcor', { layout: './layouts/balcor-layout' });
});

app.post('/balcor', (req, res) => {
    let file = req.files.filename;
    let filename = file.name;



    file.mv('./excel/' + filename, (err) => {
        if (err) {
            res.send('maaf gagal upload !');
        } else {
            let result = xlsToJSON.json("./excel/" + filename, "Balance");

            let result2 = importExcel({
                sourceFile: './excel/plan.xlsx'
            });

            let resultat = JSON.stringify(result, null, 2);
            let resultat2 = JSON.stringify(result2, null, 2);

            fs.writeFileSync('./public/js/balance.js', `const data = ${resultat}`);
            fs.writeFileSync('./public/js/balance2.js', `const data = ${resultat2}`);


            del(['excel/' + filename]).then(paths => {
                console.log('Le fichier ' + filename + 'a ete supprime !');
            });

            res.render('balcor', { layout: './layouts/balcor-layout' });
        }
    });
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404', layout: './layouts/balcor-layout' });
});
;