import { Meteor } from 'meteor/meteor';
import { Resolutions } from '../import/api/resolutions';

Meteor.methods({
  
  createResolution(text, user){
    Resolutions.insert({
      text,
      'user'      : user,
      'createdAt' : new Date(),
      'done'      : false
    });
  },
  
  toggleResolution(resolution){
    Resolutions.update(resolution._id,{
      $set: {done : !resolution.done}
    })
  },
  deleteResolution(resolution){
    Resolutions.remove(resolution._id)
  }
  
});
