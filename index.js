import express from "express";
import bodyParser from "body-parser";

class Product {
  constructor(id, name, desc, seller_id, price) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.seller_id = seller_id;
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

const user1 = new User(100, "Alice", "password");
const user2 = new User(101, "Bob", "password");
const user3 = new User(102, "Charlie", "password");
const user4 = new User(103, "Alice", "password");

const product1 = new Product(
  200,
  "Laptop",
  "High-performance laptop",
  100,
  1200
);
const product2 = new Product(
  201,
  "Smartphone",
  "Latest smartphone with 5G",
  101,
  800
);
const product3 = new Product(
  202,
  "Headphones",
  "Noise-cancelling headphones",
  102,
  150
);
const product4 = new Product(
  203,
  "Headphones",
  "Noise-cancelling headphones",
  103,
  150
);
const users = [user1, user2, user3, user4];
const products = [product1, product2, product3, product4];

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

app.get("/login", (req, res) => {
    res.render("login.ejs");
})