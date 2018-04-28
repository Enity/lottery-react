import { createActions } from 'redux-actions';

/* PUBLIC */

export const GET_NEW_TICKET = 'GET_NEW_TICKET';
export const TWO_PLAYERS_MODE = 'TWO_PLAYERS_MODE';
export const START_LOHOTRON = 'START_LOHOTRON';

/* PRIVATE */

export const SET_NEW_TICKET = 'SET_NEW_TICKET';
export const SET_NEW_ROUND_DATA = 'SET_NEW_ROUND_DATA';
export const SET_GAME_PROGRESS = 'SET_GAME_PROGRESS';
export const SET_WINNER = 'SET_WINNER';

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