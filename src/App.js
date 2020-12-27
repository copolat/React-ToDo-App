import Button from './Button';

function buttonClicked(){
  alert('You clicked on me!!');
}

function App(props) {
  return (
      <div>
        <h1>{props.appName}</h1>
        <Button title='Click Me' click={buttonClicked}/>
      </div>
  );
}

export default App;
