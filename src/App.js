import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import AddChef from "./components/AddChef";
import AddClient from "./components/AddClient";
import AddDish from "./components/AddDish";
import Chefs from "./components/Chefs";
import Clients from "./components/Clients";
import Dishes from "./components/Dishes";
function App() {
  return (
    <BrowserRouter>
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
        <Routes>
          <Route path="/dingo" element={<Home />} />
          <Route path="/dingo/signin" element={<Login />} />
          <Route path="/dingo/signup" element={<Signup />} />
          <Route path="/dingo/addchef" element={<AddChef />} />
          <Route path="/dingo/addclient" element={<AddClient />} />
          <Route path="/dingo/adddish" element={<AddDish />} />
          <Route path="/dingo/chefs" element={<Chefs />} />
          <Route path="/dingo/clients" element={<Clients />} />
          <Route path="/dingo/dishes" element={<Dishes/>} /> 
        </Routes>
        
        <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
