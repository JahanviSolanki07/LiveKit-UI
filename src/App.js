import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoRoom from './pages/VideoRoom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call/:room" element={<VideoRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;