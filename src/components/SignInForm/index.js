import React from 'react'
import './SignInForm.css'
import { useForm } from "react-hook-form";

export default function SignInForm() {
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    //console.log("ERRORS:", errors)
    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">UserName</label>
        <input name="userName" type="text" ref={register({required: true})}/>
        {errors.userName && <span>This field is required</span>}
        <label htmlFor="password">Password</label>
        <input name="password" type="password" ref={register({required: true})}/>
        {errors.password && <span>This field is required</span>}
        <input type="submit"/>
    </form>
}