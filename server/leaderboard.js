/**
 * Created by Tally on 02/06/2015.
 */
Meteor.startup(function () {
    if (Players.find().count() === 0) {
        var names = ["Ada Lovelace",
            "Grace Hopper",
            "Marie Curie",
            "Albert Einstein",
            "Carl Friedrich Gauss",
            "Nikola Tesla",
            "Claude Shannon",
            "Galileo Galilei",
            "Isaac Newton",
            "Pierre de Fermat"
        ];
        _.each(names, function (name) {
            Players.insert({
                name: name,
                score: Math.floor(Random.fraction() * 10) * 5
            });
        });
    }
});

Meteor.publish('topPlayers', function (){
    return Players.find({}, {sort: {score: -1}, limit: 3});
});
Meteor.publish('firstPlayers', function (){
    return Players.find({}, {sort: {name: 1}, limit: 4});
});
