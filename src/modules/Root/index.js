// @flow
import React from 'react';
import {Provider} from 'react-redux';
import {
    Route,
} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store, {history} from '../../store/configureStore';
import {RouteItems, RouteItem} from '../../FlowTypes';
import routes from '../../routes';

const Root = () => {
    const renderRoutes = (routeList: Array<RouteItems>) => routeList.map((route: RouteItem) => (
        <Route key={route.path} exact path={route.path} component={route.component()}>
            {route.children && renderRoutes(route.children)}
        </Route>
    ));

    return (
        <Provider store={store}>
            <MuiThemeProvider>
                <ConnectedRouter history={history}>
                    <div>
                        {renderRoutes(routes)}
                    </div>
                </ConnectedRouter>
            </MuiThemeProvider>
        </Provider>
    );
};

export default Root;
