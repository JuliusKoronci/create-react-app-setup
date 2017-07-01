import _ from 'ramda';
import fastMemoize from 'fast-memoize';
import getOrFail from './getOrFail';

/**
 * Returns a value from a json tree list based on comparison with memoization
 *
 * Example baseSelector.itemByMatch(addressList, 'addressId', ownProps.PartnerAddressDetailId)
 *
 * @var list json tree of values [state]
 * @var name key of the desired value, accepts dot notation username
 * @var match value to compare the key to
 */
const matchFN = fastMemoize(function(list, name, match) {
	return list.find((items) => items[name] === match);
});
/**
 * Returns a value from array list based on comparison with memoization
 *
 * Example baseSelector.matchFNArray(addressList, ownProps.PartnerAddressDetailId)
 *
 * @var list json tree of values [state]
 * @var name key of the desired value, accepts dot notation username
 * @var match value to compare the key to
 */
const matchFNArray = fastMemoize(function(list, match) {
	return list.find((items) => items === match);
});

/**
 * Returns a value from a json tree with memoization
 *
 * @var list json tree of values [state]
 * @var key key of the desired value, accepts dot notation [storename.objectname]
 */
const selectList = fastMemoize(function(list, key) {
	return getOrFail(list, key);
});

export default {
	itemByMatch: _.curry((list, name, match) => matchFN(list, name, match)),
	itemByArrayMatch: _.curry((list, match) => matchFNArray(list, match)),
	listByKey: _.curry((list, key) => selectList(list, key)),
};
