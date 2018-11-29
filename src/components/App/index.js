import React from "react";
import { connect } from "react-redux";

import "./style.css";

const App = props => {
  return (
    <div className="App">
      <h1>{props.message}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.main.testText
});

export default connect(mapStateToProps)(App);
