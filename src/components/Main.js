import React, { Component } from 'react';
import '../csss/App.css';
import '../csss/index.css';
import {connect} from 'react-redux';
import ContentToDo from './ContentToDo';
import HeaderToDo from './HeaderToDo';
import FooterToDo from './FooterToDo';


class Main extends Component{

  render(){
    return(
        <div className="main">
          <HeaderToDo />
          <ContentToDo />
          <FooterToDo />
        </div>
    );
  }
}

export default connect()(Main);
