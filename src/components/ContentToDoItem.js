import React, { Component } from 'react';
import '../csss/App.css';
import '../csss/index.css';
import { toggleTodo, deleteTodo } from '../actions';
import { connect } from 'react-redux';

class ContentToDoItem extends Component{

  checkCompleted = () => {
    this.props.dispatch(toggleTodo(this.props.todo.id));
  }

  updateUIChecked = () => {
    if(this.props.todo.completed){
      return {
        classNameInput: "check-item-checked",
        classNameLabel: "item-content-checked"
      }
    }else{
      return {
        classNameInput: "check-item",
        classNameLabel: "item-content"
      }
    }
  }


  
  render(){
    let id = this.props.todo.id;
    let isChecked = this.updateUIChecked();
    return(
        <div className="todolist form-item" id={id}>
          <input type="checkbox" ref="contenttxt" name="check-item" onClick={this.checkCompleted} className={isChecked.classNameInput} />
          <label className={isChecked.classNameLabel} >{this.props.todo.text}</label>
          <button className="destroy" onClick={() => this.props.dispatch(deleteTodo(id))}></button>
        </div>
    );
  } 
}


export default connect()(ContentToDoItem);
