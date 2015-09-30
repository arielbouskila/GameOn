app.directive('focusMe', function ($timeout, $parse) {
  return {
    link: function (scope, element, attrs) {
      var model = $parse(attrs.focusMe);
      var elementFocusedPromise = null;
      scope.$watch(model, function (value) {
        if (value === true) {
          elementFocusedPromise = $timeout(function () {
            element[0].focus();
          });
        }
      });
      element.bind('blur', function () {

      })
    }
  };
});
