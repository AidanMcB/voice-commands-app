import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


export default function Commands() {

    const [display, setDisplay] = useState('')
    const commands = [
        {
            command: 'My name is *',
            callback: (name) => setDisplay(`Hello, ${name}! Nice to meet you!`)
        }
    ]
    const {transcript, resetTranscript} = useSpeechRecognition( { commands })
    
    return (
        <div>
            <h1>Commands</h1>
            <button onClick={SpeechRecognition.startListening}>Listen!</button>
            <button onClick={SpeechRecognition.stopListening}>Stop!</button>
            <p>{transcript}</p>
            <p>{display}</p>
            <button onClick={() => setDisplay('')}>Empty Display</button>
        </div>
    )
}