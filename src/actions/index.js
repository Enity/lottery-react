import { createActions } from 'redux-actions';

const actionsPublic = createActions({
  GET_NEW_TICKET: ticketId => ({ ticketId }),
  TWO_PLAYERS_MODE: bool => ({ bool }),
  START_LOHOTRON: undefined,
});

const actionsPrivate = createActions({
  SET_NEW_TICKET: (ticketId, value) => ({ ticketId, value }),
  ADD_NEW_TICKET: newTicket => ({ newTicket }),
  REMOVE_TICKET: undefined,
  SET_NEW_ROUND_DATA: newNumber => ({ newNumber }),
  SET_GAME_PROGRESS: gameState => ({ gameState }),
  SET_WINNER: winnerTicket => ({ winnerTicket })
})


export { actionsPublic, actionsPrivate };