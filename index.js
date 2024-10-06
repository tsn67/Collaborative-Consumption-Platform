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
var isLogin = false;

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
  isLogin = true;
  res.render("profile1.ejs");
});

app.get("/login-submi1", (req, res) => {
    res.render("profile1.ejs");
});

var obj = null;

app.get("/profile-submit", (req, res) => {
   if(req.query.data) {
    obj = JSON.parse(req.query.data);
    console.log(req.query.data);
   }
   
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

app.get("/filter", (req, res) => {
    res.render("bookchoose.ejs")
}); 

app.get("/filter-submit", (req, res) => {
    var obj = {
      select: ["Education", "Romance", "Science fiction"]
    }
    
   

    if(req.query.author) {
      class1.push(req.query.title);
      author1.push(req.query.author);
      price1.push(req.query.price);  
    }

    
    res.render("fictionpage.ejs", {
        list: obj.select,
        classes: {
            one: class1,
            two: class2,
            three: class3
        },
        authors: {
            one: author1,
            two: author2,
            three: author3
        },
        prices: {
            one: price1,
            two: price2,
            three: price3
        },
        imgs: {
            one: img1,
            two: img2,
            three: img3
        }

    });

});

var class1 = ["FLAT", "Education for better future", "Wings of fire"];
var author1 = ["Hannon", "Macabae", "APJ Abdul Kalam"];
var price1 = [120, 220, 400];

var class2 = ["It ends with us", "Love or Obsession", "A touch of Eternity"];
var author2 = ["William Armstrong", "Hia Mehta", "Durjoy Datta"];
var price2 = [170, 620, 200];

var class3 = ["Rocketry", "Space", "Luna-11"];
var author3 = ["Dr Ram M", "Jhon Martin", "Maveyo Kalo"];
var price3 = [570, 90, 300];

var img1 = ["./images/book1.jpg", "./images/book2.jpg", "./images/wings.jpg"];
var img3 = ["./images/atomic.jpg", "./images/bookTemp.jpg", "./images/dune.jpg"];
var img2 = ["./images/itends.jpg", "./images/loveor.jpg", "./images/atouch.jpg"];

app.get("/buy", (req, res)=> {
    var price = req.query.money;
    var bookName = req.query.name;

    res.render("pay.ejs", {
        money: price,
        name: bookName,
    });
});

app.get("/sell", (req, res) => {
    res.render("sell.ejs");
});

app.get("/donate", (req, res) => {
    res.render("partywear.ejs");
});