import { DEFAULT_FIELD_SIZE } from "../settings/field";
import cellInfo from "../settings/cellInfo";

function createContentArray(size) {
  const fieldArrayLength = size * size;
  let fieldArray = [];

  for (let cellIndex = 0; cellIndex < fieldArrayLength; cellIndex++) {
    fieldArray.push(Object.assign({}, cellInfo, { index: cellIndex }));
  }

  return fieldArray;
}

const fieldContent = (
  state = createContentArray(DEFAULT_FIELD_SIZE),
  action
) => {
  switch (action.type) {
    case "CREATE_FIELD_BY_SIZE":
      return createContentArray(action.size);
    case "CHOOSE_FIELD_CELL":
      return [
        ...state.slice(0, action.cell.index),
        action.cell,
        ...state.slice(action.cell.index + 1)
      ];
    default:
      return state;
  }
};

export default fieldContent;
