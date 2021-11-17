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
  const [currentUserGardens, setCurrentUserGardens] = useState([])


  useEffect(() => {
    fetch('/me')
    .then(resp => {
      if(resp.ok) {
        resp.json().then(user => setCurrentUser(user))
      } else {
        console.log('logged in', "no")
      }
    })
  }, [])

  useEffect(() => {
    if(currentUser) {
      setCurrentUserGardens(currentUser.gardens)
    }
  }, [currentUser])  

  return (
    <Router>
      {currentUser ? <AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser} setCurrentUserGardens={setCurrentUserGardens} currentUserGardens={currentUserGardens}/> : <UnauthenticatedApp setCurrentUser={setCurrentUser} />}
    </Router>
  );
}

export default App;
