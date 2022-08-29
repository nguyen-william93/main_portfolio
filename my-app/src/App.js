import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
import Blog from './pages/Blog'
import Projects from './pages/Projects'


function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/projects' element={<Projects/>} />
        </Routes>
    </Router>
  );
}

export default App;
