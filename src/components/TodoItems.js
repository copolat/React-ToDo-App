function TodoItems(props) { //Since this is a functional component, we need to pass this "props" parameter.  THIS PROPS IS AN OBJECT.
  return props.tasks.map(item => {      //This component imports tasks from App component. Since it is an array (tasks) we need to iterate through it with map.
    return (
    <li>
      {item.title} &nbsp;
      <span className="remove-item">(Remove)</span>
    </li> 
    ) // If we put <ul> here, then for every item we will create a new list.
  })    
}

export default TodoItems;