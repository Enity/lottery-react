export const GET_NEW_TICKET = 'GET_NEW_TICKET';
export const TWO_PLAYERS_MODE = 'TWO_PLAYERS_MODE';
export const START_LOHOTRON = 'START_LOHOTRON';

export function getTicket(ticketId) {
  return { type: GET_NEW_TICKET, ticketId };
}
export function twoPlayersMode(mode) {
  return { type: TWO_PLAYERS_MODE, mode };
}
export function startLohotron() {
  return { type: START_LOHOTRON };
}