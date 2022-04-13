import React from "react";
//import './App.css';className='App'
import { Outlet, Link } from "react-router-dom";

import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "../redux/actioncreator.js";

function Redux(props) {
  return (
    <div>
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      <Outlet />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
