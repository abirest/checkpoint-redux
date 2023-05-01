import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './component/ListTask';
import AddTask from './component/AddTask';

function App() {
  return (
  <div className="App">
<h1 className="app-title">To Do List</h1>
      <AddTask/>
  <ListTask/>
    </div>
  );
}

  


    
  


export default App;
