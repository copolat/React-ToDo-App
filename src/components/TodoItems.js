function TodoItems (props) {

  function handleRemove(e) {
    props.removeItem(e.target.id)
  }

  function handleEdit (e){
    props.editItems(e.target.id, e.target.value)
  }

  return props.tasks.map(item => {
    return (
      <li key={item.id} >
        <input id={item.id} defaultValue={item.title} onBlur={handleEdit}/>  &nbsp;
        <span id={item.id} className="remove-item" onClick={handleRemove}>(Remove)</span>
      </li>
    )
  });
}

export default TodoItems;






































// //My codes
// function TodoItems(props) { //Since this is a functional component, we need to pass this "props" parameter.  THIS PROPS IS AN OBJECT.
//  function handleRemove(e) {
//     props.removeItem(e.target.id)
//   }
//   function handleEdit (e){
//     props.editItem(e.target.id)
    
//   }
//   return props.tasks.map(item => {      //This component imports tasks from App component. Since it is an array (tasks) we need to iterate through it with map.
//     return (
//     <li key={item.id}>
//       <input id={item.id} defaultValue={item.title} onBlur={handleEdit}/> &nbsp;
//       <span id={item.id}className="remove-item" onClick={handleRemove}>(Remove)</span>
//     </li> 
//     ) // If we put <ul> here, then for every item we will create a new list.
//   })    
// }

// export default TodoItems;
