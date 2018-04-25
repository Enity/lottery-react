import React from 'react';
import { connect } from 'react-redux';
import { getTicket, twoPlayersMode, startLohotron } from '../actions'
import Ticket from './Ticket';
import Checkbox from './ui/checkbox';
import Lohotron from './Lohotron';
import './TheLottery.css';

let Lottery = ({ tickets, currentNumber, twoPlayers, startLohotron, getNewTicket, twoPlayersMode }) => {
  return (
    <div className="window-big">
      <div className="window-header">
        <h1 className="lottery-header">SUPER LOTTERY</h1>
        <h2>SHIRASS</h2>
      </div>
      <div className="container">
        <Lohotron
          curentNumber={currentNumber}
          startLohotron={startLohotron}
        />
        <Checkbox
          checked={twoPlayers}
          onChange={twoPlayersMode}
          text='Two players'/>

        {tickets.map((ticket, index) => (
          <Ticket
            key={index}
            ticketNumber={ticket}
            onClick={() => getNewTicket(index)} />
        ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tickets: state.lottery.tickets,
    twoPlayers: state.lottery.twoPlayers,
    currentNumber: state.lottery.currentNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewTicket: id => {
      dispatch(getTicket(id))
    },
    twoPlayersMode: mode => {
      dispatch(twoPlayersMode(mode))
    },
    startLohotron: () => {
      dispatch(startLohotron())
    }
  }
}

Lottery = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lottery)

export default Lottery;
