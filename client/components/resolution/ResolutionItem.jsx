import React from 'react';

export default class ResolutionItem extends React.Component{
  
  toggleCheck(){
    Meteor.call('toggleResolution',this.props.resolution)
  }
  
  deleteResolution(){
    Meteor.call('deleteResolution',this.props.resolution)
  }
  
  resoClass(){
    return this.props.resolution.done ? 'checked' : '';
  }
  resoStatus(){
    return this.props.resolution.done ? <span className="completed">Done</span> : '';
  }
  
  render (){
    return(
      <li className={this.resoClass()}>
        <input type="checkbox" readOnly={true} checked={this.props.resolution.done} onClick={this.toggleCheck.bind(this)}/>
        {this.props.resolution.text}
        {this.resoStatus()}
        <button className="btn-cancel" onClick={this.deleteResolution.bind(this)}>
          &times;
        </button>
      </li>
    )
  }
}

