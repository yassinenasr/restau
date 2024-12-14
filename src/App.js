import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Signup from "./components/Signup";
import AddChef from "./components/AddChef";
import AddClient from "./components/AddClient";
import AddDish from "./components/AddDish";
import Chefs from "./components/Chefs";
import Clients from "./components/Clients";
import Dishes from "./components/Dishes";

function App() {
  return (
    <BrowserRouter >
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <Header />
        <Routes >
          <Route path="/restau/" element={<Home />} />
          <Route path="/restau/signin" element={<Login />} />
          <Route path="/restau/signup" element={<Signup />} />
          <Route path="/restau/addchef" element={<AddChef />} />
          <Route path="/restau/addclient" element={<AddClient />} />
          <Route path="/restau/adddish" element={<AddDish />} />
          <Route path="/restau/chefs" element={<Chefs />} />
          <Route path="/restau/clients" element={<Clients />} />
          <Route path="/restau/dishes" element={<Dishes/>} />
          <Route path="/restau/login" element={<Login/>} />  
        </Routes>
        
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
