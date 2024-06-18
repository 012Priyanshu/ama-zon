import './App.css';
import Navbar from './components/Navbar'
import Main from './components/main'
import Footer from './components/footer'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  return (
    <div>
          <Navbar/>
          <Main/>
          <Footer/>
    </div>
  );
}

export default App;
