import Garden from "./Garden"

function AuthenticatedApp({setCurrentUser}) {
    return (
        <div>
            Authenticated App 
            <Garden setCurrentUser={setCurrentUser}/>
        </div>
    )
}

export default AuthenticatedApp