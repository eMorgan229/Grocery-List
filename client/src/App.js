import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import GroceryList from './components/GroceryList';
import ViewAllGroceryLists from './components/ViewAllGroceryLists';
import NavBar from './components/NavBar';
//bootstrap below:


function App() {
  
  const [lists, setLists] = useState([])

  useEffect(()=>{
    fetch('/grocery_lists') 
    .then(r=>r.json())
    .then(setLists)
  }, [])

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<GroceryList />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/view_grocery_lists" element={<ViewAllGroceryLists lists={lists} />}/>

      </Routes>
    </div>
    
  );
}

export default App;
