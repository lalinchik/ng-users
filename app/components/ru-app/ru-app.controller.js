function RandomuserAppController(UserTableService) {
    UserTableService.fetchUsers()
        .then(users => this.users = users);

    this.onFiltersApply = function (filters) {
        UserTableService.setFilters(filters);
        UserTableService.fetchUsers()
            .then(users => this.users = users);
    };

    this.onPageChange = function (page) {
        UserTableService.setPage(page);
        UserTableService.fetchUsers()
            .then(users => this.users = users);
    };

    this.onLimitChange = function (limit) {
        UserTableService.setLimit(limit);
        UserTableService.fetchUsers()
            .then(users => this.users = users);
    };
}