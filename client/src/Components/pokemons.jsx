/* eslint-disable no-unused-vars */
import { Loading } from "../pages/Loading";
import Pokemon from "./Pokemon";
import Pagination from "../helpers/Pagination";
import { useDispatch, useSelector } from "react-redux";
import allPokemons, {
  filterdPokemonTypes,
  filterPokesOrigin,
  getTypesPokemon,
  sortPokemons,
  sortPokesAtack,
} from "../store/actions";
import { useEffect, useState } from "react";
import SearchBar from "../pages/SearchBar";

const Pokemons = () => {
  const listTypes = useSelector((state) => state.typesPokemons);

  const listPokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(12);

  const [sortPoke, setSortPoke] = useState("");
  // const [sortPokeAttack, setSortPokeAttack] = useState("");
  // const [sortPokeTypes, setSortPokeTypes] = useState("");

  const lastItem = currentPage * items;
  const firstItem = lastItem - items;
  const dataFromApi = listPokemons.slice(firstItem, lastItem);

  const paginated = (pageNumber) => setCurrentPage(pageNumber);
  

  useEffect(() => {
    dispatch(allPokemons())
    dispatch(getTypesPokemon())
    setCurrentPage(1);
  }, [dispatch]);

  const handlerFilterPokemons = (e) => {
    e.preventDefault();
    dispatch(filterPokesOrigin(e.target.value));
    setCurrentPage(1);
  };

  const handlerSortNamePokemons = (e) => {
    e.preventDefault();
    dispatch(sortPokemons(e.target.value));
    setCurrentPage(1);
    setSortPoke(`Sorted ${e.target.value}`);
  };

  const handlerSortAtackPokemons = (e) => {
    e.preventDefault();
    dispatch(sortPokesAtack(e.target.value));
    setCurrentPage(1);
    setSortPoke(`Sorted ${e.target.value}`);
  };

  const handlerFilterPokeTypes = (e) => {
    e.preventDefault();
    dispatch(filterdPokemonTypes(e.target.value));
    setCurrentPage(1);
    setSortPoke(`Sorted ${e.target.value}`);
  };

  return (
    <>
      <div className="nav__paginated">
        <SearchBar />
        <div>
          <select onChange={(e) => handlerSortNamePokemons(e)}>
            <option value={"all"}>All </option>
            <option value={"asc"}>Sort A - Z </option>
            <option value={"desc"}>Sort Z - A </option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => handlerSortAtackPokemons(e)}
          >
            <option value={"all"}>All </option>
            <option value={"maxAttack"}>Max Attack</option>
            <option value={"minAttack"}>Min Attack</option>
          </select>
        </div>
        <div>
          <select onChange={(e) => handlerFilterPokemons(e)}>
            <option value={"all"}>All </option>
            <option value={"papi"}>Pokemons API</option>
            <option value={"pbd"}>Pokemons BD</option>
          </select>
        </div>
        <div>
          <select  onChange={(e) => handlerFilterPokeTypes(e)}>
             <option value={"all"}>Select all Types </option>
            {
              listTypes?.map(t=> 
                <option key={t.name} value={t.name}>{t.name}</option>
              )
            }
            
          </select>
        </div>
      </div>
      <div className="nav__paginated">
        <h3>Página: {currentPage}</h3>
      </div>
      <Pagination
        itemsPages={items}
        allPokemons={listPokemons.length}
        paginated={paginated}
      />
      <div className="containPokemons">
        {!dataFromApi
          ? Loading(true)
          : dataFromApi?.map((poke) => (
              <Pokemon
                id={poke.id}
                key={poke.id}
                name={poke.name}
                img={poke.img}
                attack={poke.attack}
                Types={
                 (typeof listPokemons.id === 'string')
                    ? poke.Types.map((t) => t.name)
                    : poke.Types
                }
              />
            ))}
      </div>
    </>
  );
};

export default Pokemons;
