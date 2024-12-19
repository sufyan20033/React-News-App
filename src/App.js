import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
      <Navbar></Navbar>


      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<News pageSize={6} country="in" category="sports" />}>
          <Route exact path="/business" element={<News pageSize={6} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News pageSize={6} country="us" category="entertainment"/>} />
          
          <Route exact path="/science" element={<News pageSize={6} country="us" category="science"/>} />
          <Route exact path="/technology" element={<News pageSize={6} country="us" category="technology"/>} />
          <Route exact path="/health" element={<News pageSize={6} country="us" category="health"/>} />
        </Route>
      </Routes>
    </BrowserRouter>





        
      </>
    )
  }
}

