const ReadingDetails = (info) => {
  let utterance1 = new SpeechSynthesisUtterance(info);
  return speechSynthesis.speak(utterance1);
};

export default ReadingDetails;
