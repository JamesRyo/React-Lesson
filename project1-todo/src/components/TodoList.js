import React from 'react'
import { Link } from 'react-router-dom';

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className="collection">
     { todos.length > 0 
        ? todos.map(todo => 
            <p key={todo.id} onClick={(e)=>deleteTodo(todo.id)} className="collection-item">
            {todo.content} 
            <Link to={'/todo/' + todo.id}>
              <span className="waves-effect waves-light btn">View</span>
            </Link>
            </p>
          )
          : (<p>You have completed all your tasks. Yay!</p>)}
    </div>
  )
}

export default TodoList
