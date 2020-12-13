import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "../../assets/background.png";
import GirlPicture from "../../assets/note-svg.svg";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import Twitter from "../../assets/twitter.png";
import Input from "../../components/Input/Input";
import { updateObject } from "../../shared/utility";
import Spinner from "../../components/Spinner/Spinner";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import { Redirect } from "react-router-dom";

const Layout = (props) => {
  const [isSignup, setIsSignup] = useState(true);
  const [loading, setIsLoading] = useState(false);
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Email",
      },
      value: "",
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "password",
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

  if (loading) {
    form = <Spinner />;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  let authRedirectPath = null;

  if (props.isAuthenticated) {
    authRedirectPath = <Redirect to={props.authRedirectPath} />
  };

  // const loginHandler = () => {
  //   props.history.push("/notes");
  // };

  return (
    <Container>
      <h2>SkyNetCloud</h2>
      <form>
        <label>Sign In</label>
        {form}
        {authRedirectPath}
        <div className="buttons">
          <Button variant="contained" color="primary" onClick={submitHandler}>
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={switchAuthModeHandler}
          >
            {isSignup ? "SignIn" : "SignUp"}
          </Button>
        </div>

        <div className="logos">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Google} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </form>

      <div className="content">
        <span>Keep your notes safe!</span>
        <img src={GirlPicture} alt="" />
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    authRedirectPath: state.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Background});
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  box-shadow: 0, 2px, 3px, #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 428px) {
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 200px;
    height: auto;
    color: white;
  }

  form {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    left: 20px;

    .logos {
      position: absolute;
      bottom: 50px;
      img {
        margin-left: 15px;
      }
    }

    label {
      font-size: 20px;
      color: white;
    }

    input {
      width: 250px;
      padding: 0.5em;
      margin-bottom: 5px;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      button {
        padding: 0.8em;
        border: inherit;
        border-radius: 3px;
        box-shadow: 10px 10px 5px rgba(108, 99, 255, 0.49);
        animation: upanddown 1.2s infinite linear;
        position: relative;

        @keyframes upanddown {
          0% {
            bottom: 0px;
          }
          25% {
            bottom: -5px;
          }
          50% {
            bottom: -5px;
          }
          75% {
            bottom: 0px;
          }
        }
      }
    }
  }

  .content {
    width: 100%;

    @media (max-width: 428px) {
      position: relative;
      margin-bottom: 15px;
    }

    span {
      font-family: "Indie Flower", cursive;
      font-size: 35px;
      color: white;
      font-weight: bold;
    }

    img {
      width: 70%;
      height: auto;
      position: relative;
      margin-left: 20px;
    }
  }
`;
