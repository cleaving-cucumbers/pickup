Template.login.events({
  'click #facebook-login': function(event) {
    Meteor.loginWithFacebook({}, function(err) {
      if (err) {
        console.log(err);
        throw new Meteor.Error('Facebook login failed');
      }
      Session.set('activeTemplate', 'activitySelection');
    });
  }
});

Template.login.helpers({
  redirectToActivitySelection: function () {
    console.log
    Session.set('activeTemplate', 'activitySelection');
  }
});
