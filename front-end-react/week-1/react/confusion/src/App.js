import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { Menuone } from './components/MenuoneComponent';
import { DISHES } from './shared/dishes';
import { Menutwo } from './components/MenutwoComponent';


function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          <Menu dishes={DISHES}/>
          {/* <Menutwo dishes={DISHES}/> */}
        </div>
      </Navbar>
    </div>
  );
}

export default App;
