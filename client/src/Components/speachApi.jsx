import { useState, useEffect } from "react";

const ReadingDeatils =()=>{

const [state, setState] = useState({
    pitch: 0.4,
    speed: 1,
    voices: [],
    voice: 0,
    message: 'Hola bienvenido al Pokemons search'
  });

  function changeState(val, type) {
    setState((state) => {
      switch (type) {
        case 'pitch':
          return { ...state, pitch: val };
        case 'speed':
          return { ...state, speed: val };
        case 'voice':
          return { ...state, voice: val };
        case 'message':
          return { ...state, message: val };
        case 'voices':
          return { ...state, voices: val };
        default:
          console.error(`Type ${type} not known`);
      }
    });
  }

  useEffect(() => {
    speechSynthesis.onvoiceschanged = () => {
      changeState(speechSynthesis.getVoices(), 'voices');
    };
  }, []);
  
  console.log(state)


  function play() {
    speechSynthesis.cancel();
    let utterance = new SpeechSynthesisUtterance();
    utterance.pitch = state.pitch;
    utterance.rate = state.speed;
    utterance.voice = state.voices[state.voice];
    utterance.text = state.message;
    speechSynthesis.speak(utterance);
  }

  return play
}

export default ReadingDeatils