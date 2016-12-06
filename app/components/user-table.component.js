'use strict';

angular.module('userTable')
    .component('userTable', {
        templateUrl: 'components/user-table.tmpl.html',
        controller: UserTableController,
        controllerAs: 'ctrl'
    });