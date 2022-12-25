import React, {useState} from "react";

export default function TextForm(props) {

    const handleUppercase= () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!","success");
    }

     
    const handleLowercase= () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase!", "success");
    }
     
    const clearText =()=>{
        let delText = '';
        setText(delText)
        props.showAlert("Clear all text!!", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleCopy =()=>{
        var textCopy = document.getElementById("mybox")
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value);
        props.showAlert("Copy to clipboard!", "success");
    }
   
    const removeExSpace=()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(' '))
        props.showAlert("Remove extra spaces!", "success");
    }
  

    const [text,setText] = useState("");  //use hooks
    
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" 
            }}
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-success my-2 " onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-5  " onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-0  " onClick={clearText}>
          Clear text
        </button>
        <button
          type="button "
          className="btn btn-success mx-5"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button "
          className="btn btn-success"
          onClick={removeExSpace}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h4>Your text Summary</h4>
        <p>
          Total words {text.split(" ").length-1} and total Characters{" "}
          {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} mins for read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something text"}</p>
        {/* <p>Special Characters is {text.match(/[#%]/gi).length}</p> */}
      </div>
    </>
  );
}
