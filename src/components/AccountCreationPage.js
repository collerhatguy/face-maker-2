import React from 'react'

export default function AccountCreationPage() {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Create Account</legend>
                    <label for="name">
                        Name:
                        <input type="text" name="name" id="name" placeholder="your name"/>
                    </label>
                    <label for="password">
                        Password:
                        <input type="text" name="password" id="password" placeholder="your password"/>
                    </label>
                </fieldset>
            </form>
        </div>
    )
}
