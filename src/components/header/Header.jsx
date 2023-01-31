import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const count = useSelector((state) => state)
  const dispatch = useDispatch();

  return (
    <header>

    </header>
  )

}

export default Header;