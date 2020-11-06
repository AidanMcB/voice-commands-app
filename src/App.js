import './App.css';
import Commands from './components/Commands'
import DOM from './components/DOM'
import Spanish from './components/Spanish'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {

  const {transcript, resetTranscript} = useSpeechRecognition()

  if(!SpeechRecognition.browserSupportsSpeechRecognition()){
    return null
  }

  return (
    <div className="App">
      <h1>My Voice Command App</h1>
      <button onClick={SpeechRecognition.startListening}>Listen!</button>
      <button onClick={SpeechRecognition.stopListening}>Stop!</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <Commands />
      <DOM />
      <Spanish />
    </div>
  );
}

export default App;
