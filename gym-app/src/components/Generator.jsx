import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="headerContainer">
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p className="headerPara">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    poison,
    setPoison,
    muscles,
    setMuscles,
    goals,
    setGoals,
    updateWorkout,
  } = props;

  let [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const updateMuscles = (muscleGroup) => {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
    }
    if (muscles.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }
    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  };

  return (
    <SectionWrapper
      id = {'generate'}
      header={"Generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to undure."}
      />
      <div className="generatorCon">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={type === poison ? "generatorConBtn" : ""}
              key={typeIndex}
            >
              <p>{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="generatorConTwo">
        <button onClick={handleToggle}>
          <p>
            {muscles.length == 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="showModalContainer">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  className={
                    muscles.includes(muscleGroup) ? "muscleGroupBtn" : ""
                  }
                  key={muscleGroupIndex}
                >
                  <p className="muscleGroup">
                    {" "}
                    {muscleGroup.replaceAll("_", " ")}{" "}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Became Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="generatorConThree">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              className={scheme === goals ? "schemeBtn" : ""}
            >
              <p>{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text="Formulate"></Button>
    </SectionWrapper>
  );
}
