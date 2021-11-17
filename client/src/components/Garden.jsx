function Garden({setCurrentUser}) {
    
    function handleClick(e) {
        fetch('/logout', {method: 'DELETE'})
        .then(resp => setCurrentUser(null))

    }
    
    return(
        <div>
            My Garden
            <button onClick={handleClick}>Logout "User"</button>
        </div>

    )
}

export default Garden