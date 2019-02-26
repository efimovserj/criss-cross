export const setFieldSize = size => ({
  type: "CHANGE_FIELD_SIZE",
  size
});

export const setFieldMode = mode => ({
  type: "SET_FIELD_MODE",
  mode
});

export const createFieldBySize = size => ({
  type: "CREATE_FIELD_BY_SIZE",
  size
});

export const chooseFieldCell = cell => ({
  type: "CHOOSE_FIELD_CELL",
  cell
});

export const increaseTurnCounter = turn => ({
  type: "INCREASE_TURN_COUNTER",
  turn
});

export const setGameStatus = status => ({
  type: "SET_GAME_STATUS",
  status
});

export const setCurrentPlayer = whoseTurn => ({
  type: "SET_CURRENT_PLAYER",
  whoseTurn
});

export const cellWasChosen = cell => dispatch => {
  dispatch(increaseTurnCounter());
  dispatch(chooseFieldCell(cell));
};

export const buildFieldBySize = size => dispatch => {
  dispatch(createFieldBySize(size));
  dispatch(setFieldSize(size));

  restartField(dispatch);
};

function restartField(dispatch) {
  dispatch(setCurrentPlayer());
  dispatch(increaseTurnCounter(0));
  dispatch(setGameStatus());
}
