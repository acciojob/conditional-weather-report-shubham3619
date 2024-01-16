
import React from "react";
import './../styles/App.css';

const App = () => {
  

        {/* Do not remove the main div */}
        const weather = { temperature: 25, conditions: "Sunny" };
  const threshold = 20;

  // Determine color based on temperature threshold
  const temperatureColor = weather.temperature > threshold ? 'rgb(255, 0, 0)' : 'blue';

  return (
    <span style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ccc', maxWidth: '300px', margin: 'auto' }}>
      <h2>Weather Report</h2>
      <p style={{ color: temperatureColor }}>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
    </span>
  )
}

export default App
