'use strict';

angular.module('userTable')
    .component('userTable', {
        templateUrl: 'components/user-table/user-table.tmpl.html',
        controllerAs: 'ctrl',
        bindings: {
            users: '<'
        }
    });