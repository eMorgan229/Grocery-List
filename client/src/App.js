import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import GroceryList from './components/GroceryList';
import ViewAllGroceryLists from './components/ViewAllGroceryLists';
import NavBar from './components/NavBar';
//bootstrap below:


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<GroceryList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/view_grocery_lists" element={<ViewAllGroceryLists/>}/>

      </Routes>
    </div>
    
  );
}

export default App;
