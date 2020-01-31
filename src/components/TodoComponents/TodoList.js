import React from 'react';
import Item from './Todo';

const TodoList = props => {

  return (
    <div className="shopping-list">
      {props.todos.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Tasks!
      </button>
    </div>
  );
};

export default TodoList;