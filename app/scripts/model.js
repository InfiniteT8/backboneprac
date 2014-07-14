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