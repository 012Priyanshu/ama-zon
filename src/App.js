import './App.css';
import Navbar from './components/Navbar'
import Main from './components/main'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
           
        </Routes>
        <Main/>
        <Footer/>
      </Router>



    </div>
  );
}

export default App;
