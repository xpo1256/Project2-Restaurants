// Login.jsx
const React = require('react');

function Login() {
  return (
    <>
      <header>
        <link rel='stylesheet' href="/style/Login.css" />
      </header>

        <h1>Login to Dishly</h1>
      <div className='container'>
        <form action="/dishly/login" method="POST" className="login-form">
          <div className="form-group1">
            <label className='as'>Enter User Name:</label>
            <input className='name' type='text' name='nickname' required />
          </div>

          <div className="form-group2">
            <label className='as'>Enter Your Email:</label>
            <input className='email' type='email' name="email" required />
          </div>

          <div className="form-group3">
            <label className='as'>Password:</label>
            <input className='password' type='password' name='password' required />
          </div>

          <div className="form-group4">
            <label className='role'>Select Role:</label>
            <div className="radio-group">
              <label className='check1'>Admin:</label><input type="radio" name="role" value="admin" required /> 
              <label className='check2'>User:</label><input type="radio" name="role" value="user" required />
            </div>
          </div>

          <button type="submit" className="submitbtn">Submit</button>
        </form>
      </div>
    </>
  );
}

module.exports = Login;
