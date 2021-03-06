import React, { Component } from "react";
import Input from "../../components/Input/Input";
import classes from "./NotePad.module.css";
import Spinner2 from "../../components/Spinner/Spinner2";
import axios from "../../util/axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import Bounce from 'react-reveal/Bounce';

class NotePad extends Component {
  state = {
    notesForm: {
      note: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Type your notes here!",
          name: "textarea",
          label: "Type your notes here",
          id: "textarea",
          autoComplete: "textarea",
        },
      },
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
    this.props.loadingTrue();
    this.props.onFalse();
    const formData = {};
    for (let formElementIdentifier in this.state.notesForm) {
      formData[formElementIdentifier] = this.state.notesForm[
        formElementIdentifier
      ].value;
    }

    const inputData = {
      userNote: formData,
    };

    axios.post("/inputData.json", inputData).then((response) => {
      this.props.loadingFalse();
      this.props.onTrue();
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

    if (this.props.loading) {
      form = <Spinner2 />;
    }

    return (
      <Bounce>
      <div className={classes.NotePad}>
        <h4>Enter your notes!</h4>
        {form}
      </div>
      </Bounce>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    plus: state.plus,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFalse: () => dispatch(actions.minus()),
    onTrue: () => dispatch(actions.plus()),
    loadingTrue: () => dispatch(actions.loadingTrue()),
    loadingFalse: () => dispatch(actions.loadingFalse()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NotePad));
