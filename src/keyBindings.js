import { START_LOHOTRON } from './actions';

export default function createKeyBindings(store) {
  document.onkeyup = function (e) {
    if (e.keyCode === 32) {
      store.dispatch({type: START_LOHOTRON});
    }
  }
}