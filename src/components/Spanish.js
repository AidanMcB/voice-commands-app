import React, {useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


export default function DOM() {
    
    const [ display, setDisplay] = useState('')
    const commands = [
        {
            command: 'Hola cómo estás hoy',
            callback: () => setDisplay('Bien gracias, y tu?')
        }
    ]
    const {transcript, resetTranscript} = useSpeechRecognition( { commands })
    
    return (
        <div>
            <h1>Spanish</h1>
            <h4>Preguntas</h4>
            <p>{transcript}</p>
            <button onClick={() => SpeechRecognition.startListening({ language: 'es-MX'})}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <p>{display}</p>
        </div>
    )
}