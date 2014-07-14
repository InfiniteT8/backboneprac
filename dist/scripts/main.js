var Hackers = Backbone.Model.extend ({

  defaults: {
    alias: '',
    hideout: 'Atv',
    genius: true,
    motto: ''
  },

  idAttribute: ('_id'),
  initialize: function () {
    var alias = this.get('alias');
    console.log(alias + ' has been added to your list of hackers.');
  }

});

var JSHackers = Backbone.Collection.extend ({

  model: Hackers,
  url: "http://tiy-atl-fe-server.herokuapp.com/collections/Terry"
});

var all_hackers = new JSHackers();
var HackerView = Backbone.View.extend({
 
  template: function(model){
    return _.template($('#hacker_list').html());
  },
 
  el: $('.hero-unit ul'),
 
  initialize: function(){
    this.render();
    this.collection.on('change', this.render, this);
    this.collection.on('destroy', this.render, this);
  },
 
  render: function(){
    this.$el.html( this.template(this.collection) )
  }
 
});
// Fetching the data & creating my view
all_hackers.fetch().done(function () {

  new HackerView( { collection: all_hackers } );
  
});
 
