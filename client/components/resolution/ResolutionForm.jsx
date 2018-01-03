import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

export default class ResolutionForm extends TrackerReact(React.Component){
  
  createResolution(event){
    event.preventDefault();
    const text = this.refs.resolution.value.trim();
    
    Meteor.call('createResolution',text,Meteor.userId(),()=>{
      this.refs.resolution.value = ''
    });

  }
  
  render (){
    return(
      <form  className="new-resolution" onSubmit={this.createResolution.bind(this)}>
        <input type="text" ref='resolution' placeholder='Res'/>
      </form>
    )
  }
}

