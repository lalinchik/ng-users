angular.module('userFiltersForm')
    .component('userFiltersForm', {
        templateUrl: 'components/user-filters-form/user-filters-form.tmpl.html',
        controller: UserFiltersFormController,
        bindings: {
            filtersApply: '&'
        }
    });