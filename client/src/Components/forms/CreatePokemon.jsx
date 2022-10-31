import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../../pages/NavBar";
import { createPokemons, getTypesPokemon } from "../../store/actions";
import { useHistory } from "react-router-dom";
import "./styleCreateForm.css";
import ReadingPoke from "../../helpers/ReadingDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonCreate,
  ContainerButton,
  ErrorMessage,
  Forms,
  Label,
  SuccessMessage,
} from "./stylesForm";

import CustomInput from "./CustomInputs";
import axios from "axios";

const CreatePokemon = () => {
  const customRegEx = {
    chars: /^[a-zA-ZÑñ]{3,20}$/g,
    powerStat: /^[1-9][0-9]?$|^100$/g,
    heigthWith: /^[1-9][0-9][0-9][0-9]?$|^2000$/g,
  };

  const history = useHistory();
  const listTypes = useSelector((state) => state.typesPokemons);

  const [namePoke, setNamePoke] = useState({ campo: "", okValue: null });
  const [hpPoke, setHpPoke] = useState({ campo: "", okValue: null });
  const [attackPoke, setAttackPoke] = useState({ campo: "", okValue: null });
  const [defensePoke, setDefensePoke] = useState({ campo: "", okValue: null });
  const [weightPoke, setWeightPoke] = useState({ campo: "", okValue: null });
  const [heightPoke, setHeightPoke] = useState({ campo: "", okValue: null });
  const [speedPoke, setSpeedPoke] = useState({ campo: "", okValue: null });
  const [imgPoke, setImgPoke] = useState({ campo: "", okValue: null });

  const [error, setError]= useState('');

  const [typePoke, setTypePoke] = useState( [] );

  const [formOk, setFormOk] = useState(null);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypesPokemon());
  }, [dispatch]);

  const handleSelect = (e) => {
    e.preventDefault();
    console.log(typePoke.length)
    console.log(typePoke)
    if( typePoke.length < 2 ){
      setTypePoke([...typePoke,e.target.value ]);
      console.log(typePoke)
    }else{
      setError('only 2 types max')
    }
  };

  // const handleDelete=(e) =>{
  //   e.preventDefault();
  //   typePoke.filter(t=> t !== e.target.value)
  // }

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
      const dataPokemon = {
        name: namePoke.campo,
        hp: hpPoke.campo,
        attack: attackPoke.campo,
        defense: defensePoke.campo,
        speed: speedPoke.campo,
        height: heightPoke.campo,
        weight: weightPoke.campo,
        img: imgPoke.campo,
        Types: typePoke
      };
      dispatch(createPokemons(dataPokemon));
      axios.post("http://localhost:3001/pokemons/", dataPokemon).then(() => {
        setFormOk(true);
        ReadingPoke("Pokemon Creado con Exito");
        history.push("/home");
      });
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
            placeholder={"Intro speed pokemon"}
            name={"apeed"}
            state={speedPoke}
            changeState={setSpeedPoke}
            regEx={customRegEx.powerStat}
            inputError="El hp ingesado tiene que ser solo numeros, mayor a 0 y menor a 100"
          />
          <CustomInput
            type={"number"}
            label={"Attack"}
            placeholder={"Intro attack pokemon"}
            name={"attack"}
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
            regEx={customRegEx.powerStat}
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
            inputError="El peso ingresado tiene que ser solo numeros, mayor a 99 y menor a 9999"
          />
          <CustomInput
            type={"number"}
            label={"Height"}
            placeholder={"Intro height pokemon"}
            name={"height"}
            state={heightPoke}
            changeState={setHeightPoke}
            regEx={customRegEx.powerStat}
            inputError="La altura ingresada tiene que ser solo numeros, mayor a 0 y menor a 100"
          />
          <CustomInput
            type={"text"}
            label={"Image"}
            placeholder={"Intro image pokemon"}
            name={"img"}
            state={imgPoke}
            changeState={setImgPoke}
          />
          <div>
            <Label htmlFor={typePoke}>
              {"Pokemon Types"}
            </Label>
            <select onChange={(e) => handleSelect(e)}>
              <option value={"all"}>Selected all types </option>
              {listTypes?.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div> 
            <p>Type 1  <input type='text' name = 'type1' value={typePoke[0]} /></p>
              <p>Type 2  <input type='text' name = 'type2' value={typePoke[1]} /></p>
           </div>
         { error && (
           <ErrorMessage>
              <p>
                {error}
              </p>
            </ErrorMessage>)
            }
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
