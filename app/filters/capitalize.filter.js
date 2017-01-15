angular.module('filters', [])
  .filter('capitalize',
    function () {
      return (input) => {
        if (!angular.isString(input)) {
          return input;
        }

        const stringArray = input.split(' ').map(str => `str.charAt(0).toUpperCase()} ${str.slice(1).toLowerCase()}`);

        return stringArray.join(' ');
      }
    });