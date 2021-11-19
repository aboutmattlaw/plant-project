import Signup from "./Signup"
import Signin from "./Signin"
import {Routes, Route} from "react-router-dom"

function UnauthenticatedApp({setCurrentUser}) {
    return(
        <Routes>
            Unauthenticated App
            <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
            <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} />} />
        </Routes>
    )
}

export default UnauthenticatedApp