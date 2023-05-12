
import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeersDetail from './pages/BeersDetail';

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:beerId" element={<BeersDetail />} />
      </Routes>
    </div>
  );
}

export default App;
