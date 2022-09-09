import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons } from "../store/actions";

export function validate(input) {
  let error = {};
  if (!input.name) {
    error.name = "Name is required";
  } else if (/([a-zA-Z])/.test(input.name)) {
    error.name = "Username is invalid";
  }

  if (!input.password) {
    error.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = "Password is invalid";
  }

  return error;
}

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
  const [error, setError] = React.useState({});

  const newPoke=useSelector((state)=> state.info)
  console.log(newPoke)

  const handleChange = (e) => {
    e.preventdefault();
  
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  let dispatch = useDispatch();

  function play() {
    const saludo='Hola Bienvenido a la Pokedex'
    let utterance1 = new SpeechSynthesisUtterance(saludo);
    speechSynthesis.speak(utterance1);
  }
 
  const handleSubmit = (e) => {
    e.preventdefault();
    
    dispatch(createPokemons(input));
    setInput({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      img: "",
      Types: "",
    });
  };

  return (
    <>
      <div>Create Pokemon</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="Datos">
          <label>Name</label>
          <input
            type={"text"}
            name={"name"}
            value={input.name}
            onChange={(e) => handleChange(e)}
            className={error.name && "danger"}
          />
          {error.username && <p className="danger">{error.username}</p>}
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
            onChange={() =>   play()}
          />
        </div>
        <div className="Datos"></div>
        <div className="Datos">
          <input
            type={"submit"}
            value={"CREATE"}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </>
  );
};

export default CreatePokemon;
