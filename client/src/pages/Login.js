import React, { useContext, useRef, useState } from 'react'
import { login } from '../api'
import { Context } from '../contexts/Context'

function Login() {
    
    const usernameRef = useRef()
    const passwordRef = useRef()
    
    const [sessionData, setSessionData] = useContext(Context)
    const [errorMessage, setErrorMessage] = useState('')
    
    const signIn = (e) => {
        e.preventDefault()
        login(usernameRef.current.value, passwordRef.current.value)
        .then(res => {
            if (res.status === 401 && res.data.message) {
                setErrorMessage(res.data.message)
            }
            else {
                console.log(res.data.data)
                setSessionData(res.data.data)
            }
        })
        .catch(error => console.error(error))

        // window.localStorage.setItem('user', 'wkl')
    }

    return (
        <div>
            {sessionData.username}
            <form>
                <input type="text" placeholder="Username" ref={usernameRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button type="submit" onClick={signIn}>Login</button>
            </form>
        </div>
    )
}

export default Login
