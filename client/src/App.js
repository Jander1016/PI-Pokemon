import { Route, Switch } from "react-router-dom";
import "./App.css";
import CreatePokemon from "./Components/forms/CreatePokemon";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/home"} component={Home} />
        <Route path={"/create"} component={CreatePokemon} />
        <Route path={"/about"} component={CreatePokemon} />
        <Route exact path={"/"} component={Landing} />
        <Route path={"*"} component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
