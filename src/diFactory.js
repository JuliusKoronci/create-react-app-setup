import DI from './libs/DI';

export default function () {
	const config = require('./config/diConfig').default;
	return DI.bind(null, config());
}
