
import React from "react";
import './../styles/App.css';

const App = () => {
  

        {/* Do not remove the main div */}
        const weather = { temperature: 25, conditions: "Sunny" };
  const threshold = 20;

  // Determine color based on temperature threshold
  const temperatureColor = weather.temperature > threshold ? 'rgb(255, 0, 0)' : 'blue';

  return (
    <span>
      <p style={{ color: temperatureColor }}>temperature: {weather.temperature}</p>
      <p style={{ color: temperatureColor }}>conditions: {weather.conditions}</p>
    </span>
  )
}

export default App
