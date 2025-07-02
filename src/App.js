// Import React and useState hook
import React, { useState } from 'react'
import './conponents/myCounter.css';

export default function App() {
   // Initialize the counter state with default value 0
    const [count, setCount] = useState(0);
    // Define the upper limit for the counter
    const limit = 10;
  
    // Function to handle increasing the counter
    const handleIncrease = () => {
      if (count < limit) {
        setCount(prev => prev + 1); // Increment the counter
      }
    };
  
    // Function to handle decreasing the counter
    const handleDecrease = () => {
      if (count > 0) {
        setCount(prev => prev - 1); // Decrement the counter
      }
    };
  return (
    <div className='app-container'>
      <h1>My Counter App</h1>
      {/* Render the MyCounter component */}
      {/* This component manages its own state and functionality */}
      <p>Click the buttons to increase or decrease the counter.</p>
      <p>Counter will not go below 0 or above 10.</p>
       <div className="counter-container">
      {/* Title */}
      <h2 className="counter-title">My Counter</h2>

      {/* Display current counter value */}
      <div className="count-display">{count}</div>

      {/* Show warning message when limit is reached */}
      {count === limit && <p className="limit-message">You've reached the limit!</p>}

      {/* Buttons to increase or decrease the count */}
      <div className="button-group">
        <button className="btn" onClick={handleIncrease}>Increase</button>
        <button className="btn" onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
      {/* Footer or additional content can go here */}
    </div>
  )
  
}


