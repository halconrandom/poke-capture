import './App.css';
import { Pokedex } from './components/Pokedex.jsx';
import logo from './img/logo.png';
import logo2 from './img/logo2.png';

function App() {
  return (
    <div className="appPokedex">
      {/* <img className='logotypeMain' src={logo} alt="logo" /> */}
      <img src={logo2} className='logotypeMainTwo' alt="logo2" />
      <Pokedex />
    </div>
  );
}

export default App;
