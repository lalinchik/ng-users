angular.module('filtersForm')
    .component('filtersForm', {
        templateUrl: 'components/filters-form/filters-form.tmpl.html',
        controller: FiltersFormController,
        bindings: {
            filtersApply: '&'
        }
    });