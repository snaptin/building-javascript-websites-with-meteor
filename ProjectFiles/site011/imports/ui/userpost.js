import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './userpost.html';

Template.userpost.events({
    'click .delete'() {
        Meteor.call('userposts.remove', this._id);
    },
});