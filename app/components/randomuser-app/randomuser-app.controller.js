function RandomuserAppController(UserTableService, $scope) {
    UserTableService.fetchUsers({limit: 100, gender: 'female', nat: 'us,dk,fr'})
        .then(users => this.users = users);

    this.onFiltersApply = function (filters) {
        UserTableService.fetchUsers(filters)
            .then(users => this.users = users);
    };

    $scope.fff = function () {
        console.log('hjhgjg');
    }
}