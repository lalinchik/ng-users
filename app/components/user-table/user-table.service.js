'use strict';

angular.module('userTable').factory('UserTableService', function ($http) {
    return {
        fetchUsers: ({limit, gender, nat}) => {
            return $http.get(`https://randomuser.me/api/?results=${limit}&gender=${gender}&nat=${nat}`)
                .then(response => response.data.results);
        }
    }
});