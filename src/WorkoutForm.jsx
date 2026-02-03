import { useState } from "react";
import BurnSummary from './BurnSummary.jsx'
export default 

function WorkoutForm({ onAddworkout}) {
    const [ExerciseName, setExerciseName] = useState("");
    const [Duration, setDuration] = useState();
    const [CaloriesPerMinute, setCaloriesPerMinute] = useState();
    const ClearLog = () => {
        setExerciseName(" ");
        setDuration(0);
        setCaloriesPerMinute(0);
    }


    return (
        <div>
            <h3>Exercise Name</h3>
            <input type="text" placeholder="Enter exercise name" 
            value={ExerciseName} onChange={(e) => setExerciseName(e.target.value)} />
            <h3>Duration</h3>
            <input type="number" placeholder="Enter duration in minutes" 
            value={Duration} onChange={(e) => setDuration(Number(e.target.value))} />
            <h3>Calories Per Minute</h3>
            <input type="number" placeholder="Enter calories burned per minute" 
            value={CaloriesPerMinute} onChange={(e) => setCaloriesPerMinute(Number(e.target.value))} />
            <button onClick={ClearLog}>ClearLog </button>
        </div>
    )
}
