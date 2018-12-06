import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Userposts = new Mongo.Collection('userposts');

Meteor.methods({
    'userposts.insert'(text) {
        check(text, String);

        Userposts.insert({
            text,
            createdDate: new Date(),
            username: "Craig"
        });
    }
});