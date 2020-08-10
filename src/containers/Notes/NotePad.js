import React, { Component } from "react";
import Input from "../../components/Input/Input";
import classes from "./NotePad.module.css";
import Spinner from "../../components/Spinner/Spinner";
import axios from "../../axios/axios";
import { withRouter } from "react-router-dom";

class NotePad extends Component {
  state = {
    notesForm: {
      note: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Write your notes here!",
        },
      },
      value: "",
    },
    loading: false,
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedNotesForm = {
      ...this.state.notesForm,
    };
    const updatedFormElement = {
      ...this.state.notesForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedNotesForm[inputIdentifier] = updatedFormElement;
    this.setState({ notesForm: updatedNotesForm });
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.notesForm) {
      formData[formElementIdentifier] = this.state.notesForm[formElementIdentifier].value;
    }

    const inputData = {
      userNote: formData
    };

    axios.post("/inputData.json", inputData).then((response) => {
      this.setState({ loading: false });
      this.props.history.push("/notes");
      console.log("Data has been posted!");
    });
  };

  render() {
    let formElementsArray = [];

    for (let key in this.state.notesForm) {
      formElementsArray.push({
        id: key,
        config: this.state.notesForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            type={formElement.config.elementType}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            value={formElement.config.value}
          />
        ))}
        <button>Save</button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.NotePad}>
        <h4>Enter your notes!</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(NotePad);
