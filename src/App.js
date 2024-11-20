import './App.css';
import Alert from './componats/Alert';
import About from './componats/About';
import Navbar from './componats/Navbar';
import Textform from './componats/Textform';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [modee, setmodee] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextModify- Dark Mode";
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextModify- Light Mode";
    }
  }

  const toggleModee = () => {
    if (modee === 'light') {
      setmodee('primary');
      document.body.style.backgroundColor = "lightblue";
      showAlert("Dark Mode Enabled", "warning");
      document.title = "TextModify- Blue Mode";
    /* { setInterval(() => {
        document.title = "TextModify is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "TextModify install now";
      }, 1500);} for title change constatliy*/ 
    } else {
      setmodee('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "warning");
      document.title = "TextModify- Light Mode";
    }
  }
  

return (
    <>
    <Router>
    <Navbar title="TextModiy" mode={mode} toggleMode={toggleMode} toggleModee={toggleModee}/>
    <Alert alert= {alert}/>
    <div className="container my-3">
    <Routes>
     { /* exact useing bcz if there is another about type name it will show another about not the you want that's why use exact for spacific componant */}
       <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Textform showAlert={showAlert} heading = "Enter Text" mode={mode} />} />
         
      </Routes>
      </div>
      </Router>
   {/*<About/>*/}
 
   
    </>
  );
}

export default App;
