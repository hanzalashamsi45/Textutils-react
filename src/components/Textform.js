import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }

    const handleSpeakClick=()=>{
        let msg=new SpeechSynthesisUtterance()
        msg.text=text
        speechSynthesis.speak(msg)
    }

    const handleClearClick=()=>{
        let newText=""
        setText(newText)
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }


    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text,setText]=useState("Enter text here")
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>Speak</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text===""?0:text.trim().split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} min reads</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
