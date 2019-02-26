import cellInfo from "../settings/cellInfo";
import { DEFAULT_FIELD_SIZE } from "../settings/field";

function createContentArray(size) {
  const fieldArrayLength = size * size;
  let fieldArray = [];

  for (let cellIndex = 0; cellIndex < fieldArrayLength; cellIndex++) {
    fieldArray.push(Object.assign({}, cellInfo, { index: cellIndex }));
  }

  return fieldArray;
}

function createCheckArray(size) {
  function createHorizontalChecker() {
    const horizontalCheckArray = [];

    for (let i = 0; i < size * size; i += size) {
      let tempArr = [];

      for (let h = i; h < size + i; h++) {
        tempArr.push(h);
      }

      horizontalCheckArray.push(tempArr);
    }

    return horizontalCheckArray;
  }
  function createVerticalChecker() {
    const verticalCheckArray = [];

    for (let i = 0; i < size; i++) {
      let tempArr = [];

      for (let v = i; v < size * size; v += size) {
        tempArr.push(v);
      }

      verticalCheckArray.push(tempArr);
    }

    return verticalCheckArray;
  }
  function createDiagonaleChecker1() {
    const diagonalCheckArray1 = [];

    for (let i = 0; i < size * size; i += size + 1) {
      diagonalCheckArray1.push(i);
    }

    return diagonalCheckArray1;
  }
  function createDiagonaleChecker2() {
    const diagonalCheckArray2 = [];

    for (let i = size - 1; i < size * size - 1; i += size - 1) {
      diagonalCheckArray2.push(i);
    }

    return diagonalCheckArray2;
  }

  const total = [
    ...createHorizontalChecker(),
    ...createVerticalChecker(),
    createDiagonaleChecker1(),
    createDiagonaleChecker2()
  ];

  return total;
}

const fieldContent = (
  state = {
    fieldArray: createContentArray(DEFAULT_FIELD_SIZE),
    checkArray: createCheckArray(DEFAULT_FIELD_SIZE)
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_FIELD_SIZE":
      return Object.assign({}, state, {
        fieldArray: createContentArray(action.size),
        checkArray: createCheckArray(action.size)
      });
    case "CHOOSE_FIELD_CELL":
      return Object.assign({}, state, {
        fieldArray: [
          ...state.fieldArray.slice(0, action.cell.index),
          action.cell,
          ...state.fieldArray.slice(action.cell.index + 1)
        ]
      });
    default:
      return state;
  }
};

export default fieldContent;
