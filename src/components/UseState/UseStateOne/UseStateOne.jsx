import React, { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { renderLogs } from '../../../utils/renderLogs';
let renderCount = 0;

const UseStateOne = () => {
	const [count, setCount] = useState(0);

	const handleClick = (event, value) => {
		event.preventDefault();
		setCount(previousCount => previousCount + value);
	};
	renderCount++;
	renderLogs(UseStateOne.name, renderCount);
	return (
		<div className='mx-auto p-4 max-w-screen-sm text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
			<h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
				{count}
			</h5>
			<p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
				Increment and Decrement counter to see the render state in console.
			</p>
			<div className='justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
				<a
					href='#'
					onClick={e => {
						handleClick(e, 1);
					}}
					className='w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
				>
					<PlusCircleIcon className='w-6 h-6 mr-3' />
					<div className='text-left'>
						<div className='mb-1 text-xs'>Trigger State Change</div>
						<div className='-mt-1 font-sans text-sm font-semibold'>
							Increment counter
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};
export default UseStateOne;
