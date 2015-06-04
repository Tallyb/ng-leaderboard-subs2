/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard',[
    'angular-meteor'
])

.controller ('leaderBoardCtrl', function ($scope, $meteor){

    $scope.handles = [];
    $scope.startTop = function () {
        return $meteor.subscribe('topPlayers').then(function(handle) {
            $scope.handles [0] = handle;
            // The collection definition can be inside or outside the promise success function
            // The handler capture must be inside, as it returns by the promise
            $scope.topPlayers = $meteor.collection(function (){
                return Players.find ({}, {sort: {score: -1}, limit: 3});
            });
        });
    };

    $scope.startFirst = function (){
        return $meteor.subscribe('firstPlayers').then(function(handle) {
            $scope.handles [1] = handle;
        });
    };

    // here the collection definition is outside the promise success function
    $scope.firstPlayers = $meteor.collection(function (){
        return Players.find ({}, {sort: {name: 1}, limit: 4});
    });


    $scope.stopHandle = function (handleId){
        $scope.handles [handleId].stop();
        $scope.handles [handleId] = undefined;

    }

});



