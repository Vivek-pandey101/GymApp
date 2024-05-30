import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="hero-tags">
        <p>IT'S TIME TO GET</p>
        <h1 className="hero-text-custom">
          Swole<span>normous</span>
        </h1>
      </div>
      <p className="hero-para">
        I hereby acknowldegment that I may became{" "}
        <span>unbelievably swolenormous</span> and accept all risks of becoming
        the local <span> mass montrosity</span>, afflicted with severe body
        dismorphia, unable to fit through doors.
      </p>
      <Button func = {() => {
        window.location.href = '#generate'
      }} text="Accept & Begin"></Button>
    </div>
  );
}
