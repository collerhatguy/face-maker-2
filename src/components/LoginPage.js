import React from 'react'
import AccountForm from "./AccountForm";

export default function LoginPage() {
    return (
        <div id="login-page">
            <AccountForm type={"GET"} header={"Login"} />
        </div>
    )
}
