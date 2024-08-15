
import './App.css';
import Navbar from './Components/Navbar/navbar.jsx';
import { toggleFilter } from './Components/Navbar/navbar.js';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      {toggleFilter}
    </div>
  );
}

export default App;
