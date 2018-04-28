import {
  SET_NEW_TICKET, TWO_PLAYERS_MODE, SET_WINNER,
  SET_GAME_PROGRESS, SET_NEW_ROUND_DATA
} from '../actions/index';

let max = 100;
const newTicket = () => getNumber(max);

const initialState = () => {
  const twoPlayers = true;
  return {
    twoPlayers: twoPlayers,
    tickets: twoPlayers ? [newTicket(), newTicket()] : [newTicket()],
    currentNumber: null,
    winnerTicket: null,
    gameProgress: 'pending'
  }
};

export default function Lottery(state = initialState(), action) {
  switch (action.type) {
    case SET_NEW_TICKET:
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
    case SET_NEW_ROUND_DATA:
      return {
        ...state,
        currentNumber: action.newNumber
      }
    case SET_GAME_PROGRESS:
      return {
        ...state,
        gameProgress: action.gameState
      }
    case SET_WINNER:
      return {
        ...state,
        winnerTicket: action.winnerTicket
      }
    default:
      return state;
  }
}

function tickets(state = [], action) {
  return state.map((item, i) => {
    if (action.ticketId === i) return newTicket();
    return item;
  })
}

function getNumber(max) {
  let rand = 0 + Math.random() * (max + 1 - 0);
  rand = Math.floor(rand);
  return rand;
}