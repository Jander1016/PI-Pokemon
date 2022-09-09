import { Route, Switch } from "react-router-dom";
import "./App.css";
import CreatePokemon from "./Components/CreatePokemon";
import { NavBar } from "./pages/NavBar";
import Pokemons from "./Components/pokemons";
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/home"} component={Pokemons} />
        <Route path={"/create"} component={CreatePokemon} />
        <Route path={"/about"} component={CreatePokemon} />
        <Route exact path={"/"} component={Landing} />
        <Route path={"*"} component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
