angular.module('myDirect')
    .directive('myNgHide', function () {
        return {
            restrict: 'A',
            multiElement: true,
            link: function (scope, element, attr) {
                element[0].hidden = attr['myNgHide'] === 'true';
            }
        }
    });