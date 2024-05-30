import React, { useState } from "react";

export default function ExerciseCard(props) {
  const { exercise, i } = props;

  const [setsCompleted, setSetsComplete] = useState(0);

  function handleSetIncrement() {
    setSetsComplete((setsCompleted + 1) % 6);
  }

  return (
    <div className="ExerciseCardContainer">
      <div className="exerciseInnerContainer">
        <h4 className="exerciseInnerContainerHeading">0{i + 1}</h4>
        <h2 className="exerciseInnerContainerHeadingTwo">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="exerciseInnerContainerPara">{exercise.type}</p>
      </div>
      <div
        className="ExerciseCardContainerDiv"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3 className="ExerciseCardContainerDivThree">Muscle Groups</h3>
        <p style={{ textTransform: "capitalize" }}>
          {exercise.muscles.join(" & ")}
        </p>
      </div>

      <div className=" ExerciseCardContainerSecondDiv">
        {exercise.description.split("___").map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>

      <div className="ExerciseCardContainerAnotherDiv">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div key={info} className="resultDiv">
              <h3 className="resultHeading">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>

              <p style={{ fontWeight: "500" }}>{exercise[info]}</p>
            </div>
          );
        })}
        <button onClick={handleSetIncrement} className="resultButton">
          <h3 className="resultButtonHeading">Sets completed</h3>
          <p style={{ fontWeight: "500" }}>{setsCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
}
