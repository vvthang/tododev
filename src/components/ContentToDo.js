import React, { Component } from 'react';
import '../csss/App.css';
import '../csss/index.css';
import ContentToDoItem from './ContentToDoItem';
import { VisibilityFilters } from '../actions'
import { connect } from 'react-redux';

class ContentToDo extends Component{

  getVisibleTodos = (todos, filter) =>{
      switch(filter){
        case VisibilityFilters.SHOW_ALL:
          return todos
        case VisibilityFilters.SHOW_COMPLETED:
          return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
          return todos.filter(todo => !todo.completed)
        default:
          throw new Error('Unknow filter' + filter)
      }

  }

  render(){
    let todos = this.props.todos;
    let filter = this.props.filter;

    return(
      <div>
        {
          this.getVisibleTodos(todos, filter).map(todo =>
            <ContentToDoItem todo={todo} key={todo.id}/>
          )
        }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { 
    todos : state.todos,
    filter: state.visibilityFilter
  }
}

export default connect(mapStateToProps)(ContentToDo);
