import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { NavBar } from "../../pages/NavBar";
import { createPokemons } from "../../store/actions";
import { useHistory } from "react-router-dom";
import "./styleCreateForm.css";
import ReadingPoke from "../../services/ReadingDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  ButtonCreate,
  ContainerButton,
  ErrorMessage,
  ErrorsForms,
  Forms,
  GroupInput,
  IconsValidation,
  Input,
  Label,
  SuccessMessage,
} from "./stylesForm";

const customRegEx={
  chars:/^[a-zA-Z]+$/g,
  numbers: /^[1-9][0-9]?$|^100$/g,
  imgRegex: /^https?:\/\/.+\.(jpg|jpeg|png|gif|svg)$/,
}


export function validate(input) {
  let error = {};
  if (!input.name) {
    error.name = "Name is required";
  } else if (!customRegEx.chars.test(input.name)) {
    error.name = "Name is invalid";
  }
  return error;
}

const CreatePokemon = () => {

  const initialForms={
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    img: "",
    Types: "",
  }

  const history = useHistory();
/* const pokeTypes = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.allPokemons);
  const newPoke = useSelector((state) => state.info); */

  let [input, setInput] = React.useState(initialForms);
  const [error, setError] = React.useState({});

  

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
    ReadingPoke("Pokemon Creado con Exito");
    setInput(initialForms);
    history.push("/home");
  };

  return (
    <>
      <NavBar />
      <main>
        <Forms onSubmit={(e) => handleSubmit(e)}>
          <div className="Datos">
            <Label htmlFor={"name"}>Name</Label>
            <GroupInput>
              <Input
                id={"name"}
                type={"text"}
                name={"name"}
                value={input.name}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                className={error.name && "danger"}
              />
              {error.name && <p className="danger">{error.name}</p>}
              <IconsValidation icon={faCircleCheck} />
            </GroupInput>
            <ErrorsForms>
              Ingresar solo letras
            </ErrorsForms>
          </div>
          <div className="Datos">
            <Label>HP</Label>
            <Input
              type={"number"}
              name={"hp"}
              value={input.hp}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Attack</Label>
            <Input
              type={"number"}
              name={"attack"}
              value={input.attack}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Defense</Label>
            <Input
              type={"number"}
              name={"defense"}
              value={input.defense}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Weight</Label>
            <Input
              type={"number"}
              name={"weight"}
              value={input.weight}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Height</Label>
            <Input
              type={"number"}
              name={"height"}
              value={input.height}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos">
            <Label>Image</Label>
            <Input
              type={"text"}
              name={"img"}
              value={input.img}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="Datos"></div>
          <ErrorMessage>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b> Error:</b> Please complete the form correctly
            </p>
          </ErrorMessage>
          <ContainerButton>
            <ButtonCreate type="submit">Create Pokemon</ButtonCreate>
            <SuccessMessage>"Pokemon Creado con Exito"</SuccessMessage>
          </ContainerButton>
        </Forms>
      </main>
    </>
  );
};

export default CreatePokemon;
