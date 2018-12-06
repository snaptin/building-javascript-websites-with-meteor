import { Template } from 'meteor/templating';

import { Userposts } from '../api/userposts.js';

import './userpost.js';
import './body.html';

Template.body.events({
  'submit .new-userpost'(event) {
    event.preventDefault();
    console.log("Form submitted");
  }
});

Template.body.helpers({
    userposts() {
      return Userposts.find({});
    },
  });