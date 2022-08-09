import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar'
import Category from './components/categories'
import Home from './pages/home'
import Featured from './components/featured'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Category/>
      <Featured/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes> 
      </Router>
     
    </div>
  );
}

export default App;
