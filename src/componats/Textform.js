import React, {useState} from 'react'

export default function Textform(props) {
  const hclick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To UpperCase", "success");
  }

  const dclick = ()=>{
    let oldText = text.toLowerCase();
    setText(oldText)
    props.showAlert("Converted To LowerCase", "success");
  }

  const ddclick = ()=>{
    let cText = "";
    setText(cText)
    props.showAlert("Text Been Reset", "success");
  }

  const hcopy = () =>{
    console.log("Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy To Clipboard!", "success");
  }

  const hspace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Sapces Removed", "success");
  }

  const clickchnage = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // setText in const like this [text, setText] //
  // after that this in new line   setText("New Text"); if u want change the state or text in textarea //
  return (
    <>
    <div className='conatiner' style={{color: props.mode==='dark'?'white':'#042743'}}>
 <h1> {props.heading} </h1>
<div className="mb-3">
   
<textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={clickchnage} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={hclick}>Covert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={dclick}>Covert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={ddclick}>Reset</button>
<button className="btn btn-primary mx-2" onClick={hcopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={hspace}>Clear Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

    <h2>Text Summary</h2>
    <p>{text.split("").length} Words, {text.length} characters</p>
    <p>{0.008 *  text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Text To Preview Here"}</p>

    </div>
    </>
  )
}
