import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import DisplayAllItems from './Components/DisplayAllItems';
import AddNewItem from './Components/AddNewItem';
import Contact from './Components/Contact';
import PizzasPage from './Components/PizzasPage';
import SpecialsPage from './Components/SpecialsPage'; 
import OrderPage from './Components/OrderPage'; // Import the new OrderPage
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Pizza Store</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/items">All Pizzas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Add New Pizza</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/specials">Pizza Specials</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/items" element={<PizzasPage />} />
            <Route path="/add" element={<AddNewItem />} />
            <Route path="/specials" element={<SpecialsPage />} />
            <Route path="/order/:id" element={<OrderPage />} /> {/* New route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
