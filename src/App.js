import React from 'react';
// import mysql from "mysql2";
import {
  BrowserRouter, Route
  // ,Link 
} from 'react-router-dom'
// import './App.css';
// import "../src/web";

import Welcomepage from './components/welcomepage';
import Cardlist from './components/cardlist';
// import Header from './components/header';
import Shoppage from './components/shop';
// import Footer from "./components/footer";
import Signincustomer from "./components/signin";
import Shopnew from "./components/shopnew";
import Signupcustomer from './components/signup';
import PrivateRoute from "./components/privaterouter";
import Shoppingcart from "./components/shoppingcart"

// const connection = mysql.createConnection({
//   host: 'sql7.freemysqlhosting.net',
//   user:'root',
//   password:'8h14R5EfuH',//password of your mysql db
//   database:'db'
//   });
//   connection.connect(function(err){
//     (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
//     });

  // connection.connect(function(err){
  //   (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
  //   });

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (


      // <form> <center>




      //   {/* <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Hello Iplay
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>  */}

      //   {/* <header>
      //     Hii people in HEADER
      //   </header> */}
      // <div>
      //   <Welcomepage />
      // </div>

      <div>
        <BrowserRouter>
          <Route exact path="/welcomepage" component={Welcomepage} />
          <Route exact path="/" component={Welcomepage} />
          <Route exact path="/Shop" component={Shoppage} />
          <Route exact path="/Sign-in-customer" component={Signincustomer} />
          <Route exact path="/sign-up-customer" component={Signupcustomer} />
          <PrivateRoute exact path="/Shopnew" component={Shopnew} />
          <PrivateRoute exact path="/Shoppingcart" component={Shoppingcart} />
          <PrivateRoute exact path="/cardlist" component={Cardlist} />
        </BrowserRouter>
        
      </div>

      //   {/* <div>
      //     <footer>
      //       i am a footer
      // </footer>
      //   </div> */}

      //   </center>
      // </form>

    );
  }
}


export default App;
