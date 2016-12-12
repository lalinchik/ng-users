function RandomuserAppController(UserTableService) {
    UserTableService.fetchUsers({gender: 'female', nat: 'us,dk,fr'})
        .then(users => this.users = users);

    this.onFiltersApply = function (filters) {
        UserTableService.fetchUsers(filters)
            .then(users => this.users = users);
    };
}