// // import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   const [mode,setMode]=useState('light')
//   const [alert,setAlert]=useState(null)

//   const showAlert=(message,type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(()=>{
//       setAlert(null)
//     },2000)
//   }
//   const toggleMode=()=>{
//     if(mode==='light'){
//       setMode('dark')
//       document.body.style.backgroundColor='black'
//       document.body.style.color='white'
//       showAlert("Dark mode has been enabled","success")
//       document.title='Textutils - Dark Mode'
//       setInterval(() => {
//         document.title='Textutils is amazing mode'
//       }, 2000);
//       setInterval(() => {
//         document.title='install Textutils Now'
//       }, 1500);
//     }
//     else{
//       setMode('light')
//       document.body.style.backgroundColor='white'
//       document.body.style.color='black'
//       showAlert("Light mode has been enabled","success")
//       document.title='Textutils - Light Mode'
//     }
//   }
//   const greenMode=()=>{
//       setMode('green')
//       document.body.style.backgroundColor='green'
//       document.body.style.color='white'

//   }
//   return (
//     <>
//       {/* <Router> */}
//       <Router>
//       <Navbar title="Text " mode={mode} toggleMode={toggleMode} greenMode={greenMode}/>
//       <Alert alert={alert}/>
//       <div className="container my-3">
//       <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
//           </Route>
//         </Switch>
//       </div>
//       </Router>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark Mode';
      setInterval(() => {
        document.title='Textutils is amazing mode'
      }, 2000);
      setInterval(() => {
        document.title='install Textutils Now'
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils - Light Mode';
    }
  };

  const greenMode = () => {
    setMode('green');
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
    showAlert("Green mode has been enabled", "success");
    document.title = 'Textutils - Green Mode';
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} greenMode={greenMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes> */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
