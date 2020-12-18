import React, { useState } from "react"; 
import Input from "../../components/Input/Input";
import { updateObject } from "../../shared/utility";
import Spinner from "../../components/Spinner/Spinner";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import { Redirect } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Layout = (props) => {
  const [isSignup, setIsSignup] = useState(false); 
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
      },
      value: "",
    },
    password: {
      elementType: "password",
      elementConfig: {
        type: "password",
      },
      value: "",
    },
  });

  const inputChangedHandler = (event, elementId) => {
    const updatedControls = updateObject(authForm, {
      [elementId]: updateObject(authForm[elementId], {
        value: event.target.value,
      }),
    });
    setAuthForm(updatedControls);
  };

  const formElementsArray = [];

  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  const switchAuthModeHandler = (prevState) => {
    setIsSignup(!isSignup);
  };

  if (props.loading) {
    form = <Spinner />;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  let authRedirectPath = null;

  if (props.isAuthenticated) {
    authRedirectPath = <Redirect to={props.authRedirectPath} />;
  }

  // const loginHandler = () => {
  //   props.history.push("/notes");
  // };

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "130vh",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            {form}
            {authRedirectPath}
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
              onClick={submitHandler}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/Signup'  variant="body2" onClick={switchAuthModeHandler}>
                  {"Don't have an account? Sign Up"}
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  <Link color="inherit" href='https://www.instagram.com/salokhiddeenov727/'>
                     Contact me
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Box mt={5}></Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    authRedirectPath: state.authRedirectPath,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: url(${Background});
//   background-position: center;
//   background-size: cover;
//   box-sizing: border-box;
//   box-shadow: 0, 2px, 3px, #ccc;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   @media (max-width: 428px) {
//     flex-direction: column;
//     justify-content: center;
//   }

//   h2 {
//     position: absolute;
//     top: 20px;
//     left: 20px;
//     width: 200px;
//     height: auto;
//     color: white;
//   }

//   form {
//     width: 100%;
//     display: flex;
//     flex-flow: column;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 100px;
//     left: 20px;

//     .logos {
//       position: absolute;
//       bottom: 50px;
//       img {
//         margin-left: 15px;
//       }
//     }

//     label {
//       font-size: 20px;
//       color: white;
//     }

//     input {
//       width: 250px;
//       padding: 0.5em;
//       margin-bottom: 5px;
//     }
//     .buttons {
//       display: flex;
//       flex-direction: row;
//       button {
//         padding: 0.8em;
//         border: inherit;
//         border-radius: 3px;
//         box-shadow: 10px 10px 5px rgba(108, 99, 255, 0.49);
//         animation: upanddown 1.2s infinite linear;
//         position: relative;

//         @keyframes upanddown {
//           0% {
//             bottom: 0px;
//           }
//           25% {
//             bottom: -5px;
//           }
//           50% {
//             bottom: -5px;
//           }
//           75% {
//             bottom: 0px;
//           }
//         }
//       }
//     }
//   }

//   .content {
//     width: 100%;

//     @media (max-width: 428px) {
//       position: relative;
//       margin-bottom: 15px;
//     }

//     span {
//       font-family: "Indie Flower", cursive;
//       font-size: 35px;
//       color: white;
//       font-weight: bold;
//     }

//     img {
//       width: 70%;
//       height: auto;
//       position: relative;
//       margin-left: 20px;
//     }
//   }
// `;
