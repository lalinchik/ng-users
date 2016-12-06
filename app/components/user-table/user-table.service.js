angular.module('userTable').factory('UserTableService', function ($http, $q) {
    return {
        fetchUsers: ({limit, gender, nat}) => {
            const deferred = $q.defer();

            $http.get('https://randomuser.me/api/?results=' + limit + '&gender=' + gender + '&nat=' + nat)
                .success(response => deferred.resolve(response.results))
                .error(() => console.log('Oh, sorry'));

            return deferred.promise;
        }
    }
});