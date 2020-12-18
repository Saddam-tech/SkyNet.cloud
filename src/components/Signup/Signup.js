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
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

const Signup = (props) => {
  const [isSignup, setIsSignup] = useState(true);
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

  const switchAuthModeHandler = (prevState) => {
    setIsSignup(!isSignup);
  };

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  if (props.loading) {
    form = <Spinner />;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  let authRedirectPath = null;

  if (props.isAuthenticated) {
    authRedirectPath = <Redirect to="/" />;
  }

  // const loginHandler = () => {
  //   props.history.push("/notes");
  // };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {form}
            {authRedirectPath}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2" onClick={switchAuthModeHandler}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userId !== null,
    loading: state.loading, 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
