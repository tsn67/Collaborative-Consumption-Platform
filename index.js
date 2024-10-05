import express from "express";
import bodyParser from "body-parser";

class Product {
  constructor(id, name, desc, seller, price) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.seller = seller;
    this.price = price;
  }
  display() {
    console.log(`id: ${this.id} name: ${this.name} desc:${thils.desc}`);
  }
}

class User {
  constructor(id, name, password) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log(`id: ${this.id} name: ${this.name} password:${thils.password}`);
  }
}

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(port, () => {
  console.log("The server start at port " + port);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});
