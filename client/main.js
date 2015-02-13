
Template.profilePicture.helpers({
  getFacebookId: function () {
    return Meteor.user().services.facebook.id
  }
});
