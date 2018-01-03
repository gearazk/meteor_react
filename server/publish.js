
import { Resolutions } from '../import/api/resolutions';

Meteor.publish('allResolutions',()=>{
  return Resolutions.find({});
});


Meteor.publish('userResolutions',()=>{
  return Resolutions.find({'user':Meteor.userId()});
});

