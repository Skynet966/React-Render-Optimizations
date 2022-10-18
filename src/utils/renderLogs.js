import { log } from './log';

export const renderLogs = (componentName,counter) => {
	log(`${componentName} Rendered ${counter} times!!`, 'info');
};
