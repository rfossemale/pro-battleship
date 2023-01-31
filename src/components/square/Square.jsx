import React, { useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import "./square.scss";

const ON_CLICK_SQUARE = "ON_CLICK_SQUARE";

const Square = ({ row, col }) => {
  const [ selected, setSelected ] = useState(false);
  const { store } = useSelector(state => state.matrix);
  const dispatch = useDispatch();

  const onChange = ({ row, col }) => {
    if (!selected) {
      dispatch({ type: ON_CLICK_SQUARE, payload: { row, col } });
      setSelected(true);
    }
  }

  return (
     <div className="square-container" onClick={()=> onChange({ row, col })}>
       { selected && <span> X </span> }
     </div>
  );
}

export default Square;
