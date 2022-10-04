import { log } from './log';

export const renderLogs = componentName => {
	log(`${componentName} Rendered!!`, 'success');
};
