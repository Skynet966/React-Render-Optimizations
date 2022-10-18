import React from 'react';
import { renderLogs } from '../../../utils/renderLogs';

export const Child = () => {
	renderLogs('Child Component');
	return <div>Child Component</div>;
};
