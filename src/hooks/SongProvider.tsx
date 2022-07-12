import React from 'react';

const SongContext = React.createContext({
	trueIs: true,
});
const SongProvider = ({ children }: { children: any }) => {
	return <div>{children}</div>;
};

export default SongProvider;
