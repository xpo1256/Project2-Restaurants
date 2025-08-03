// Login.jsx
const React = require('react');

function Login() {
  return (
    <>
      <header>
        <link rel='stylesheet' href="/style/Login.css" />
      </header>

      <div className='container'>
        <h1>Login to Dishly</h1>
        <form action="/dishly/login" method="POST" className="login-form">
          <div className="form-group">
            <label>Enter User Name:</label>
            <input type='text' name='nickname' required />
          </div>

          <div className="form-group">
            <label>Enter Your Email:</label>
            <input type='email' name="email" required />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type='password' name='password' required />
          </div>

          <div className="form-group">
            <label>Select Role:</label>
            <div className="radio-group">
              <input type="radio" name="role" value="admin" required /> Admin
              <input type="radio" name="role" value="user" required />  User
            </div>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
}

module.exports = Login;
