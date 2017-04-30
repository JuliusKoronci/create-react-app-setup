// @flow

import { demoActions } from '../constants/DemoConstants';

const _create = (state, action) => {
	return {
		list: [
			...state.list,
			{
				...action.entry,
				id: Date.now(),
			},
		]
	};
};

const _delete = (state, action) => {
	return {
		list: [
			...state.list.filter(item => item.id !== action.id)
		]
	};
};


const actions = {
	[demoActions.CREATE_ENTRY]: _create,
	[demoActions.DELETE_ENTRY]: _delete,
};

export const initialState = {
	list: [
		{
			id: 1,
			label: 'Test',
			desc: 'This is a demo test whatever json object',
		}
	]
};

const demoReducer = (state: Object = initialState, action: Obj) => {
	switch (action.type) {
		case demoActions.CREATE_ENTRY:
			return actions[action.type](state, action);
		case demoActions.DELETE_ENTRY:
			return actions[action.type](state, action);
		default:
			return state;
	}
};
export default demoReducer;

