import React from 'react';
import AccountForm from "./AccountForm";

export default function AccountCreationPage() {
    return (
        <div>
            <AccountForm type={"POST"} header={"Create Account"} />
        </div>
    )
}
