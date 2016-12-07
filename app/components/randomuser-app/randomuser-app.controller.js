function RandomuserAppController(UserTableService) {
    UserTableService.fetchUsers({limit: 100, gender: 'female', nat: 'us,dk,fr'})
        .then(users => this.users = users);
}