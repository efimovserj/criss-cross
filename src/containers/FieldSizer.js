import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { buildFieldBySize } from "../actions";
import { MIN_FIELD_SIZE, MAX_FIELD_SIZE } from "../settings/field";

class FieldSizer extends PureComponent {
  fieldSizerHandler = event => {
    const { dispatch } = this.props;
    let size = +event.target.value;

    if (size < MIN_FIELD_SIZE) {
      size = MIN_FIELD_SIZE;
    }

    if (size > MAX_FIELD_SIZE) {
      size = MAX_FIELD_SIZE;
    }

    dispatch(buildFieldBySize(size));
  };

  render() {
    const { size } = this.props;
    return (
      <input type="number" value={size} onChange={this.fieldSizerHandler} />
    );
  }
}

const mapStateToProps = state => ({
  size: state.settings.fieldSize
});

export default connect(mapStateToProps)(FieldSizer);
