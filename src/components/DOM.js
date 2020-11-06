import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


export default function DOM() {
    
    const addASquare = () => {
        let square = document.createElement('div')
        square.style.height = "125px"
        square.style.width = "125px"
        square.style.backgroundColor = "green"
        square.style.margin = "auto"
        document.body.append(square)
    }
    const addACircle = (color) => {
        let circle = document.createElement('div')
        circle.style.height = "105px"
        circle.style.width = "105px"
        circle.style.borderRadius = "55px"
        circle.style.margin = "auto"
        circle.style.backgroundColor = `${color}`
        document.body.append(circle)
    }
    const commands = [
        {
            command: 'Make a square please',
            callback: () => addASquare()
        },
        {
            command: 'Make a * circle please',
            callback: (color) => addACircle(color)
        }
    ]
    const {transcript, resetTranscript} = useSpeechRecognition( { commands })
    
    return (
        <div>
            <h1>DOM</h1>
            <h4>What would you like to add?</h4>
            <p>{transcript}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
        </div>
    )
}