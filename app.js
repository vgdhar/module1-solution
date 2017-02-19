(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope)
 {
   $scope.list="";
  $scope.calculateQuantity = function() {
        var x= $scope.list;
        if(x.length==''){
          $scope.myMsgStyle={color: "red"};
          $scope.message="Please enter data first";}
        else{
              var count=0;
              $scope.arrayOfStrings=$scope.list.split(',');
              for(var i=0;i<$scope.arrayOfStrings.length;i++)
              {
                if($scope.arrayOfStrings[i]==='')
                count=count+0;
                else
                  count=count+1;
                }
                //$scope.totalItems=count;
                if (count <= 3) {
                  $scope.myMsgStyle={color: "green"};
                  $scope.message="Enjoy!";
                  }
                else if (count > 3)
                  {
                  $scope.myMsgStyle={color: "green"};
                  $scope.message="Too much!";
                  }
            }

    };

  }

})();
