app.service('sharedPropertiesService', function () {
    var property = [];
    return {
      getProperty: function () {
        return property;
      },
      setProperty: function(value) {
        property = value;
      }
    };
  });
