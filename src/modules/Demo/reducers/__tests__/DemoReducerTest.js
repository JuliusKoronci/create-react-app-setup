// @flow
import demoReducer from '../DemoReducer';
import { demoActions } from '../../constants/DemoConstants';
const initialState = {
	list: [
		{
			id: 1,
			label: 'Test',
			desc: 'This is a demo test whatever json object',
		}
	]
};
const entry = {
	title: 'test',
	description: 'desc',
};

describe('demoReducer', () => {
	it('return initial state', () => {
		expect(demoReducer(undefined, { type: 'whatever' })).toEqual(initialState);
	});
	it('remove entry from store', () => {
		expect(demoReducer(initialState, { type: demoActions.DELETE_ENTRY, id: 1 }).list.length === 0).toBeTruthy();
	});
	it('add entry to store', () => {
		expect(demoReducer(initialState, { type: demoActions.CREATE_ENTRY, entry }).list.length === 2).toBeTruthy();
		expect(demoReducer(initialState, {
				type: demoActions.CREATE_ENTRY,
				entry
			}).list[1].title === 'test').toBeTruthy();
	});
});
