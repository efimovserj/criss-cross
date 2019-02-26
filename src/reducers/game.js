import { DEFAULT_PLAYER } from "../settings/players";

const game = (
  state = {
    turnCounter: 0,
    status: "progress",
    whoseTurn: "criss",
    winner: null
  },
  action
) => {
  switch (action.type) {
    case "INCREASE_TURN_COUNTER":
      if ((action.turn, action.turn === 0)) {
        return Object.assign({}, state, { turnCounter: action.turn });
      }

      return Object.assign({}, state, { turnCounter: state.turnCounter + 1 });
    case "SET_GAME_STATUS":
      return Object.assign({}, state, { status: action.status });
    case "SET_CURRENT_PLAYER":
      if (action.whoseTurn) {
        return Object.assign({}, state, {
          whoseTurn: action.whoseTurn === "criss" ? "cross" : "criss"
        });
      }

      return Object.assign({}, state, {
        whoseTurn: DEFAULT_PLAYER
      });
    default:
      return state;
  }
};

export default game;
