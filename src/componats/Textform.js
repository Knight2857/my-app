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
    navigator.clipboard.writeText(text);
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
 <h1 className='mb-2'> {props.heading} </h1>
<div className="mb-3">
   
<textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={clickchnage} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hclick}>Covert To Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={dclick}>Covert To Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ddclick}>Reset</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hcopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hspace}>Clear Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

    <h2>Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} characters</p>
    <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing To Preview!"}</p>

    </div>
    </>
  )
}
