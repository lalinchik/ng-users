angular.module('pagination').component('pagination', {
    templateUrl: 'components/pagination/pagination.tmpl.html',
    controller: PaginationController,
    bindings: {
        pageChange: '&',
        limitChange: '&',
    }
});