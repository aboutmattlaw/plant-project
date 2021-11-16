import logo from './logo.svg';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';

// import Button from 'react-bootstrap/Button';

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div>
      {login ? <Signin setLogin={setLogin}/> : <Signup setLogin={setLogin}/>}
    </div>
  );
}

export default App;
