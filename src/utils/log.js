export const log = (message, color) =>
	console.log(
		`%c[React Rendering]-${ message }`,
		`color:#${ color };font-size:16px;font-weight:700;text-transform:capitalize;`
	);
