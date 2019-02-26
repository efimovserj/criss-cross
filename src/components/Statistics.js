import React, { PureComponent } from "react";
import { connect } from "react-redux";

class Statistics extends PureComponent {
  render() {
    const { turnCounter, whoseTurn, status, winner } = this.props;
    return (
      <div>
        Turn counter: {turnCounter}, Whose turn: {whoseTurn}, Status: {status},
        Winner: {winner}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  turnCounter: state.game.turnCounter,
  whoseTurn: state.game.whoseTurn,
  status: state.game.status,
  winner: state.game.winner
});

export default connect(mapStateToProps)(Statistics);
