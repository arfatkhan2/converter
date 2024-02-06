import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'; // Import the About component
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


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
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark mode has been activated', 'success');
      document.title='Converter - Dark Mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('White mode has been activated', 'danger');
      document.title='Converter - Light Mode'
    }
  };

  return (
    <Router>
      <>
        <Navbar home="Tools" about="About converter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
