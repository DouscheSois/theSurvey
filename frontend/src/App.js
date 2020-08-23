import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import SurveyForm from "./components/SurveyForm";
import Footnote from "./components/Footnote";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={SurveyForm} />
          <Footnote />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
