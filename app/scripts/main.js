// Fetching the data & creating my view
all_hackers.fetch().done(function () {

  new HackerView( { collection: all_hackers } );

  // I could also create a new student
//var bobby = new Hacker({ name: 'Bobby Stamp' });
//all_hackers.add(div).save();
 
 
// I could also do some updating to my view
/*
var h = all_hackers.findWhere({alias: "ALIAS"});
h.set('hideout', 'Uncle Bobs basement');
h.destroy();
*/

});
 
