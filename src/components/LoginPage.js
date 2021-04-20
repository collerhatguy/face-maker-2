import React from 'react'

export default function LoginPage() {
    return (
        <div id="login-page">
            <form className="account-form">
                <fieldset>
                    <legend>Login</legend>
                        <label for="name">
                            Name:
                            <input type="text" name="name" id="name" placeholder="your name"/>
                        </label>
                        <label for="password">
                            Password:
                            <input type="text" name="password" id="password" placeholder="your password"/>
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                </fieldset>
            </form>
        </div>
    )
}
