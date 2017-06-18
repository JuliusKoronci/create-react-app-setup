import React from 'react';

export type RouteItem = {
  name: string,
  path: string,
  component?: React.Element<*>,
};
export type RouteItems = <T>() => Array<RouteItem>;
export type DIType = {
  routes: RouteItems,
  getPath: <T>(name: string, params: ?{}, queryParams: ?{}) => string,
};
