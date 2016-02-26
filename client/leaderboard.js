/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard',[
    'angular-meteor'
])

.controller ('leaderBoardCtrl', function ($scope, $reactive){

    //if you are using the controllerAs vm syntax, as defined as best practice. you should write
    //var vm=this;
    // and then should make vm a reactive variable
   // $reactive(vm).attach($scope);

    $scope.helpers ({

        // The helpers define the angular $scope items that will be displayed in the view.
        // helpers are "reactive" and change whenever the underlying collection changes.
        // you can see all the players that exist in the minimongo collection by typing in your browser console:
        // console.table(Players.find().fetch())

        // This Mongo Cursor returns all the players that exist in the local minimongo collection
       players:  () => Players.find ({}), //ES6 syntax

        // This Mongo Cursor collection returns only the top 2 players that exist in the local minimongo collection
        topPlayers: function (){ //ES5 syntax
           return Players.find ({}, {sort: {score: -1}, limit: 2});
        }
    });

    // Here you can define multiple subscriptions. The corresponding server subscriptions are on server/leaderboard.js
    // when we click on a button on each list it will send the sub name and we will subscribe to it
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
        //this is a dynamic function that will subscribe to different subscription, according to the handler you click on.
        // For example, if you press the "3 top players" subscribe button it will be translated to
        // sub.handle = this.subscribe ('topPlayers');
        // Each subscription in the subscriptions array will hold a "handle" to stop this specific subscription.
        sub.handle = $scope.subscribe( sub.sub );
    };

    $scope.stopHandle = function (sub) {
        // and here we will stop the subscription according to the handler we previously saved
        sub.handle.stop();
        sub.handle = undefined;
    }
});



