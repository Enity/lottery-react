import throttle from 'lodash/throttle';
import { actionsPublic as act } from './actions';

export default function createKeyBindings(store) {
  const eventThrottled = throttle(e => {
    if (e.keyCode !== 32) return;
    store.dispatch(act.startLohotron())
  },
    150, { 'trailing': false });
  document.addEventListener('keydown', eventThrottled)
}