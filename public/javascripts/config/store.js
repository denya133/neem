var adapter = DS.RESTAdapter.extend({

  serializer: DS.RESTSerializer.extend({
    primaryKey: function(type) {
      return '_id';
    },
    serializeId: function(id) {
      return id.toString();
    }
  })
});

module.exports = DS.Store.extend({
  revision: 11,
  adapter: adapter
});
