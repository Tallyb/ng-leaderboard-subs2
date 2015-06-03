# ng-leaderboard-subs
Mutliple subscriptions with ng-angular

so what is in here? 
I am showing how meteor (and angular) is handling multiple subscriptions. 

If you check the server DB (your mongo instance) - you will see 9 documents. 
You can check the client lcoal database by placing on the console: 
```
console.table(Players.find().fetch())
```
Your local DB should have between 3 and 5 documents (3 if both subscriptions fully overlap, 5 if totally not overlap). 

When you will stop the top subscription you will be left with 3 documents. 
You will still see 2 players in the list but they will be the top 2 from the first 3 alphabetically sort (Einsteing, Gauss, Shannon).

Stopping the button subscription will leave you with 2 records. The same 2 as above, but sorted alphabetically. 

This explains how to use subscriptions to get only part of the data to your client. 
