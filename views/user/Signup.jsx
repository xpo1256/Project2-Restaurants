const React = require('react');

function Signup(props){
    const {nickname, password, email, _id} = props.user;
    return(
        <div className='Container'>
            <form action={`/dishly/${_id}?_method=PUT`} method='POST'>
                <label>Enter User Name :</label> 
                <input type='text' name='nickname' defaultValue={nickname} required />

                <label>Your Email :</label> 
                <input type='text' name="email" defaultValue={email} required />

                <label>New Password :</label> 
                <input type='text' name='password' defaultValue={password} required />

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

module.exports = Signup;
