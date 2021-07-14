import logo from './logo.svg';
import './App.css';
import LogIn from './components/LogIn';
import RegisterPage from './components/RegisterPage';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import validation from './components/validation';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}><Home/></Route>
        <Route path="/LogIn"  component={LogIn}><LogIn/></Route>
        <Route path="/registerpage"  component={RegisterPage}> <RegisterPage/></Route>
        <Route path="/tasklist"  component={TaskList}> <TaskList/></Route>
        <Route path="/addtask"  component={AddTask}> <AddTask/></Route>
        
      </Switch> 
      </BrowserRouter>
    </div>
  );

return(
  <validation/>
)
}

export default App;
