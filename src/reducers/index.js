import { combineReducers } from "redux";

import game from "./game";
import field from "./field";
import settings from "./settings";

export default combineReducers({
  game,
  field,
  settings
});

/**
 * Store structure
 * Game:
 *  - status: setup, progress(default), end. Type: string
 *  - turnCount: 0(default), 1, 2, ...field.length Type: number
 *  - whoseTurn: criss (default), cross Type: string
 *  - winner: null (default), criss, cross Type: string
 *
 *  Field:
 *  - content: [null, ..., null], [null, 'criss', null, 'cross', ..., 'criss'] Type: array
 *
 *  Players:
 *  - criss: {
 *    - id: 'criss' Type: string
 *    - avatar: picture, shapshot from camera(?) Type: string
 *    - name: Criss (default) Type: string
 *  }
 *  - cross: {
 *    - id: 'cross' Type: string
 *    - avatar: picture, shapshot from camera(?) Type: string
 *    - name: Cross (default) Type: string
 *  }
 *
 *  Setting:
 *  - mode: PVP(default, Player VS Player), PVCR(Player VS CPU, difficult level Random or Beginer), PVCA(Player VS CPU, difficult level Advanced)
 *  - fieldSize: 1(1x1), 2 (2X2), 3(default, 3x3), ... Min size: 1 Max size 5. Type: number
 *
 *  Check status of game
 *  + Is there another turn?
 *  - Is there the winner?
 *
 *  Check the Field:
 *  + Is a cell free?
 */
