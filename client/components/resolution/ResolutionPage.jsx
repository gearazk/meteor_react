import React from 'react';
import ResolutionForm from './ResolutionForm'
import ResolutionItem from './ResolutionItem'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { Resolutions } from '/import/api/resolutions';

export default class ResolutionPage extends TrackerReact(React.Component){
  
  constructor(){
    super();
    this.state = {
      subscription:{
        resolutions : Meteor.subscribe('userResolutions')
      }
    }
  }
  
  componentWillUnmount(){
    this.state.subscription.resolutions.stop()
  }
  
  resolutions(){
    return Resolutions.find({}).fetch();
  }
  
  resolutionsRender(){
    return this.resolutions().map((resolution)=>{
      return <ResolutionItem key={resolution._id} resolution={resolution} />
    })
  }
  
  render (){
    return(
      <div className='app'>
        <h1>List</h1>
        <ResolutionForm/>
        <ul className="resolutions">
          {this.resolutionsRender()}
        </ul>
      </div>
    )
  }
}

