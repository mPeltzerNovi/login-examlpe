import React from 'react'
import './SignInForm.css'


export default function SignInForm() {
    return <form>
        <label htmlFor="userName">UserName</label>
        <input name="userName" type="text"/>
        <label htmlFor="password">Password</label>
        <input name="password" type="password"/>
        <input type="submit"/>
    </form>
}