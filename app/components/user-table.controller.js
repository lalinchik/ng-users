function UserTableController($http) {
    $http.get('https://randomuser.me/api/?results=5')
        .then(response => response.data.results,
            () => console.log('Oh, sorry')
        ).then(users => {
           this.users = users;
    });


}