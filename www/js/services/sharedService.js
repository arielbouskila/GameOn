app.service('sharedPropertiesService', function () {
    var property = [];
    var team = [];
    return {
      getProperty: function () {
        return property;
      },
      setProperty: function(value) {
        property = value;
      },
      setTeam: function(value) {
        team = value;
      },
      getTeam: function(){
        return team;
      }
    };
  });
