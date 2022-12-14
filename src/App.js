import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/detail/:id' element={
            <>
              <Header />
              <Detail />
            </>
          } />
          <Route path='/login' element={
            <>
              <Header />
              <Login />
            </>
          } />
          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>
          } />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
