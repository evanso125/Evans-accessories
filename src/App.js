import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import SingleProduct from './components/SingleProduct';
import Carousel from './components/Carousel';

function App() {

  return (
    <Router>
      <div className="App">
        
        
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path="/" element={<GetProducts />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/carousel" element={<Carousel />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
