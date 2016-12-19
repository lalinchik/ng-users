'use strict';

angular.module('userTable').factory('UserTableService', function ($http) {
    const state = {
        filters: {},
        limit: 10,
        page: 1
    };


    return {
        fetchUsers: () => {
            let url = `https://randomuser.me/api/?page=${state.page}&results=${state.limit}&seed=abc`;
            for (let key of Object.keys(state.filters)) {
                url += `&${key}=${state.filters[key]}`;
            }
            return $http.get(url)
                .then(response => response.data.results);
        },

        setFilters: (filters) => {
            state.filters = filters;
            state.page = 1;
        },

        setLimit: (limit) => {
            state.limit = limit;
            state.page = 1;
        },

        setPage: (page) => {
            state.page = page;
        }
    }
});