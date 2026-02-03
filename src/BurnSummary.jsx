import React from 'react';

function BurnSummary ({ exerciseName, duration, caloriesPerMinute }) {
    const totalCaloriesBurned = duration * caloriesPerMinute;
    return (
        <div>
            <h2>Burn Summary</h2>   
            <p>Exercise Name: {exerciseName}</p>
            <p>Duration: {duration} minutes</p>
            <p>Calories Per Minute: {caloriesPerMinute}</p>
            <h3>Total Calories Burned: {totalCaloriesBurned}</h3>
        </div>
    )
}

export default BurnSummary