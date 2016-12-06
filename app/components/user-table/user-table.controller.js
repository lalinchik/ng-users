function UserTableController(UserTableService) {
    UserTableService.fetchUsers({limit:10, gender:'female', nat:'us,dk,fr'})
        .then(users => this.users = users);
}