import { Template } from 'meteor/templating';

import { Userposts } from '../api/userposts.js';

import './userpost.js';
import './body.html';

Template.body.helpers({
    userposts() {
      return Userposts.find({});
    },
  });