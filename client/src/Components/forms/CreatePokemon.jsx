import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../../pages/NavBar";
import { createPokemons } from "../../store/actions";
import "./styleCreateForm.css";
import { Forms,Label } from "./stylesForm";

import ReadingPoke from "../../services/ReadingDetails"

export function validate(input) {
  let error = {};
  if (!input.name) {
    error.name = "Name is required";
  } else if (/([a-zA-Z])/.test(input.name)) {
    error.name = "Username is invalid";
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
    height: 0,
    weight: 0,
    img: "",
    Types: "",
  });
  const [error, setError] = React.useState({});

  const newPoke = useSelector((state) => state.info);
 

  const handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
 
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createPokemons(input)); 
    ReadingPoke('Pokemon Creado con Exito')
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
    console.log(newPoke);
  };

  return (
    <>
      <NavBar />
      <div>Create Pokemon</div>
      <main>
        <Forms onSubmit={(e) => handleSubmit(e)}>
          <div className="Datos">
            <Label>Name</Label>
            <input
              type={"text"}
              name={"name"}
              value={input.name}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              className={error.name && "danger"}
            />
            {error.username && <p className="danger">{error.username}</p>}
          </div>
          <div className="Datos">
            <Label>HP</Label>
            <input
              type={"text"}
              name={"hp"}
              value={input.hp}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Attack</Label>
            <input
              type={"text"}
              name={"attack"}
              value={input.attack}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Defense</Label>
            <input
              type={"text"}
              name={"defense"}
              value={input.defense}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Weight</Label>
            <input
              type={"text"}
              name={"weight"}
              value={input.weight}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Height</Label>
            <input
              type={"text"}
              name={"height"}
              value={input.height}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Image</Label>
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
              value={"CREATE"}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </Forms>
      </main>
    </>
  );
};

export default CreatePokemon;
