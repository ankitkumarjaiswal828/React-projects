import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
import { useState } from "react";
import Alert from "./componants/Alert";


function App() {
  const [mode , setMode] = useState('light');
  const [alert ,setAlert] = useState(null);

  const showAlert =(msg,type)=>{
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  
  const toggleMode =()=>{
    if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor = "#042743";
        showAlert("Dark mode has been Enable",'success')

    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been Enable",'success')
    }
  }

  return (
    <>
        <Navbar
          title="@TextUtils App"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">

            
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the Text to Analyze!!!"
                  mode={mode}
                />

        </div>
      
    </>
  );
}

export default App;
