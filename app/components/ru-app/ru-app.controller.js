function RandomuserAppController(UserTableService) {
    UserTableService.fetchUsers({limit: 10})
        .then(users => this.users = users);

    this.onFiltersApply = function (filters) {
        UserTableService.fetchUsers(filters)
            .then(users => this.users = users);
    };
}