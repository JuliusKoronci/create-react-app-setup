import _ from 'ramda';
export const getOrFail = _.curry((object, key) => {
	try {
		const keys = key.split('.');
		return extract(object, keys);
	} catch (e) {
		return undefined;
	}
});
export const extract = (object, array = []) => {
	if (!object) {
		return undefined;
	}
	const length = array.length;
	if (length === 1) {
		return object[array[0]];
	}
	const key = array.shift(1);
	return extract(object[key], array);
};
export default getOrFail;
