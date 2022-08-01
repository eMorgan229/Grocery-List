import './App.css';
import Login from './components/Login';
import GroceryList from './components/GroceryList';
import ViewAllGroceryLists from './components/ViewAllGroceryLists';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Login/>
      <GroceryList/>
      <ViewAllGroceryLists/>
    </div>
    
  );
}

export default App;
