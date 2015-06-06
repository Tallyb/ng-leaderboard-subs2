/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard',[
    'angular-meteor'
])

.controller ('leaderBoardCtrl', function ($scope, $meteor){

    $scope.players = $meteor.collection (Players);
    $scope.topPlayers = $meteor.collection (function (){
        return Players.find ({}, {sort: {score: -1}, limit: 2});
    });

    // Here you can define multiple subscriptions. The correstponding server subscriptions are on server/leaderboard.js
    $scope.subscriptions = [
        {
            name: "3 Top Players",
            sub: "topPlayers"
        },
        {
            name: "4 First Players (Alphabetically)",
            sub: "firstPlayers"
        },
        {
            name: "All Players",
            sub: "allPlayers"
        }
    ];

    $scope.startHandle = function (sub) {
        return $meteor.subscribe(sub.sub).then(function(handle) {
            sub.handle = handle;
        });
    };

    $scope.stopHandle = function (sub) {
        sub.handle.stop();
        sub.handle = undefined;
    }
});



