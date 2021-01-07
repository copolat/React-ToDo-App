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
      ],
      newTask: ''            // This property will store tasks first and then we will push it to the 'tasks' array              
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {           // This function will be called every time we click on "Add" button
    this.setState({          // This is how to set something in STATE.
      newTask: e.target.value // This code line will get whatever we put in the input box and will assign it to newTask
    })
  }

  handleClick(e) {          // This code line will listen to the ADD button and every time we click on it, we will call this function
    if(this.state.newTask.trim()) {     // Check the input box, if it is empty or not
      //Create a new object for tasks array
      let newItem = {
          title: this.state.newTask, //In React there is no real DOM, we use virtual DOM. So, this code line will get the value we have assigned in the newTask property
          completed: false,    // This is default value for every new task  
          id: Date.now()      // This is a temporary solution for id till we connect the app to the database
      } 
      // Concatenate new task object to the previous tasks in the state
      // this.setState(prevState => {                 // This code line will set the state
      //   return {                                   // Since in setState we use a callback function, we return 
      //     tasks: prevState.tasks.concat(newItem)   // This line is concatenating the new task with previous tasks (kind of pushing items to the tasks array)
      //   }
      // })
      // Another concatenating method you might find easier
      const newTasks = [...this.state.tasks, newItem] // Three dots here means bring everthing curently in this "tasks" object. 
      this.setState({
        tasks: newTasks
      })
      // Empty the newTask property in the state
      this.state.newTask =""
    } else {
      alert("Enter a value")
    }
  }
  render() {
    // console.log(this.state.newTask) // This is to test the eventlistener
    return (
    <div>
      <form>
        <input type="text" onInput={this.handleInput} value={this.state.newTask}/>     
        <button type="button" onClick={this.handleClick}>Add</button>
      </form>
      <ul>
        <TodoItems tasks={this.state.tasks}/>
      </ul>
    </div>
    )
  }
}

export default TodoList;