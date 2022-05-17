import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import {Home, Menu, About, Contact} from './pages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
