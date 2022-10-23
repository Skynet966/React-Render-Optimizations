import genrateRandomColor from './genrateRandomColor';
import { log } from './log';

export const renderLogs = (componentName, counter, color = genrateRandomColor()) => {
	log(`${ componentName } Rendered ${ counter } times!!`, color);
};
