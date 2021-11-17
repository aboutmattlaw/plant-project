// import Signin from './components/Signin';
// import Signup from './components/Signup';
// import Garden from './components/Garden';
import AuthenticatedApp from "./components/AuthenticatedApp"
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then(resp => {
      if(resp.ok) {
        resp.json().then(data => setCurrentUser(data))
      } else {
        console.log('logged in', "no")
      }
    })
  }, [])

  return (
    <Router>
      {currentUser ? <AuthenticatedApp setCurrentUser={setCurrentUser}/> : <UnauthenticatedApp setCurrentUser={setCurrentUser} />}
    </Router>
  );
}

export default App;
