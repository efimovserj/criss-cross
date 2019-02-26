import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import Field from "./components/Field";
import "./styles/App.css";
import "./styles/bootstrap-reboot.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Field />
        </div>
      </Provider>
    );
  }
}

export default App;
