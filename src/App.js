
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import SignUp from "./Component/SignUp"
import SignIn from './Component/SignIn';
import AddProducts from './Component/AddProducts';
import GetPrtoducts from './Component/GetProducts';
function App() {
  return (
    <Router>

    <div className="App">
      <header className='App-header'>
        <h1>Great Phone Accessories Stores</h1>
        
      </header>
      <Routes>
        <Route path='/signup'element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/addproduct' element={<AddProducts/>}/>
        <Route path='/' element={<GetPrtoducts/>} />
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
