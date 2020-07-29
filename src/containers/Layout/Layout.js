import React, { useEffect } from "react";
import styled from "styled-components";
import { browserHistory } from "react-router-dom";

import Background from "../../assets/background.png";
import GirlPicture from "../../assets/note-svg.svg";
import Brand from "../../assets/our-logo.png";

import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import Twitter from "../../assets/twitter.png";

const Layout = () => {
  // useEffect((props) => {
  //   console.log(props);
  // });

  const loginHandler = () => {
    // browserHistory.push("/notes");
  };

  return (
    <Container>
      <h2>SkyNetCloud</h2>
      <form onSubmit={loginHandler}>
        <label>Sign In</label>
        <input type="text" />
        <input type="text" />
        <button type="submit">Sign In</button>

        <div className="logos">
          <img src={Facebook} />
          <img src={Instagram} />
          <img src={Google} />
          <img src={Twitter} />
        </div>
      </form>

      <div className="content">
        <span>Keep your notes safe!</span>
        <img src={GirlPicture} />
      </div>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Background});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;

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

  .content {
    width: 100%;

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
