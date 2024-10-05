import express from "express";
import bodyParser from "body-parser";


let newUserId = 130;

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
    this.password = password;
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


app.post("/login", (req, res) => {
    console.log(req.body);
    const curr_pass = req.body.password;
    const curr_name = req.body.name;
    console.log(curr_name, curr_pass);
  
    const selectedUser = users.find(
      (user) => user.name === curr_name && user.password === curr_pass
    );
  
    console.log(selectedUser);
    if (!selectedUser) {
      return res.status(500).json({message: "User not Found😢"});
    }
    res.status(200).json(selectedUser);
  });
  //--------------------------------------------------------------
  app.post("/signup", (req, res) => {
    const myname = req.body.name;
    const mypassword = req.body.password;
  
    // Basic validation
    if (!myname || !mypassword) {
      return res.status(400).json({message: "Password and Name required"});
    }
  
    // Check if the user already exists
    const existingUser = users.find((user) => user.name === myname);
    if (existingUser) {
      return res.status(409).json({message: "User Already exist"});
    }
  
    // Create a new user
    newUserId++;
    const newUser = {newUserId, myname, mypassword};
    users.push(newUser);
  
    // Send success response
    res.status(201).json({message: "User registerd Succesfully"});
  });
  
  app.get("/api/users", (req, res) => {
    res.status(200).send(users);
  });
  
  app.get("/api/products", (req, res) => {
    res.status(200).send(products);
  });

/////

