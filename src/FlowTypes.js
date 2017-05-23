import React from 'react';

/**
 * Routes
 */
export type RouteItem = {
	name: string,
	path: string,
	component?: React.Element<*>,
};
export type RouteItems = <T>() => Array<RouteItem>;

/**
 * API
 */
export type APIResponse = {
	request: boolean,
	success: boolean,
	loaded: boolean,
	error: boolean | { message: string, code: string | number },
	data: {}
}

export type ReduxApiAction = { type: string, response?: {} };
