import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import  DraggableCard from './pages/DraggableCardDemo';
import Home  from './components/Home';
// import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/home" element={<Home />} />

        {/* <Route path='/card' element={<DraggableCard/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;