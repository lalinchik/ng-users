'use strict';

angular.module('userTable').factory('UserTableService', function ($http, $q) {
    return {
        fetchUsers: (data) => {
            const deferred = $q.defer();
            const {limit, gender, nat} = data;

            $http.get(`https://randomuser.me/api/?results=${limit }&gender=${ gender }&nat=${nat}`)
                .success(response => deferred.resolve(response.results))
                .error(() => console.log('Oh, sorry'));

            return deferred.promise;
        }
    }
});