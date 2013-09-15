var UsersNewController = Ember.ObjectController.extend({
  createUser: function() {
    var router = this.get('target');
    var data   = this.getProperties('first_name', 'last_name', 'email', 'password')
    var user   = this.get('model');

    $.post('/users', { user: data }, function(results) {
      App.AuthManager.authenticate(results.user.apikey.key, results.user.apikey.userId);
      router.transitionTo('index');
    });
  }
});

module.exports = UsersNewController;
