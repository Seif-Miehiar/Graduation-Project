var express = require('express');
// var React = require('react');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { Address, User, Products, Carts } = require("../database/database-models.js");
const pino = require('express-pino-logger')();
const cors = require('cors');
const unirest = require("unirest")
const SECRET_KEY = process.env.SECRET_KEY || 'somesting';
const { db } = require("../database/seq")
console.log(db)
const path = require('path');
// const SECRET_KEY = "random";





//add sql database
const app = express();
const port = 8080
const saltRounds = 10;

//status codes
const SERVER_ERROR = 500;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_SERVER_ERROR = 500;

// app.use(express.static('../build'));
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json())

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(pino);
// app.use(express.static(path.join(__dirname, '')));


app.get('/', function (req, res) {
  res.send("index.html");
});


unirest.get("http://chicken-coop.p.rapidapi.com/games/pc?platform=pc")
  .header("X-RapidAPI-Host", "chicken-coop.p.rapidapi.com")
  .header("X-RapidAPI-Key", "c8261e3e71mshdac602766b8f1bcp1912fdjsnc66655f0414b")
  .end(function (result) {
    console.log(result, result.headers, result.body);
  });

app.post("/addProducts", (req, res, next) => {
  // console.log(req.body);
  const { body } = req;
  const { name, price, image, description, role } = body;
  Products.create({
    name: name,
    price: price,
    image: image,
    description: description,
    role: role
  }).then(() => {
    return res.status(HTTP_CREATED).send('product added, Thank you!')

  }).catch((err) => {
    // console.log(err);
    return res.status(SERVER_ERROR).send(err);
  })
})
//ON HOLD API, FIX FRONT END TO SEND DATA TO ANOTHER API TO RENDER THE DATA ON THE CART COMPONENT!!
app.post("/send-items-to-data", (req, res) => {
  console.log(req.body.itemImage)

 const itemImage = req.body.itemImage;
 const itemName = req.body.itemName;
 const price = req.body.price;
 const userEmail = req.body.userEmail


  Carts.create({
    
    itemName: itemName,
    itemImage: itemImage,
    quantity: null,
    itemDescription: null,
    price: price,
    availableQuantity: null,
    userEmail: userEmail
  }).then(() => {
    return res.status(HTTP_CREATED).send('product added, Thank you!')
  }).catch((err) => {
    console.log(err);
    return res.status(SERVER_ERROR).send(err);
  })
})

app.get("/render-cart", (req, res) => {
  const userEmail = req.query.userEmail
  console.log("oooooooooo\n\n\n\n", req.query.userEmail , "\n\n\n\noooooooooo")
  Carts.findAll({where:{userEmail : userEmail}}).then((item) => {
    return res.send(item);
  }).catch((err) => {
    console.log(err);
    return res.send(err);
  })
})


app.get('/getproducts', function (req, res) {
  Products.findAll({}).then((prod) => {
    return res.send(prod);
  }).catch((err) => {
    // console.log("nnnnnnnnnnnn\n\n\n\n",err, "\n\n\n\n\noooooooooooooooooooo")
    return res.send(err);
  })
});

//POSTING TO CART!
// app.post("/cart", (req, res) => {
//   let cartProducts = [];
//   let id = null;
//   let bodyCart = JSON.parse(req.body.bodyCart);

//   if( !bodyCart ) return res.json(cartProducts);
//   for( let i = 0; i < cartProducts.length; i++ ) {
//     console.log(cartProducts);
//     id = Cart.cartProducts[i].itemId.toString();
//     if ( cartProducts.hasOwnProperty(id)) {
//       Cart.cartProducts[i].quantity = cartProducts[id]
//       cartProducts.push(Cart.cartProducts[i])
//     }
//   }
//   return res.json(cartProducts);
// })
//get products from database
//generates the list of products in the cart
// app.post('/api/products', (req, res) => { 
//   let products = [], id = null;
//   let cart = JSON.parse(req.body.cart);

//   if (!cart) return res.json(products)
//   for (let i = 0; i < data.products.length; i++) {
//     console.log(products)
//     id = data.products[i].id.toString();
//     if (cart.hasOwnProperty(id)) {
//       data.products[i].qty = cart[id]
//       products.push(data.products[i]);
//     }
//   }
//   return res.json(products);
// });




//sign up for admin(dispatch)
app.post('/sign-up-customer', (req, res, next) => {
  console.log(req.body);
  const { body } = req;
  const { username, userEmail, phonenumber, password } = body

  const hashedpass = bcrypt.hashSync(password, saltRounds);

  User.create({
    userEmail: userEmail,
    username: username,
    phonenumber: phonenumber,
    password: hashedpass
  }).then(() => {
    return res.status(HTTP_CREATED).send('Sign up successful')
  }).catch((err) => {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(HTTP_BAD_REQUEST).send('This Email is already in use')
    }
    return res.status(HTTP_SERVER_ERROR).send('Server Error')
  })
});

app.post("/sign-in-customer", function (req, res) {
  const userEmail = req.body.userEmail;
  const password = req.body.password;
  console.log(password)
  // const newHashedPassword = bcrypt.hashSync(password, saltRounds);
  User.findOne({ where: { userEmail: userEmail } }).then(function (user) {
    if (!user) {
      return res.status(HTTP_UNAUTHORIZED).send("Please Sign Up First")
    }
    if (user) {
      bcrypt.compare(password, user.password).then(function (isMatch) {
        console.log(password, "\n\n\n\n\n\n", user.password, "\n\n\n\n\n\n")
        if (isMatch) {
          console.log("hiiiiiiiiii")
          const token = jwt.sign({
            userEmail: userEmail
          }, SECRET_KEY, { expiresIn: 5000 })
          console.log(" YOU ARE IN, THANKS!")
          return res.send({ token: token, msg: "ok" })
        } else {
          return res.status(HTTP_UNAUTHORIZED).send({ msg: 'Wrong password' });
        }
      }).catch(function (err) {
        res.status(501).send({ msg: "not ok" });
        console.log(err, "Please Sign up first");

      })
    }
  })
})

app.post("/register-address", (req, res) => {
  console.log(req.body);
  const area = req.body.area;
  const streetName = req.body.streetName;
  const buildingNumberr = req.body.buildingNumberr;
  const phoneNumber = req.body.phoneNumber;

  Address.create({
    area: area,
    streetName: streetName,
    buildingNumberr: buildingNumberr,
    phoneNumber: phoneNumber
  }).then((tt) => {
    console.log('Done, You are succesfully sign up :D');
    return res.send({ done: " succesful", tt: tt });
  }).catch((err) => {
    console.log(err, "\n\n\n\n\n\n\nhhhhhhhhhhhhh");
    return res.status(SERVER_ERROR).send({ error: 'server error' });
  });


});




app.get('/checkToken', function (req, res) {
  res.sendStatus(200);
});

const server = app.listen(process.env.PORT || port, () => {
  const port = server.address().port;
  console.log('listening on port ' + port + ' Happy Hacking!')
});
