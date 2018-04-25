import React from 'react';
import './Ticket.css'

const Ticket = ({id, onClick, ticketNumber, win}) => (
  <div className="ticket">
    <div className="ticket-content">
      <div className="ticket-number">{ticketNumber}</div>
      <div className="ticket-btn" onClick={onClick}>Get New ticket</div>
    </div>
  </div>
)

export default Ticket;