/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard',[
    'angular-meteor'
])

.controller ('leaderBoardCtrl', function ($scope, $meteor){

    var handles = [];
    $meteor.subscribe('topPlayers').then(function(handle) {
        handles [0] = handle;
        $scope.topPlayers = $meteor.collection(function (){
          return Players.find ({}, {sort: {score: -1}, limit: 2});
        });
    });

    $meteor.subscribe('firstPlayers').then(function(handle) {
        handles [1] = handle;
        $scope.firstPlayers = $meteor.collection(function (){
            return Players.find ({}, {sort: {name: 1}, limit: 3});
        });
    });

    $scope.stopHandle = function (handleId){
        handles [handleId].stop();
    }

});



