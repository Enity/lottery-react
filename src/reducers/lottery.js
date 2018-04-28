import { handleActions } from 'redux-actions';

const initialState = () => {
  return {
    tickets: [23, 32],
    currentNumber: null,
    numbersStack: [],
    winnerTicket: null,
    gameProgress: 'pending'
  }
};

const Lottery = handleActions({
  SET_NEW_TICKET: (state, { payload }) => ({
    ...state,
    tickets: updateTicket(state.tickets, payload.ticketId, payload.value)
  }),
  ADD_NEW_TICKET: (state, { payload }) => ({
    ...state,
    tickets: state.tickets.concat(payload.newTicket)
  }),
  REMOVE_TICKET: state => ({
    ...state,
    tickets: state.tickets.splice(0, 1)
  }),
  SET_NEW_ROUND_DATA: (state, { payload }) => ({
    ...state,
    currentNumber: payload.newNumber,
    numbersStack: state.numbersStack.concat(payload.newNumber)
  }),
  SET_GAME_PROGRESS: (state, { payload }) => ({
    ...state,
    gameProgress: payload.gameState
  }),
  SET_WINNER: (state, { payload }) => ({
    ...state,
    winnerTicket: payload.winnerTicket
  })
},
  initialState()
);

export default Lottery;

function updateTicket(tickets, ticketId, newValue) {
  return tickets.map((item, i) => {
    if (ticketId === i) return newValue;
    return item;
  })
}