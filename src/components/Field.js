import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

import { CELL_DIMENSION } from "../settings/field";
import { cellWasChosen, setCurrentPlayer, setGameStatus } from "../actions";

import Cell from "../containers/Cell";
import FieldSizer from "../containers/FieldSizer";
import Statistics from "./Statistics";

class Field extends PureComponent {
  handlerCellChooser = index => {
    const { fieldContent, currentPlayer, dispatch } = this.props;

    // Check if cell already was chosen
    if (fieldContent[index].owner) {
      return;
    }

    let newCell = { ...fieldContent[index], owner: currentPlayer };

    dispatch(cellWasChosen(newCell));
    dispatch(setCurrentPlayer(currentPlayer));

    this.checkEndGame();
  };

  checkEndGame = () => {
    const { dispatch } = this.props;

    if (this.isWinner()) {
      dispatch(setGameStatus("endWithWinner"));
    }

    if (this.isLastTurn()) {
      dispatch(setGameStatus("end"));
    }
  };

  isLastTurn = () => {
    const { fieldContent, turnCounter } = this.props;

    return fieldContent.length === turnCounter + 1;
  };

  isWinner = () => {
    //TODO create a check
    return false;
  };

  render() {
    const { fieldSize, fieldContent, turnCounter } = this.props;

    return (
      <Fragment>
        <h1>I'm Field</h1>

        <Statistics />

        <FieldSizer />

        <div className="field" style={{ width: CELL_DIMENSION * fieldSize }}>
          {fieldContent.map(cell => (
            <Cell
              {...cell}
              key={cell.index}
              onClick={this.handlerCellChooser}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  fieldContent: state.field,
  fieldSize: state.settings.fieldSize,
  currentPlayer: state.game.whoseTurn,
  turnCounter: state.game.turnCounter
});

export default connect(mapStateToProps)(Field);
