import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home';
import Journeys from './pages/journeys/Journeys';
import Stations from './pages/stations/Stations';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/journeys" element={<Journeys />}></Route>
        <Route path="/stations" element={<Stations />}></Route>
      </Routes>
    </div>
  );
}

export default App;
