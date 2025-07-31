const React = require('react');

function Login() {
  return (
    <div className='Container'>
      <form action="/dishly/login" method="POST">
        <label>Enter User Name :</label> 
        <input type='text' name='nickname' required />

        <label>Enter Your Email :</label> 
        <input type='email' name="email" required />

        <label>Password :</label> 
        <input type='password' name='password' required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

module.exports = Login;
