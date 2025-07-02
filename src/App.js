import React from 'react'
import MyCounter from './conponents/MyCounter'
import './conponents/myCounter.css';

export default function App() {
  return (
    <div className='app-container'>
      <h1>My Counter App</h1>
      {/* Render the MyCounter component */}
      {/* This component manages its own state and functionality */}
      <p>Click the buttons to increase or decrease the counter.</p>
      <p>Counter will not go below 0 or above 10.</p>
      <MyCounter />
    </div>
  )
}
