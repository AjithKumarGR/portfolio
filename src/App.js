import logo from './logo.svg';
import './App.css';
import './Head.css'
import Headernav from './component/Headernav';
import { BrowserRouter } from 'react-router-dom';
import './Mainnav.css'
import './Prime.css'
import './Aboutus.css'
import './Contactpage.css'
import './Portfolio.css'
import Ajith from './component/Ajith';
import Mainnav from './component/Mainnav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Mainnav/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
