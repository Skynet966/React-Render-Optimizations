import React, { useState } from 'react';
import { renderLogs } from '../../utils/renderLogs';

export const UseStateTwo = () => {
	const [count, setCount] = useState(0);
	renderLogs('UseStateTwo');
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
							setCount(countValue => 0);
						}}
					>
						Set value as 0
					</button>
					<button
						onClick={() => {
							setCount(countValue => countValue + 1);
						}}
					>
						Increment
					</button>
					<button
						onClick={() => {
							setCount(countValue => 5);
						}}
					>
						Set value as 5
					</button>
				</div>
			</div>
		</div>
	);
};
