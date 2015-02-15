Meteor.startup(function () {
  Session.setDefault('activeTemplate', 'login');
});

Template.body.helpers({
  activeTemplate: function () {
    return Session.get('activeTemplate');
  },
});
