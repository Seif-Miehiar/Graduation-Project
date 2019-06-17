var express = require('express');
// var React = require('react');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { Address, User } = require("../database/database-models.js");
const pino = require('express-pino-logger')();
const path = require('path');
const cors = require('cors');
// const SECRET_KEY = "random";
const SECRET_KEY = process.env.SECRET_KEY || 'somesting';



//add sql database
const app = express();
const port = process.env.PORT || 8080
const saltRounds = 10;

//status codes
// const UNAUTHORIZED_STATUS = 401;
const SERVER_ERROR = 500;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_SERVER_ERROR = 500;

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

app.use(cors())
// app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(pino);

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

app.post("/sign-in-customer", function(req, res) {
  const userEmail = req.body.userEmail;
  const password = req.body.password;
  console.log(password)
  // const newHashedPassword = bcrypt.hashSync(password, saltRounds);
  
  
  User.findOne({where: {userEmail: userEmail}}).then(function(user) {
    if(!user){
      return res.status(HTTP_UNAUTHORIZED).send("Please Sign Up First")
    }
    if(user){
      bcrypt.compare(password, user.password).then(function(isMatch){
        console.log(password, "\n\n\n\n\n\n", user.password, "\n\n\n\n\n\n" )
        if(isMatch) {
          console.log("hiiiiiiiiii")
          const token = jwt.sign({
            userEmail:userEmail
          }, SECRET_KEY, { expiresIn: 5000})
          console.log(" YOU ARE IN, THANKS!")
          return res.send({token: token})
        } else {
          return res.status(HTTP_UNAUTHORIZED).send({error: 'Wrong password'});
        }
      }).catch(function(err){
        res.status(501).send(err);
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
    console.log(err);
    return res.status(SERVER_ERROR).send({ error: 'server error' });
  });


});

app.listen(port, () => {
  console.log('listening on port ' + port + ' Happy Hacking!')
});
// if (data.email) {
//   console.log("Email already exists!");
//   alert('Email already exists!');
//   console.error('Please Change your email address, Thank you!');
//   return res.send('Email already in use from another customer, Please sign up with another email address.')

// } else if (data.phonenumber) {
//   console.log("phone numbar already exists!");
//   alert('phone numbar already exists!');
//   console.error('Please Change your phonen umbar, Thank you!');
//   return res.send('phone numbar already in use for another customer, Please sign up with another phone numbar.')

// } else if (data.email && data.phonenumber) {
//   console.log("Please Change your email and phone number to signup");
//   alert('Please Change your email and phone number to signup');
//   console.error('Email & Phone number are already used, Please change them to sign up');
//   return res.send('Email & Phone number are used for another customer please change them, Thank you!');

// } 


// app.get('/', function (req, res) {
//   res.send('Welcome to thesis MVP')
// });

// User.findOne({ userEmail: userEmail, phonenumber: phonenumber }).then((data) => {
//   console.log(data)
//   if (data.userEmail) {
//     console.log("Email already exists!");
//     console.error('Please Change your email address, Thank you!');
//     return res.send('Email already in use from another customer, Please sign up with another email address.')

//   } else if (data.phonenumber) {
//     console.log("phone numbar already exists!");
//     console.error('Please Change your phonen umbar, Thank you!');
//     return res.send('phone numbar already in use for another customer, Please sign up with another phone numbar.')

//   } else if (data.userEmail && data.phonenumber) {
//     console.log("Please Change your email and phone number to signup");
//     console.error('Email & Phone number are already used, Please change them to sign up');
//     return res.send('Email & Phone number are used for another customer please change them, Thank you!');

// } else {
//   User.create({
//     username: username,
//     userEmail: userEmail,
//     phonenumber: phonenumber,
//     password: hashedpass
//   }).then((tt) => {
//     console.log('Done, You are succesfully sign up :D');
//     return res.send({ done: " succesful", tt: tt });
//   }).catch((err) => {
//     console.log(err);
//     return res.status(SERVER_ERROR).send({ error: 'server error' });
//   });
// }


// });
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


  // const username = req.body.username;
  // const userEmail = req.body.userEmail;
  // const phonenumber = req.body.phonenumber;
  // const password = req.body.password;
  // if (!username) {
  //   return res.end({
  //     success: false,
  //     message: "Error : First Name Can't Be Blank."
  //   })
  // }
  // if (!userEmail) {
  //   return res.end({
  //     success: false,
  //     message: "Error : Email Can't Be Blank."
  //   })
  // }
  // if (!phonenumber) {
  //   return res.end({
  //     success: false,
  //     message: "Error : Phone Number Can't Be Blank."
  //   })
  // }
  // if (!password) {
  //   return res.end({
  //     success: false,
  //     message: "Error : password Can't Be Blank."
  //   })
  // }
  // userEmail = userEmail.toLowerCase();


// app.post("/sign-in-customer", function(req, res, next) {
//   const userEmail = req.body.userEmail;
//   const password = req.body.password;
// // console.log(userEmail)
// console.log(password)
//     const newPass = bcrypt.hashSync(password, saltRounds)

//   User.findOne({
//     Where:{
//       userEmail: userEmail
//     }
//   }).then(function(user){
//     if(!user.userEmail){
//       return res.status(HTTP_UNAUTHORIZED).send({error: 'Please sign up'}); 
//     }
//     const hashedPass = user.password;
//     console.log(user.userEmail ,"lllllllllllllllllllllll\n", hashedPass, "\nkkkkkkkkkkkkkk", user, "\nyyyyyyyyyyyyyy", userEmail)
//     bcrypt.compare(newPass, hashedPass).then(function(isMatch){
//       if(isMatch){
//         console.log("\n qqqqqqqqqqqqqqqqqq \n", isMatch, "\n fffffffffffffffff \n")
//         const token = jwt.sign({
//           userEmail: user.userEmail
//         },{
//           expiresIn: 7500
//         })
//         return res.send({token: token});
//       } else {
//         return res.status(401).send({
//           error: "Wrong Password!"
//         })
//       }
//     }).catch(function(err){
//       res.status(501).send(err);
//       console.log("Please Sign up first");
//     })
//   })
// })
// Sign In Admin (dispatch)
// app.post('/sign-in-customer', (req, res) => {
//   const userEmail = req.body.userEmail;
//   const password = req.body.password;

// console.log(userEmail, password)
//   User.findOne({
//     where: {
//       userEmail: userEmail,
//       password: password
//     }
//   }).then(function(user) {
//     console.log(user)
//     if (!user) {
//       console.log("gggggggggggggggggg",User.user)
//       return res.status(HTTP_UNAUTHORIZED).send({ error: 'Please sign up' });

//     }
//     const passcheckup = user.password;
//     bcrypt.compare(password, passcheckup).then((isMatch) => {
//       if(isMatch) {
//         const token = jwt.sign({
//           userEmail: user.userEmail
//         }, { expiresIn: 7500});
//         return res.send({
//           token: token
//         });
//       } else {
//         return res.status(HTTP_UNAUTHORIZED).send({error: 'Wrong password'});
//       }
//     })

//   })

// })


//   const emailorphonenumber = req.body.userEmail || req.body.phonenumber;
//   const password = req.body.password;

//   User.findOne({ emailorphonenumber: emailorphonenumber }).then((data) => {
//     if (!data.emailorphonenumber) {
//       console.log("You Email is not registered yet, Please sign up first");
//       console.error('You Email is not registered yet, Please sign up first');
//       return res.send('You Email is not registered yet, Please sign up first');
//     } else if (!data.req.body.phonenumber) {
//       console.log("Your phone number is not registered, Please Sign up first");
//       console.error('Your phone number is not registered, Please Sign up first');
//       return res.send('Your phone number is not registered, Please Sign up first');

//     }
//     const passcheckup = data.password;
//     bcrypt.compare(password, passcheckup).then((ismatch) => {
//       if (ismatch) {
//         const token = jwt.sign({ email: data.emailorphonenumber }, /*Secret Key */ { expiresin: '1h' });
//         return res.send({ token: token });
//       } else {
//         return res.status(UNAUTHORIZED_STATUS).send({ error: "Password is incorrect" });
//       }
//     });
//   });

// });
