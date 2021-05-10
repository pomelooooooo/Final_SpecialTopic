const express = require("express");
const app = express();
const multer = require("multer");
const mysql = require("mysql");
const cors = require("cors");
const { request } = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gotrip",
});

app.get("/place", (req, res) => {
  db.query("SELECT * FROM place", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const description = req.body.description;
  const picture = req.body.picture;

  db.query(
    "INSERT INTO  place (name, location, description, picture) VALUES(?,?,?,?)",
    [name, location, description, picture],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const location = req.body.location;
  const description = req.body.description;
  const picture = req.body.picture;
  db.query(
    "UPDATE place SET name = ?,location = ?,description = ?,picture = ? WHERE id = ?",

    [name, location, description, picture, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM place WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
