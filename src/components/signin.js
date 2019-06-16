import React from "react";
import { NavLink } from 'react-router-dom';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import axios from 'axios';





class Signincustomer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      phoneNumber: "",
      password: ""
    }
  }

  // handleChange(e) {
  //   console.log(e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  clicked() {
    this.setState({
      userEmail: "",
      password: "",
      phoneNumber: "",
      isEnabled: false
    });
  }
  onChange(event){
    const userEmail = event.target.userEmail;
    const phoneNumber = event.target.phoneNumber;
    const password = event.target.password;
    const value = event.target.value;
    this.setState({
      [userEmail]: value,
      [phoneNumber] : value,
      [password] : value
    });
  }


  handleUserEmailChange = evt => {
    this.setState({ email: evt.target.value });
    console.log(this.state.email)
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };
  // const { userEmail, password } = this.state;
  // const isEnabled = email.length > 0 && password.length > 0;

  click(event) {
    event.preventDefault();
    const data = this.state
    fetch('http://localhost:8080/sign-in-customer', {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(state => console.log("siiiiiiiii", state)).catch((err) => console.log("innnnnnn", err));


  }


  render() {
    // const { userEmail, password } = this.state;
    // var isEnabled = userEmail.length > 0 && password.length > 0;



    return (
      <div>
      <div id="logintyle">

        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100 p-b-160 p-t-50">
              <form class="login100-form validate-form">
                <span class="login100-form-title p-b-43">
                  Account Login
					</span>

                <div class="wrap-input100 rs1 validate-input" data-validate="Email is required">
                  <input class="input100"
                    type="text"
                    name="email or Number"
                    value={this.props.userEmail}
                    onChange={this.handleChange}
                    // onChange={this.handleUserEmailChange}
                     />
                  <span class="label-input100">Username</span>
                </div>


                <div class="wrap-input100 rs2 validate-input" data-validate="Password is required">
                  <input class="input100" type="password" name="password" 
                  value={this.props.password}
                  onChange={this.handleChange}

                  />
                  <span class="label-input100">Password</span>
                </div>

                <div class="container-login100-form-btn">
                  <NavLink to="/Shopnew">
                    <button class="login100-form-btn"
                    Click={(event) => {
                        this.click(event)
                      }}
                      onChange={this.handleChange}>
                      
                      Sign in
						</button>
                  </NavLink>
                </div>

                <div class="text-center w-full p-t-23">
                  <a href="/sign-up-customer" class="txt1">
                    Sign Up ?
						</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div></div>
            )
          }
        }
        
        export default Signincustomer;
//         {/* STOOoooooooOOOOOOOOOp */}
//         {/* <body>
//           <div>

//             <center>
//               <div>
//                 <br></br>
//                 <h4>
//                   Sign In Please
//           </h4><br />
//                 Email <input type='text' placeholder='email or Number' name="userEmail" required onChange={this.handleUserEmailChange} /><br></br>
//                 Password <input type='password' placeholder='password' name="password" required onChange={this.handlePasswordChange} /><br></br>
//                 <br></br>
//                 <Link to="/Shopnew">
//                   <button
//                     Click={(event) => {
//                       this.click(event)
//                     }}
//                     onChange={this.handleChange} > login
//               </button>

//                 </Link>
//                 <br></br>

//                 <p>
//                   If you don't have an account <br>
//                   </br>
//                   please <Link to="/Sign-up-customer">Signup </Link>
//                 </p>
//               </div></center>

//           </div>
//         </body>
//       </div> */}
    
    
//       {/* // <div>
//       //   <body>
//       //     <div class="padding-all">
//       //       <div class="header">
//       //         <h1><img src="./images/5.png" alt=" " /> Gaming Login Form</h1>
//       //       </div>

//       //       <div class="design-w3l">
//       //         <div class="mail-form-agile">
//       //           <form action="#" method="post">
//       //             <input type="text" name="name" placeholder="Email  or  email..." required="" onChange={this.handleEmailChange} />
//       //             <input type="password" name="password" class="padding" placeholder="Password" required="" onChange={this.handlePasswordChange} />
//       //             <Link to="/Shop">
//       //               <input type="submit" onChange={this.handleChange} value="submit" />
//       //             </Link>
//       //           </form>
//       //         </div>
//       //         <div class="clear"> </div>
//       //       </div>

//       //       <div class="footer">
//       //         <p>© 2017 Gaming Login form. All Rights Reserved | Design by  <a href="https://w3layouts.com/" >  w3layouts </a></p>
//       //       </div>
//       //     </div>
//       //   </body>
//       // </div>
// //     )
// //   }
// // }
// // export default Signincustomer;
//             // sendData() { */}
//             {/* //   const data = { email: this.state.email, password: this.state.password }
//             //   console.log(data)
//             // }

//             // handleChange(e) { */}
//             {/* //   console.log(e.target.value);
//             //   this.setState({ [e.target.name]: e.target.value });
//             // }


//             // handleChange(e) {
//             //   console.log(e.target.value);
//             //   this.setState({ [e.target.name]: e.target.value });
//             // }


//             // componentDidMount() {
//             //   fetch('https://localhost:8080')
//             //     .then(response => response.json())
//             //     .then(data => this.setState({ data }));
//             // }

//             // handleEmailChange = evt => {
//             //   this.setState({ email: evt.target.value });
//             //   console.log(this.state.email)
//             // };

//             // handlePasswordChange = evt => {
//             //   this.setState({ password: evt.target.value });
//             // };
//             // handleSubmit = () => {
//             //   const { email, password } = this.state;
//             //   alert(`Signed up with email: ${email} password: ${password}`);
//             // };
//             // clicked() {
//             //   this.setState({
//             //     email: "",
//             //     password: "",
//             //     isEnabled: false
//             //   });
//             // } */}