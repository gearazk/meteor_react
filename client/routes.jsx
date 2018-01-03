import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout';
import ResolutionPage from "./components/resolution/ResolutionPage";


FlowRouter.route('/',{
  action(){
    mount( MainLayout , { content:<ResolutionPage /> })
  }
});