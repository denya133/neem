var SessionsNewController = Ember.ObjectController.extend({
  loginUser: function() {
    var router = this.get('target');
    var data = this.getProperties('email', 'password');

    $.post('/users/session', data, function(results) {
      App.AuthManager.authenticate(results.user.apikey.key, results.user.apikey.userId);
      router.transitionTo('index');
    });
  }
});

module.exports = SessionsNewController;

