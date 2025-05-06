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
import Cases from './components/Cases';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ShopNow  from './components/ShopNow';

function App() {

  return (
    <Router>
      <div className="App">
        
        
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path="/getproducts" element={<GetProducts />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/category/cases" element={<Cases />} />
          <Route path="/category/chargers" element={<Cases />} />
          <Route path="/category/earphones" element={<Cases />} />
          <Route path="/category/cables" element={<Cases />} />
          <Route path="/category/others" element={<Cases />} />
          <Route path='/navbar' element={<NavBar />} />
          <Route path='/' element={<ShopNow />} />
          <Route path='/hero' element={<HeroSection />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
