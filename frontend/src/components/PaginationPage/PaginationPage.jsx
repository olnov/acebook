/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PaginationPage = ({ number = "1", stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`pagination-page state-0-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="element">{number}</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
        };
    }
  }

  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
        };
    }
  }

  if (state.state === "current") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "current-hover",
        };
    }
  }

  if (state.state === "current-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "current",
        };
    }
  }

  return state;
}

PaginationPage.propTypes = {
  number: PropTypes.string,
  stateProp: PropTypes.oneOf(["current", "hover", "current-hover", "default"]),
};
