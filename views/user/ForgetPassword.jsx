const React = require('react');

function ForgetPassword(props){
    const {passowrd} = user;
    return(
        <div className='Container'>
            <form action={'/dishly/ForgetPassword?_method=POST'}method ="POST">
                <label>Enter Your New Password:</label>
                <input type='password' name='password' required={true}></input>
            </form>
        </div>
    )
}