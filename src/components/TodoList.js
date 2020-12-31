import React from 'react'
import TodoItems from './TodoItems'  // We import 

class TodoList extends React.Component {
  constructor(props) {       // Since this is a class we need a constructor method
    super(props);            // This code is a must for all constructor
    this.state = {           // The state is the part which will make changes in virtual DOM
      tasks: [               // We will store our tasks in an array
        {                    // Every task will be stored as an object in the array
          title: 'Get a shopping cart',  // For every item we will have the same properties: title, completed, id. 
          completed: false,  // Since we do not have a backend yet, we hardcoded two tasks in order to be able to work with the functionality of the app.
          id: 123456789
        },
        {
          title: 'Buy milk',
          completed: false,
          id: 234567890
        },
      ]              
    }
  }
  render() {
    return (
    <div>
      <form>
        <input type="text" />
        <button type="button">Add</button>
      </form>
      <ul>
        <TodoItems tasks={this.state.tasks}/>
      </ul>
    </div>
    )
  }
}

export default TodoList;