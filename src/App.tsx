import React from 'react';
import PlayerBody from './components/organisms/PlayerBody/PlayerBody';

const App: React.FC = () => {
	return (
		<div className='flex justify-center items-center w-full h-screen bg-backgroundPrimary '>
			<PlayerBody />
		</div>
	);
};

export default App;
