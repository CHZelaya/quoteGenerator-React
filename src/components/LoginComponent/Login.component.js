import React from 'react'
import './Login.styles.css'

function Login({ props }) {
    let handleLogin = props;
    return (
        <div className='login-container'>
            <form>
                <h1>Login Here</h1>
                <label className="username">Username</label>
                <input type="text" name="username" id="username" placeholder='Email' />
                <label className="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Password' />
                <button onClick={handleLogin}>Login</button>

            </form>

        </div>
    )
}

export default Login