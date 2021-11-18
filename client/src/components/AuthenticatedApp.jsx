import BigGarden from "./BigGarden"

function AuthenticatedApp({setCurrentUser, currentUser, setCurrentUserGardens, currentUserGardens}) {
    return (
        <div>
            <BigGarden setCurrentUser={setCurrentUser} currentUser={currentUser} setCurrentUserGardens={setCurrentUserGardens} currentUserGardens={currentUserGardens} />
        </div>
    )
}

export default AuthenticatedApp



