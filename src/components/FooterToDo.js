import React, { Component } from 'react';
import '../csss/App.css';
import '../csss/index.css';
import { connect } from 'react-redux';
import { setVisibilityFilter ,VisibilityFilters } from '../actions';

class FooterToDo extends Component{

  constructor(props){
    super(props);
    this.state = {
      flagAll: "tag-cheched",
      flagActive: "",
      flagCompleted: "",
      activeStatus : "",
    }

  }

  resertFlagTag = () =>{
    this.setState({
      flagAll: "",
      flagActive: "",
      flagCompleted: "",
      activeStatus : ""
    });
  }

  allTodo = () => {
    this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
    this.resertFlagTag();
    this.setState({flagAll : "tag-cheched"});
  }

  activeTodo = () => {
    this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    this.resertFlagTag();
    this.setState({flagActive : "tag-cheched"});
  }

  completedTodo = () => {
    this.props.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
    this.resertFlagTag();
    this.setState({flagCompleted : "tag-cheched"});
  }

  clearCompleted = () => {
    let listtodo = this.props.list.filter(todo => (todo.category !== "completed"));
    this.props.update(listtodo);
  }

  checkItemActive(){
    let temp = this.props.list.filter(todo => todo.category === "active");
    return temp.length;
  }


  showClearCompleted(){
  //  let listfilter = this.props.list.filter(todo => todo.category === "completed");
  //  if(listfilter.length > 0){
  //    return <li className="clear-completed-show" onClick={this.clearCompleted}><a>Clear Completed</a></li>;
  //  }else{
  //    return <li className="clear-completed" onClick={this.clearCompleted}><a>Clear Completed</a></li>;
  //  }
  }

  render(){
    let clearcompleted = this.showClearCompleted();
      return(
              <div className="footer form-item">
                  <ul>
                    <li> items left</li>
                    <li className="item-middle">
                      <ul>
                        <li className={this.state.flagAll} onClick={this.allTodo}>All</li>
                        <li className={this.state.flagActive} onClick={this.activeTodo}>Active</li>
                        <li className={this.state.flagCompleted} onClick={this.completedTodo}>Completed</li>
                      </ul>
                    </li>
                    {clearcompleted}
                  </ul>
                </div>
      );
  }
}

function mapStateToProps(state) {
  return { myFilter: state.visibilityFilter}
}

export default connect(mapStateToProps)(FooterToDo);
