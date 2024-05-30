import React from "react";

export default function SectionWrapper(props) {
  const { children, header, title, id } = props;

  return (
    <section id={id} className="sectionContainer">
      <div className="sectionContainer-div">
        <p>{header}</p>
        <h2>
          {" "}
          {title[0]} <span> {title[1]} </span> {title[2]}{" "}
        </h2>
      </div>
      <div className="sectionContainer-second-div">{children}</div>
    </section>
  );
}
