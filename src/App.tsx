// import React from 'react'
// import logo from './logo.svg';
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {Header} from './layout/header'
// import {Footer} from './layout/footer'
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      {/* <Footer/> */}
       
    </div>
  );
}

export default App;
