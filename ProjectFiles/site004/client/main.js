import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  userposts: [
    { 
      username: "Craig",
      createdDate: new Date(),
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, incidunt?"
    },
    { 
      username: "Rob",
      createdDate: new Date(),
      text: "Post #2"
    },
    { 
      username: "Billy",
      createdDate: new Date(),
      text: "Happy Holidays"
    },
    { 
      username: "Craig",
      createdDate: new Date(),
      text: "Post #3"
    },
  ]
});