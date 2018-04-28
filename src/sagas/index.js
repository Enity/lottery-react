import { 
  START_LOHOTRON, SET_NEW_ROUND_DATA,
  SET_GAME_PROGRESS, SET_WINNER, SET_NEW_TICKET,
  GET_NEW_TICKET
} from '../actions/index';
//import { delay } from 'redux-saga'
import { put, takeEvery, select } from 'redux-saga/effects';

const getLottery = state => state.lottery;

function* lohotronRound() {
  const { gameProgress, tickets } = yield select(getLottery);
  if (gameProgress === 'finished') return;
  let newNumber = getNumber(100);
  if (gameProgress === 'pending') {
    yield put({type: SET_GAME_PROGRESS, gameState: 'started'});
  }
  yield put({ type: SET_NEW_ROUND_DATA, newNumber: newNumber});
  let winner = yield findWinner(newNumber, tickets);
  console.log(winner);
  if (winner !== false) {
    yield put({type: SET_WINNER, winnerTicket: winner});
    yield put({type: SET_GAME_PROGRESS, gameState: 'finished'});
  }
}

function* getNewTicket(action) {
  const { gameProgress } = yield select(getLottery);
  if (gameProgress === 'pending') {
    yield put({type: SET_NEW_TICKET, ticketId: action.ticketId });
  }
}

/* function* setPlayersQuantity() {
  yield delay(1000)
  yield put({ type: START_LOHOTRON })
} */

export default function* rootSaga() {
  yield takeEvery(START_LOHOTRON, lohotronRound);
  yield takeEvery(GET_NEW_TICKET, getNewTicket);
};

function findWinner(number, tickets) {
  let winner = tickets.indexOf(number);
  if (winner === -1) return false;
  return winner;
}

function getNumber(max) {
  let rand = 0 + Math.random() * (max + 1 - 0);
  rand = Math.floor(rand);
  return rand;
}