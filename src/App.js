import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
