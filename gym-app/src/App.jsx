import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import generateWorkout from "./utils/functions";

function App() {
  const [workout, setWrkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  const updateWorkout = () => {
    if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goals});
    setWrkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className="container">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        updateWorkout = {updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
