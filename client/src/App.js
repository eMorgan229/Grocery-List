import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import GroceryList from './components/GroceryList';
import ViewAllGroceryLists from './components/ViewAllGroceryLists';
import NavBar from './components/NavBar';
//bootstrap below:


function App() {
  const [lists, setLists] = useState([])
  const [user, setUser] = useState({})

  // this persists user session
  useEffect(() => {
    fetch('/me').then((res)=> {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  },[])

  useEffect(()=>{
    fetch('/grocery_lists') 
    .then(r=>r.json())
    .then(setLists)
  }, [])

  function handleLogin(user) {
    setUser(user)
  }

  function handleAddList(addedList) {
    setLists((list) => [...list, addedList]);
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/login" element={<Login onLogin={handleLogin}/>}/>
        <Route exact path="/signup" element={<SignUp onLogin={handleLogin}/>}/>
        <Route exact path="/view_grocery_lists" element={<ViewAllGroceryLists user={user} lists={lists} onAddList={handleAddList}/>}/>
        <Route exact path="grocery_list/:id" element={<GroceryList user={user} lists={lists}/>}/>

      </Routes>
    </div>
    
  );
}

export default App;
