import React, { useState } from 'react';
import { renderLogs } from '../../utils/renderLogs';

export const UseState = () => {
	const [count, setCount] = useState(0);
	renderLogs('UseState');
	return (
		<div className='container'>
			<div className='container__header'>
				<h1>{count}</h1>
			</div>
			<div className='container__body'>
				<p>
					Increment and Decrement counter to see the render state in console.
				</p>
			</div>
			<div className='container__footer'>
				<div className='button__container'>
					<button
						onClick={() => {
							setCount(countValue => countValue - 1);
						}}
					>
						Decrement
					</button>
					<button
						onClick={() => {
							setCount(countValue => countValue + 1);
						}}
					>
						Increment
					</button>
				</div>
			</div>
		</div>
	);
};
