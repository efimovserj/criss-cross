import React, { PureComponent } from "react";

import { CELL_DIMENSION } from "../settings/field";
import players from "../settings/players";

class Cell extends PureComponent {
  render() {
    const { owner, index, onClick } = this.props;

    return (
      <div
        className="cell"
        onClick={() => onClick(index)}
        style={{
          width: CELL_DIMENSION,
          height: CELL_DIMENSION,
          fontSize: CELL_DIMENSION
        }}
      >
        {owner ? players[owner].value : index}
      </div>
    );
  }
}

export default Cell;
