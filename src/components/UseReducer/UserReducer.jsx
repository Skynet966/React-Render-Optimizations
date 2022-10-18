import React, { useReducer } from 'react';
import { renderLogs } from '../../utils/renderLogs';

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

const UseReducer = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	renderLogs('UseReducer');

	return (
		<div className='container'>
			<div className='container__header'>
				<h1>{count}</h1>
			</div>
			<div className='container__body'>
				<p>
					Increment and Decrement and reset counter to see the render state in
					console.
				</p>
			</div>
			<div className='container__footer'>
				<div className='button__container'>
					<button onClick={() => dispatch('increment')}>Increment</button>
					<button onClick={() => dispatch('decrement')}>Decrement</button>
					<button onClick={() => dispatch('reset')}>Reset to 0</button>
				</div>
			</div>
		</div>
	);
};

export default UseReducer;
