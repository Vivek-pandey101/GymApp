import React from "react";

function Button(props) {

    const {text, func} = props;

  return (
      <button onClick={func} className="hero-button">
        <p>{text}</p>
      </button>
  );
}

export default Button;
