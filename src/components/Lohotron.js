import React from 'react';
import './Lohotron.css'

const Lohotron = ({ curentNumber, startLohotron }) => (
  <div className="lohotron">
    <div className="lohotron-number-wrapper"><div>{curentNumber}</div></div>
    <div className="lohotron-btn" onClick={startLohotron}>Start</div>
  </div>
)

export default Lohotron;