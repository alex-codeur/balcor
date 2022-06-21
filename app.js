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

// listen for requests
app.listen(3000, () => {
    console.log('application demarre sur le port 3000');
});

// Navigation
app.get('/', (req, res) => {
    const posts = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor, sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor, sit amet consectetur' },
        { title: 'How to defeat browser', snippet: 'Lorem ipsum dolor, sit amet consectetur' },
    ];

    res.render('index', { title: 'Home', posts });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('createPost', { title: 'Create a new post' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

app.use(upload());



app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/app.html');
});

app.post('/app', (req, res) => {
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


            res.send(result);

            del(['excel/' + filename]).then(paths => {
                console.log('Le fichier ' + filename + 'a ete supprime !');
            });
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
});