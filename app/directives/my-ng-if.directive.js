angular.module('myDirect')
    .directive('myNgIf', function () {
        return {
            restrict: 'A',
            multiElement: true,
            link: function (scope, element, attr) {
                if (attr['myNgIf'] !== 'true') {
                    element.remove();
                }
            }
        }
    });