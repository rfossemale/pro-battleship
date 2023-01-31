import React from "react";
import { connect } from "react-redux";
import Square from "../square/Square.jsx";
import "./board.scss";

class Board extends React.Component {
  constructor(props) {
    super(props);
    const matrix = new Array(10);
    for (let row = 0; row < matrix.length; row++) {
      matrix[row] = Array.from("0000000000").map((x) => parseInt(x));
    }
    this.state = {
      matrix,
    }
  }

  componentDidMount() {
    // fetch
  }

  render() {
    const { matrix } = this.state;
    console.log("hello")
    return (
      <div className="board-container">
        {
          matrix.map((value, row) => {
            return value.map((_, col) => <Square row={row} col={col}/>)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}
const mapDispatchToProps = {
  onChange: () => (dispatch) => {
    dispatch({ type: "GET_BOARD", payload: { count: 123343} });
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
