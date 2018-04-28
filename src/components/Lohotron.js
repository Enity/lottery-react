import React from 'react';
import './Lohotron.css'

const Lohotron = ({ curentNumber, startLohotron }) => (
  <div className="lohotron">
    <div className="lohotron-number">{curentNumber}</div>
    <div className="lohotron-btn" onClick={startLohotron}>Start</div>
  </div>
)

export default Lohotron;