import {buildApi, post} from 'redux-bees';

const apiEndpoints = {
    login: {method: post, path: '/api/login'},
};

const config = {
    baseUrl: 'http://localhost:8080/app_dev.php',
    configureHeaders(headers) {
        return {
            ...headers,
            'Content-Type': 'application/x-www-form-urlencoded',
        };
    },
};

export const api = buildApi(apiEndpoints, config);
export default api;