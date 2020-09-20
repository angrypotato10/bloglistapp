import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import loginService from '../services/login'
import { errorMessage, initUser, logoutUser } from '../reducers/actions'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector((store) => store.user)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await loginService.login({ username, password })

            window.localStorage.setItem(
                'loggedBlogAppUser',
                JSON.stringify(user)
            )

            dispatch(initUser(user))
            setUsername('')
            setPassword('')
            history.push('/blogs')
        } catch (exception) {
            dispatch(errorMessage('Wrong username or password'))
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogAppUser')
        dispatch(logoutUser())
    }

    const loginForm = () => (
        <div>
            <h2>log in to application</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                        type="text"
                        onChange={({ target }) => setUsername(target.value)}
                    ></input>
                </div>
                <div>
                    password
                    <input
                        type="password"
                        onChange={({ target }) => setPassword(target.value)}
                    ></input>
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )

    return (
        <div>
            {user === null ? (
                loginForm()
            ) : (
                <div>
                    <p>
                        {user.name} logged in
                        <button onClick={handleLogout}>logout</button>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Login
