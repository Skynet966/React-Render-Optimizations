import React from 'react';

const initState = ['satish', 'kumar'];

export const UseStateWithArray = () => {
	const [name, setName] = useState(initState);
	const handleClick = () => {
		const newName = [...name];
		newName.push('kumar');
		setName(newName);
	};
	renderLogs('UseStateWithArray');
	return (
		<div className='container'>
			<div className='container__header'>
				<h1>{name}</h1>
			</div>
			<div className='container__body'>
				<p>
					Click on button to change the person name to see the render state in
					console.
				</p>
			</div>
			<div className='container__footer'>
				<div className='button__container'>
					<button onClick={handleClick}>Change Name</button>
				</div>
			</div>
		</div>
	);
};
