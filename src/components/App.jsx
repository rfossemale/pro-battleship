import React, {Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Board from "./board/Board.jsx";
import '../styles/global.scss';

export default function App() {
	return (
		<Fragment>
			<Board />
		</Fragment>
	);
}