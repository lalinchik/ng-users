angular.module('myDirect')
    .directive('myNgShow', function () {
        return {
            restrict: 'A',
            multiElement: true,
            link: function (scope, element, attr) {
                element[0].hidden = attr['myNgShow'] === 'false';
            }
        }
    });