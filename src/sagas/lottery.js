import { actionsPrivate as act } from '../actions';
//import { delay } from 'redux-saga'
import { put, takeEvery, select } from 'redux-saga/effects';

const getLottery = state => state.lottery;
const maxValue = 100;

function* lohotronRound() {
  const { gameProgress, tickets, numbersStack } = yield select(getLottery);
  if (gameProgress === 'finished') return; // return if game ended
  let newNumber = getNewTicketValue();
  while (numbersStack.indexOf(newNumber) !== -1) { // get unique ticket value
    newNumber = getNewTicketValue();
  }
  if (gameProgress === 'pending') {
    yield put(act.setGameProgress('started'));  // start game
  }
  yield put(act.setNewRoundData(newNumber));
  let winner = yield findWinner(newNumber, tickets); // try to find winner
  if (winner !== false) {
    yield put(act.setWinner(winner));
    yield put(act.setGameProgress('finished'));
  }
}

function* getNewTicket({ payload }) {
  let newValue = getNewTicketValue(maxValue);
  const { gameProgress } = yield select(getLottery);
  if (gameProgress === 'pending') {
    yield put(act.setNewTicket(payload.ticketId, newValue ));
  }
}

function* setPlayersQuantity({ payload }) {
  if (payload.bool) {   
    yield put(act.addNewTicket());
    yield put(act.setNewTicket(1, getNewTicketValue()));
  }
  else {
    yield put(act.removeTicket());
  }
}

export default function* rootSaga() {
  yield takeEvery('START_LOHOTRON', lohotronRound);
  yield takeEvery('GET_NEW_TICKET', getNewTicket);
  yield takeEvery('TWO_PLAYERS_MODE', setPlayersQuantity)
};

function findWinner(number, tickets) {
  let winner = tickets.indexOf(number);
  if (winner === -1) return false;
  return winner;
}

function getNewTicketValue() {
  let rand = 1 + Math.random() * (maxValue + 1 - 1);
  rand = Math.floor(rand);
  return rand;
}