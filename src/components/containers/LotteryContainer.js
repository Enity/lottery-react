import { connect } from 'react-redux';
import { actionsPublic as act } from '../../actions'
import Lottery from '../TheLottery';

const mapStateToProps = (state) => {
  return {
    tickets: state.lottery.tickets,
    currentNumber: state.lottery.currentNumber,
    winnerTicket: state.lottery.winnerTicket,
    gameProgress: state.lottery.gameProgress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewTicket: ticketId => {
      dispatch(act.getNewTicket(ticketId))
    },
    toggleTwoPlayersMode: mode => {
      dispatch(act.twoPlayersMode(mode))
    },
    startLohotron: () => {
      dispatch(act.startLohotron())
    }
  }
}

const LotteryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lottery)

export default LotteryContainer;
