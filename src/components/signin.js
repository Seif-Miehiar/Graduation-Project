import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class Signincustomer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      password: ""
    }
  }

  // handleChange(e) {
  //   console.log(e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

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

  onSubmit = (event) => {
    event.preventDefault();
    console.log("wde")
    fetch('http://localhost:8080/sign-in-customer', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res.msg)

      if (res.msg === "ok") {
        console.log("whatttttttttt")
        localStorage.setItem("token", res.token)
        localStorage.setItem("userEmail", this.state.userEmail)

        this.props.history.push('/Shopnew');
      } else {
        console.log("try Again!");
        
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }
  handleUserEmailChange = evt => {
    this.setState({ userEmail: evt.target.value });
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


    const classes = useStyles();

    return (
      <div>
<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>

        </div>
            )
          }
        }

      //   <form onSubmit={this.onSubmit}>
      //   <h1>Login Below!</h1>
      //   <input
      //     type="email"
      //     name="userEmail"
      //     placeholder="Enter Email"
      //     value={this.state.userEmail}
      //     onChange={this.handleInputChange}
      //     required
      //   />
      //   <input
      //     type="password"
      //     name="password"
      //     placeholder="Enter Password"
      //     value={this.state.password}
      //     onChange={this.handleInputChange}
      //     required
      //   /> 
        
      //   <button  onClick={(event) => {this.onSubmit(event)} }>Submit</button>
      // </form>
        
