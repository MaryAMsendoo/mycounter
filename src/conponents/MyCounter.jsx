// Import React and useState hook
import React, { useState } from 'react';
// Import the custom CSS file for styling
import '../conponents/myCounter.css';

// Define the MyCounter functional component
const MyCounter = () => {
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

  // Render the component
  return (
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
  );
};

// Export the component to be used in other parts of the app
export default MyCounter;
