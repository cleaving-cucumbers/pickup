Template.login.events({
  'click #facebook-login': function(event) {
    Meteor.loginWithFacebook({}, function(err) {
      if (err) {
        console.log(err);
        throw new Meteor.Error("Facebook login failed");
      }
      Session.set('activeTemplate', 'activitySelection');
    });
  }
});

Template.body.helpers({
  redirectToActivitySelection: function () {
    return Session.set('activeTemplate', 'activitySelection');
  }
});
