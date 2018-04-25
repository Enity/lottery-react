import { GET_NEW_TICKET, TWO_PLAYERS_MODE, START_LOHOTRON } from '../actions/index';

let max = 50000;
const newTicket = () => getNumber(max);

const initialState = () => {
  const twoPlayers = true;
  return {
    twoPlayers: twoPlayers,
    tickets: twoPlayers ? [newTicket(), newTicket()] : [newTicket()],
    currentNumber: null
  }
};

export default function Lottery(state = initialState(), action) {
  switch (action.type) {
    case GET_NEW_TICKET:
      return {
        ...state,
        tickets: tickets(state.tickets, action)
      }
    case TWO_PLAYERS_MODE:
    if (action.mode === true) {
      return {
        ...state,
        twoPlayers: true,
        tickets: state.tickets.concat(newTicket())
      }
    }
    else {
      return {
        ...state,
        twoPlayers: false,
        tickets: state.tickets.splice(0, 1)
      }
    }
    case START_LOHOTRON:
      return {
        ...state,
        currentNumber: getNumber(50000)
      }
    default:
      return state;
  }
}

function tickets(state = [], action) {
  switch (action.type) {
    case GET_NEW_TICKET:
      return state.map((item, i)=> {
        if (action.ticketId === i) return newTicket();
        return item;
      })
    default:
      return state;
  }
}

function getNumber(max) {
  let rand = 0 + Math.random() * (max + 1 - 0);
  rand = Math.floor(rand);
  return rand;
}