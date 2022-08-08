import logo from './logo.svg';
import Home from './pages/Home/home'
import Product from './pages/product/product'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element ={<Product />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
