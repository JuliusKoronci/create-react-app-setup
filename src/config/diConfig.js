import routes, { getPath } from '../routes';
import { getApiPath } from '../endpoints';

export default function () {
	return {
		routes: () => routes,
		getPath: () => getPath,
		getApiPath: () => getApiPath,
	}
}
