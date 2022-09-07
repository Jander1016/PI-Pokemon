import React from "react";
import {createPokemons} from '../store/actions'

const CreatePokemon = () => {
  let [input, setInput] = React.useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: "",
    weight: "",
    img: "",
    Types: "",
  });

  const handleChange = (e) => {
    e.preventdefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let dispatch= React.useDispatch()

  const handleSubmit = (e) => {
    e.preventdefault();
    dispatch(createPokemons(input))
    setInput({name: "", hp: 0, attack: 0, defense: 0, speed: 0, height: "", weight: "", img: "", Types: ""})
  };

  return (
    <>
      <div>Create Pokemon</div>
      <form onSubmit={e=>handleSubmit(e)}>
        <div className="Datos">
          <label>Name</label>
          <input
            type={"text"}
            name={"name"}
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="Datos">
          <label>HP</label>
          <input
            type={"text"}
            name={"hp"}
            value={input.hp}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="Datos">
          <label>Attack</label>
          <input
            type={"text"}
            name={"attack"}
            value={input.attack}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="Datos">
          <label>Defense</label>
          <input
            type={"text"}
            name={"defense"}
            value={input.defense}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="Datos">
          <label>Weight</label>
          <input
            type={"text"}
            name={"weight"}
            value={input.weight}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="Datos">
          <label>Height</label>
          <input
            type={"text"}
            name={"height"}
            value={input.height}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="Datos">
          <label>Image</label>
          <input
            type={"text"}
            name={"img"}
            value={input.img}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="Datos"></div>
        <div className="Datos">
          <input
            type={"submit"}
            value={'CREATE'}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </>
  );
};

export default CreatePokemon;
