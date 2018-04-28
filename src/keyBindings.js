import { actionsPublic as act } from './actions';

export default function createKeyBindings(store) {
  document.onkeyup = function (e) { //spacebar
    if (e.keyCode === 32) {
      store.dispatch(act.startLohotron());
    }
  }
}