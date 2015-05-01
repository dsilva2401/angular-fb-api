# Angular Facebook Api
An angular module for Facebook Api

##### Import module
```javascript
angular.module('myApp', ['fb-api'])
```

##### Setup Facebook Api
```javascript
.config(['$fbProvider', function($fbProvider) {
    
    $fbProvider.init({
        appId   : '<app-id>',
        xfbml   : true,
        version : 'v2.3'
    });

}]);
```

##### Start using facebook api
```javascript
.controller('myAppController', ['$scope', '$fb', function($scope, $fb) {
    
    $scope.showMyName = function() {
        $fb.api({
            path    : '/me',
            params  : {
                fields  : 'name'
            }
        }).then(function(resp) {
           alert( resp.name );
        });
    }

}])
```
