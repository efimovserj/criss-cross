import { DEFAULT_FIELD_SIZE } from "../settings/field";

const fieldContent = (
  state = {
    mode: "PVP",
    fieldSize: DEFAULT_FIELD_SIZE
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_GAME_MODE":
      return Object.assign({}, state, {
        mode: action.mode
      });
    case "CHANGE_FIELD_SIZE":
      return Object.assign({}, state, {
        fieldSize: action.size
      });
    default:
      return state;
  }
};

export default fieldContent;
