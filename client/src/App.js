import { Route} from 'react-router-dom';
import './App.css';
import CreatePokemon from './Components/CreatePokemon';
import Home from './Components/Home';
import { NavBar } from './Components/NavBar';
import Pokemons from './Components/pokemons';
//import Landing from './pages/Landing';
//<Route path={'/'} component={Landing} />
function App() {

  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
        <NavBar />
          <Route path={'/home'} component={Home} />
          <Route path={'/create'} component={Pokemons} />  
          <Route path={'/about'} component={CreatePokemon} />  
         
    </div>
  );
}

export default App;
