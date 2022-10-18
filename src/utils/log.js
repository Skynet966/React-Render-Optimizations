export const log = (message, color) => {
	switch (color) {
		case 'success':
			color = 'Green';
			break;
		case 'info':
			color = 'aliceblue';
			break;
		case 'error':
			color = 'Red';
			break;
		case 'warning':
			color = 'Orange';
			break;
		default:
			color = 'black';
	}

	console.log(
		`%c[React Rendering]-${message}`,
		`color:${color};font-size:16px;font-weight:700;text-transform:capitalize;`
	);
};
