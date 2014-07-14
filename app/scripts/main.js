// Fetching the data & creating my view
all_hackers.fetch().done(function () {

  new HackerView( { collection: all_hackers } );
  
});
 
