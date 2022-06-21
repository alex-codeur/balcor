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
            let result = importExcel({
                sourceFile: './excel/' + filename,
                sheets: [{
                    name: 'Produits',
                    header: {
                        rows: 1
                    },
                    columnToKey: {
                        A: "NOM",
                        B: "PRIX",
                        C: "QUANTITE",
                        D: "DATE",
                        E: "PAYE"
                    }
                }, {
                    name: 'Fournitures',
                    header: {
                        rows: 1
                    },
                    columnToKey: {
                        A: "NOM",
                        B: "MONTANT",
                        C: "NOMBRE",
                        D: "ETAT"
                    }
                }]
            });

            const wb = xlsx.readFile('./excel/' + filename, { dateNF: "dd/mm/yyyy" });
            const ws = wb.Sheets['Produits'];
            const ws2 = wb.Sheets['Fournitures'];
            const data = xlsx.utils.sheet_to_json(ws, { raw: false });
            const data2 = xlsx.utils.sheet_to_json(ws2, { raw: false });

            let newData = [];
            let newData2 = [];

            newData = data.map(d => {
                if (d.PAYE === "oui") {
                    d.PAYE = true;
                }

                if (d.PAYE === "non") {
                    d.PAYE = false;
                }

                return d;
            });

            newData2 = data2.map(d => {
                if (d.ETAT === "neuf") {
                    d.ETAT = "vieux";
                }

                if (d.ETAT === "vieux") {
                    d.ETAT = "neuf";
                }

                return d;
            });


            fs.writeFileSync("./data/data.json", JSON.stringify(newData, null, 2));
            fs.writeFileSync("./data/data2.json", JSON.stringify(newData2, null, 2));

            del(['excel/' + filename]).then(paths => {
                console.log('Le fichier ' + filename + 'a ete supprime !');
            });

            res.render('balcor', { layout: './layouts/balcor-layout' });
        }
    });

    let content = JSON.parse(fs.readFileSync("data/data.json", "utf-8"));
    let content2 = JSON.parse(fs.readFileSync("data/data2.json", "utf-8"));

    let newWB = xlsx.utils.book_new();

    let newWS = xlsx.utils.json_to_sheet(content);
    let newWS2 = xlsx.utils.json_to_sheet(content2);

    xlsx.utils.book_append_sheet(newWB, newWS, 'Produits');
    xlsx.utils.book_append_sheet(newWB, newWS2, 'Fournitures');

    xlsx.writeFile(newWB, "./newexcel/newExcel.xlsx");
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404', layout: './layouts/balcor-layout' });
});
;