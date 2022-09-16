import { useState } from "react";
import { searchPokemon } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./Loading";
import Pokemon from "../Components/Pokemon";

const SearchBar = () => {

  const [search, setSearch] = useState('')

  const pokeFind=useSelector((state) => state.searchPokemon);

  const dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    e.preventDefault();
    dispatch(searchPokemon(search.toLocaleLowerCase()));
  };

  return (
    <>
    <div className="searchbar-container">
      <form onSubmit={onclick}>
        <input
          placeholder="Buscar pokemon..."
          onChange={onChange}
          type="text"
          value={search}
        />
        <button onClick={onClick}>
           Buscar
        </button>
      </form>
    </div>
    
    </>
    
  );
};

export default SearchBar;
