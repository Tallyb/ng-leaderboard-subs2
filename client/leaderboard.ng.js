/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard',[
    'angular-meteor',
    'ngMaterial',
    'ui.router',
    'ngAnimate'
])

.controller ('leaderBoardCtrl', function ($scope, $meteor){

    $scope.$meteorSubscribe('topPlayers').then(function(handle) {
        $scope.topPlayers = $meteor.collection(function (){
          return Players.find ({}, {sort: {score: -1}, limit: 2});
        });
    });

    $scope.$meteorSubscribe('firstPlayers').then(function(handle) {
        $scope.firstPlayers = $meteor.collection(function (){
            return Players.find ({}, {sort: {name: 1}, limit: 3});
        });
    });

});



