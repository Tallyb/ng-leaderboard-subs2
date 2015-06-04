# ng-leaderboard-subs
Mutliple subscriptions with ng-angular http://ng-leaderboard-subs.meteor.com/

so what is in here? 
I am showing how meteor (and angular) is handling multiple subscriptions to the same collection. 

If you check the server DB (your mongo instance) - the players collection has 9 documents.  score is generated randomly on first creation. 

The "top players" subscription brings the top 3 players by score. 
The "first players" subscription brings the first 4 players by name (alphabetically). 

You can start and stop the subscriptions dynamically. at any point you may check the client lcoal database by placing on the console: 
```
console.table(Players.find().fetch())
```

Your local DB should have 0 documents if both subscriptions are inactive, and between 4 and 7 documents if both subscriptions are active (4 if both subscriptions fully overlap, 7 if totally not overlap). 

When you will stop the top subscription you will be left with 4 documents. 
You will still see 3 players in the list but they will be the top 3 by scores from the first 4 alphabetically sort ( Lovelace, Einstein, Gauss, Shannon).

Stopping the bottom subscription will leave you with 3 records (only one subscription is active and it returns 3 documents). Both documents will be shown at the top and bottom, but sorted accordingly (score, name).  

This explains how to use subscriptions to get only part of the data to your client. 
