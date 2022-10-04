import { useState } from 'react';
import './App.css';
import { UseReducer } from './components/UseReducer/UserReducer';
import { UseStateOne } from './components/UseStateOne/UseStateOne';
import { UseStateTwo } from './components/UseStateTwo/UseStateTwo';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='main__container'>
			<UseStateOne />
			<UseStateTwo />
			<UseReducer />
		</div>
	);
}

export default App;
