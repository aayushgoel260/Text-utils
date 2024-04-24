import React ,{useState} from "react";




export default function TextForm(props) {
    // const[myStyle,setmyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btntext,setBtnText]=useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'2px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
  const handleUpClick=()=>{
    // console.log("UpperCase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
  }
  const cleartext=()=>{
    // console.log("UpperCase was clicked" + text);
    let newText="";
    setText(newText)
    props.showAlert("Text Cleared","success");
  }
  const handleloClick=()=>{
    // console.log("UpperCase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success");
  }
  const handleUpChange=(event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Text to Clipboard","success");
  }
  const [text,setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
           
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
          onChange={handleUpChange}
        ></textarea>
      </div>
      <button className="button-btn-btn-primary mx-3" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="button-btn-btn-primary mx-3" onClick={handleloClick}>Convert To Lowercase</button>
      <button className="button-btn-btn-primary mx-3" onClick={cleartext}>Clear Text</button>
      <button className="button-btn-btn-primary mx-3" onClick={handleCopy}>Copy text to clipboard</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p> 
        <p>{text.split(".").length-1} sentences</p>
        <p>{text.split(" ").length-1} spaces</p>
        <h2>Text Preview</h2>
        <p>{text}</p>
    </div>
    {/* <div classNameName="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div> */}
    </>
  );
}
