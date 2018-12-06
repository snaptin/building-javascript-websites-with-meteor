import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Userposts } from '../api/userposts.js';

import './userpost.js';
import './body.html';

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