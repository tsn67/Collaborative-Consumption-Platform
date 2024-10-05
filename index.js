import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import session from "express-session";

import dotenv from 'dotenv';
dotenv.config();

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

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

var testUser = null;

var name = null;
var bio = null;
var mobile = null;
var location = null;
var email = null;
var imageUrl = null;

app.post("/login-submit", (req, res) => {
  console.log(req.body);
  testUser = new User(newUserId++, req.body.email, req.body.password);
  res.render("profile1.ejs");
});

app.get("/login-submi1", (req, res) => {
    res.render("profile1.ejs");
});

var obj = null;

app.get("/profile-submit", (req, res) => {
   obj = JSON.parse(req.query.data);
   console.log(req.query.data);
   res.render("index-login.ejs");
})

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

app.get("/login", (req, res) => {
 
  if(req.query.data) {
    setTimeout(()=> {
        res.render("login.ejs", {
            data: "login required!",
        });
    },1100);
  } else {
    setTimeout(()=> {
        res.render("login.ejs");
      },1100);
  }
 
});

app.get("/contacts", (req, res) => {
  res.render("contacts.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: true,
    })
);
  
// Passport middleware setup
app.use(passport.initialize());
app.use(passport.session());
  
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  // Deserialize user from session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  

  passport.use(
    new GoogleStrategy(
      {
        clientID:
          //"627938274801-9b1508k5ld0bgi7k7kjtupg76m5e8a0l.apps.googleusercontent.com",
            googleClientId,
        clientSecret: 
        //"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",
            googleClientSecret,
        callbackURL: "http://localhost:3000/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        // Handle user profile here
        return done(null, profile);
      }
    )
  );
  
app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
    }),
    (req, res) => {
      // Successful authentication
      res.redirect("/profile");
    }
);
  

  
  // Logout route
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});
  
app.get("/auth/google", (req, res) => {
    console.log(req.body);
    //res.render("login-success.ejs");
});

app.get("/profile-view", (req, res) => {
    console.log(obj.email);
    res.render("user.ejs", {
        email1: obj.email,
        name: obj.name,
        location: obj.location,
        mobile: obj.phone
    });
});