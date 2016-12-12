'use strict';

angular.module('userTable').factory('UserTableService', function ($http) {
    return {
        fetchUsers: ({gender, nat}) => {
            return $http.get(`https://randomuser.me/api/?results=10&gender=${gender}&nat=${nat}`)
                .then(response => response.data.results);
        }
    }
});