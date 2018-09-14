import React, { Component } from 'react';
import '../csss/App.css';
import '../csss/index.css';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class HeaderToDo extends Component{

_handlerPressEnter = (e) =>{
  if(e.key === 'Enter'){
    this.props.dispatch(addTodo(this.refs.headertxt.value));
    this.refs.headertxt.value = '';
  }
}

  render(){
    return(
          <div className="header form-item">
            <input type="checkbox" name="toggel" className="toggel-all" />
            <input className="inputtext" ref="headertxt" onKeyPress={this._handlerPressEnter} placeholder="What need to be done?" />
          </div>
    );
  }
}

function mapStateToProps(state) {
  return {list: state.todos};
}

export default connect(mapStateToProps)(HeaderToDo);
