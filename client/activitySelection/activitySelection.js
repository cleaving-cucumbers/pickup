Games = new Mongo.Collection('games');

Template.activitySelection.events({
  'click button': function (event) {
    Games.insert({activity: event.target.name, createdAt: new Date()});
  }
});

Template.activitySelection.helpers({});
