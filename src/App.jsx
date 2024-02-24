import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';
import './components/Footer/Footer.module.css';
import './components/Navbar/Navbar.module.css';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
