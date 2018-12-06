import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Userposts } from '../api/userposts.js';

import './editmodal.js';
import './userpost.js';
import './body.html';

Template.registerHelper('formatDate', function(date) {
  return moment(date).format("MM/DD/YYYY");
});

Template.body.events({
  'submit .new-userpost'(event) {
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;

    Meteor.call('userposts.insert', text);

    target.text.value = '';
  },
});

Template.body.helpers({
  userposts() {
    return Userposts.find({}, { sort: { createdDate: -1 }});
  },
});