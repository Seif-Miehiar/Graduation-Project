import React from "react";
import {
  Link 
} from 'react-router-dom'



import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  "container": {
    "display": 'flex',
    "flexWrap": 'wrap',
  },
  "TextField": {
    "marginLeft": theme.spacing.unit,
    "marginRight": theme.spacing.unit,
  },
  "dense": {
    "marginTop": 16,
  },
  "menu": {
    "width": 200,
  },
});

class Signupcustomer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);

    this.state = {
      username: "",
      userEmail: "",
      phoneNumber: "",
      password: ""

    }

  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  onChange(event){
    const username = event.target.username;
    const userEmail = event.target.userEmail;
    const phoneNumber = event.target.phoneNumber;
    const password = event.target.password;
    const value = event.target.value;
    this.setState({
      [username]: value,
      [userEmail]: value,
      [phoneNumber] : value,
      [password] : value
    });
  }

  click(event) {
    event.preventDefault();
    const data = this.state
    fetch('http://localhost:8080/sign-up-customer', {
      method: 'post',
      body: JSON.stringify(data),
      headers: { 
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(state => console.log("yoooo",state)).catch((err)=> console.log("nooooo",err));
    

  }
  
//   
render() {
  const { classes } = this.props;
  return (
    <div className="form-style-7">

      <form >
        <body> <center>
          <input
            id="filled-search"
            label="username"

            type="text"
            placeholder="Username"
            className={classes.TextField}
            margin="normal"
            variant="filled"
            onChange={this.handleChange}
            value={this.props.username}
            // handleChange={this.handleChange.bind(this)}

            name="username"
          />
          <br />

          <input
            id="filled-search"
            label="userEmail"

            type="text"
            placeholder="Email"
            className={classes.TextField}
            margin="normal"
            variant="filled"
            onChange={this.handleChange}
            value={this.props.userEmail}
            name="userEmail"
          />
          <br />
          <input
            id="filled-search"
            label="PhoneNumber"
            className={classes.TextField}
            type="text"
            placeholder="Phone-Number"
            name="phoneNumber"
            autoComplete="PhoneNumber"
            margin="normal"
            variant="filled"
            onChange={this.handleChange}
            value={this.props.phoneNumber}
          />
          <br />
          <input
            id="filled-search"
            label="password"
            className={classes.TextField}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
            onChange={this.handleChange}
            value={this.props.password}
            name="password"
          />
          <br />
          
          <button variant="contained" color="primary" type="submit" 
          // onClick={(event) => {this.click(event)}
          onClick={(event) => {
            this.click(event)
            }
           }><Link to="/Sign-in-customer">sign Up</Link></button>
           
        </center>
        </body>
      </form>
    </div>
  )
}
}
export default withStyles(styles)(Signupcustomer);
// fetch('/Login', {
//     method: 'post',
//     body: JSON.stringify({ data }),
//       headers: { "Content-Type": "application/json" }
//   }).then((res) => {
//         localStorage.setItem('name', this.state.name)
//         console.log("thanks for sign up !!")
//         return res.text();
//       })
// // }
// fetch("/sign-up-customer")
//   .then(function (res) {
//     return res, json({data})
//   })
//   .then(function (data) {
//     Console.log(data);
//   }).catch(function (err) {
//     console.log(err)
//   })

