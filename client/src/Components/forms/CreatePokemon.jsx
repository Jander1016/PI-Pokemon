import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavBar } from "../../pages/NavBar";
import { createPokemons } from "../../store/actions";
import { useHistory } from "react-router-dom";
import "./styleCreateForm.css";
import ReadingPoke from "../../services/ReadingDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonCreate,
  ContainerButton,
  ErrorMessage,
  Forms,
  SuccessMessage,
} from "./stylesForm";

import CustomInput from "./CustomInputs";
import axios from "axios";

const CreatePokemon = () => {
  const customRegEx = {
    chars: /^[a-zA-ZÑñ]{3,20}$/g,
    powerStat: /^[1-9][0-9]?$|^100$/g,
    heigthWith: /^[1-9][0-9][0-9]?$|^1000$/g,
  };

  const history = useHistory();
  //const pokeTypes = useSelector((state) => state.types);

  const [namePoke, setNamePoke] = useState({ campo: "", okValue: null });
  const [hpPoke, setHpPoke] = useState({ campo: "", okValue: null });
  const [attackPoke, setAttackPoke] = useState({ campo: "", okValue: null });
  const [defensePoke, setDefensePoke] = useState({ campo: "", okValue: null });
  const [weightPoke, setWeightPoke] = useState({ campo: "", okValue: null });
  const [heightPoke, setHeightPoke] = useState({ campo: "", okValue: null });
  const [speedPoke, setSpeedPoke] = useState({ campo: "", okValue: null });
  const [imgPoke, setImgPoke] = useState({ campo: "", okValue: null });

  const [typePoke, setTypePoke] = useState({ campo: "", okValue: null });

  const [formOk, setFormOk] = useState(null);

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      namePoke.okValue === "true" &&
      hpPoke.okValue === "true" &&
      speedPoke.okValue === "true" &&
      attackPoke.okValue === "true" &&
      defensePoke.okValue === "true" &&
      weightPoke.okValue === "true" &&
      heightPoke.okValue === "true"
    ) {
     
      const dataPokemon={
        name: namePoke.campo,
        hp: hpPoke.campo,
        attack: attackPoke.campo,
        defense: defensePoke.campo,
        speed: speedPoke.campo,
        height: heightPoke.campo,
        weight: weightPoke.campo,
        img: imgPoke.campo,
      }
      dispatch(createPokemons({
        name: namePoke.campo,
        hp: hpPoke.campo,
        attack: attackPoke.campo,
        defense: defensePoke.campo,
        speed: speedPoke.campo,
        height: heightPoke.campo,
        weight: weightPoke.campo,
        img: imgPoke.campo,
      }));

      axios.post('http://localhost:3001/pokemons/',dataPokemon)
      .then(()=>{
        setFormOk(true);
        ReadingPoke("Pokemon Creado con Exito");
        history.push("/home");
      })
      
      console.log(dataPokemon)
      
    } else {
      setFormOk(false);
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <Forms onSubmit={handleSubmit}>
          <CustomInput
            type={"text"}
            label={"Name"}
            placeholder={"Intro name pokemon"}
            name={"name"}
            state={namePoke}
            changeState={setNamePoke}
            regEx={customRegEx.chars}
            inputError="El nombre ingresado tiene que ser de 3 caracteres minimo y solo letras"
          />
          <CustomInput
            type={"number"}
            label={"HP"}
            placeholder={"Intro hp pokemon"}
            name={"hp"}
            state={hpPoke}
            changeState={setHpPoke}
            regEx={customRegEx.powerStat}
            inputError="El hp ingesado tiene que ser solo numeros, mayor a 0 y menor a 100"
          />
          <CustomInput
            type={"number"}
            label={"Speed"}
            placeholder={"Intro hp pokemon"}
            name={"Speed"}
            state={speedPoke}
            changeState={setSpeedPoke}
            regEx={customRegEx.powerStat}
            inputError="El hp ingesado tiene que ser solo numeros, mayor a 0 y menor a 100"
          />
          <CustomInput
            type={"number"}
            label={"Attack"}
            placeholder={"Intro attack pokemon"}
            name={"Attack"}
            state={attackPoke}
            changeState={setAttackPoke}
            regEx={customRegEx.powerStat}
            inputError="El ataque ingresado tiene que ser solo numeros, mayor a 0 y menor a 100"
          />
          <CustomInput
            type={"number"}
            label={"Defense"}
            placeholder={"Intro defense pokemon"}
            name={"defense"}
            state={defensePoke}
            changeState={setDefensePoke}
            regEx={customRegEx.heigthWith}
            inputError="la defensa ingresado tiene que ser solo numeros, mayor a 0 y menor a 100"
          />
          <CustomInput
            type={"number"}
            label={"Weight"}
            placeholder={"Intro weight pokemon"}
            name={"weight"}
            state={weightPoke}
            changeState={setWeightPoke}
            regEx={customRegEx.heigthWith}
            inputError="El peso ingresado tiene que ser solo numeros, mayor a 0 y menor a 2000"
          />
          <CustomInput
            type={"number"}
            label={"Height"}
            placeholder={"Intro height pokemon"}
            name={"height"}
            state={heightPoke}
            changeState={setHeightPoke}
            regEx={customRegEx.numbers}
            inputError="La altura ingresada tiene que ser solo numeros, mayor a 0 y menor a 2000"
          />
          <CustomInput
            type={"text"}
            label={"Image"}
            placeholder={"Intro image pokemon"}
            name={"image"}
            state={imgPoke}
            changeState={setImgPoke}
          />
          <CustomInput
            type={"text"}
            label={"Type"}
            placeholder={"Intro Types pokemon"}
            name={"type"}
            state={typePoke}
            changeState={setTypePoke}
          />
          {formOk === false && (
            <ErrorMessage>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b> Error:</b> Please complete the form correctly
              </p>
            </ErrorMessage>
          )}
          <ContainerButton>
            <ButtonCreate type="submit">Create Pokemon</ButtonCreate>
            {formOk === true && (
              <SuccessMessage>"Pokemon Creado con Exito"</SuccessMessage>
            )}
          </ContainerButton>
        </Forms>
      </main>
    </>
  );
};

export default CreatePokemon;
