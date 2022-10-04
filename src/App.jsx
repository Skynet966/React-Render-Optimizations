import { useState } from 'react';
import './App.css';
import { UseStateOne } from './components/UseStateOne/UseStateOne';
import { UseStateTwo } from './components/UseStateTwo/UseStateTwo';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<UseStateOne />
			<UseStateTwo />
		</div>
	);
}

export default App;
