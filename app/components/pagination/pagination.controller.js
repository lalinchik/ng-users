function PaginationController($injector, UserTableService) {
    this.paginationListConst = $injector.get('paginationListConst');

    this.selectNumber = function (limit) {
        UserTableService.fetchUsers({limit: limit})
            .then(users => this.users = users);
    }
}