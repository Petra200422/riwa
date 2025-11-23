const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: "student.veleri.hr",
    user: "riwa",
    password: "11",
    port: 3306,
    database: "riwa",
  });
  
app.use(express.urlencoded({ extended: true }));
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  // Ispis svih podataka o postojećim knjigama u knjižnici
app.get("/api/knjige", (req, res) => {
  connection.query("SELECT * FROM knjiga", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Ispis svih podataka o slobodnim knjigama u knjižnici
app.get("/api/knjige_slobodne", (req, res) => {
  connection.query("SELECT * FROM knjiga WHERE status = 'slobodna'", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Ispis svih podataka o knjizi ukoliko je dan naziv knjige
app.get("/api/knjiga_naslov", (req, res) => {
  const data = req.body;
  rezervacija = [[data.naslov]]
  connection.query("SELECT * FROM knjiga WHERE naslov =  ?", [rezervacija], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Ispis svih podataka o knjigama ukoliko je dan autor knjige
app.get("/api/knjiga_autor", (req, res) => {
  const data = req.body;
  rezervacija = [[data.autor]]
  connection.query("SELECT * FROM knjiga WHERE autor = ?", [rezervacija], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Ispis svih podataka o svim korisnicima
app.get("/api/korisnik", (req, res) => {
  connection.query("SELECT * FROM korisnik", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Ispis svih podataka o korisniku ukoliko je dan email korisnika
app.get("/api/korime", (req, res) => {
  const data = req.body;
  rezervacija = [[data.korime]]
  connection.query("SELECT * FROM korisnik SELECT WHERE korime = ?", [rezervacija], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Ispis svih podataka o rezerviranim knjigama koje nisu vraćene.
app.get("/api/knjige_rezervirane", (req, res) => {
  connection.query("SELECT * FROM knjiga WHERE status <> 'slobodna'", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Ispis svih podataka o rezerviranim knjigama (datum rezervacije, datum vraćanja) zajedno s podacima o korisniku: id, ime, prezime korisnika kod kojeg se nalazi knjiga, te podacima o knjizi: id, naziv i autor knjige.
app.get("/api/knjige_rezervirane_sve", (req, res) => {
  connection.query("SELECT r.datum_rezervacije, r.datum_vracanja, k.id AS korisnik_id, k.ime, k.prezime, b.id AS knjiga_id, b.naslov, b.autor FROM riwa.rezervacija r JOIN riwa.korisnik k ON r.korisnik = k.id JOIN riwa.knjiga b ON r.knjiga = b.id WHERE b.status <> 'slobodna';", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});



app.post("/api/rezerv_knjige", (req, res) => {
  const data = req.body;
  rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]]
  connection.query("INSERT INTO rezervacija (datum_rezervacije, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
    console.log("Server running at port: " + port);
});