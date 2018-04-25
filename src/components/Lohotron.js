import React from 'react';
import './Lohotron.css'

const Lohotron = ({ curentNumber, startLohotron }) => (
  <div className="lohotron">
    <div className="ticket-content">
      <div className="lohotron-number">{curentNumber}</div>
      <div className="lohotron-btn" onClick={startLohotron}>Start</div>
    </div>
  </div>
)

export default Lohotron;