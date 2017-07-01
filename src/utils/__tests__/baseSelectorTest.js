import baseSelector from '../baseSelector';

const list = [
	{
		id: 1,
		name: 'test1',
	},
	{
		id: 2,
		name: 'test2',
	},
];

const arrayList = ['A', 'B', 'C'];


describe('baseSelector', () => {
	it('should match value if json and key provided', () => {
		expect(baseSelector.listByKey(list[0], 'name')).toEqual('test1');
	});
	it('should match item from an array of json items', () => {
		expect(baseSelector.itemByMatch(list, 'id', 1)).toEqual({
			id: 1,
			name: 'test1',
		});
	});
	it('should find an item in an array', () => {
		expect(baseSelector.itemByArrayMatch(arrayList, 'B')).toEqual('B');
	});
});
