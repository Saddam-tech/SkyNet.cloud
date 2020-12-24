import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./store/reducers/Layout";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));