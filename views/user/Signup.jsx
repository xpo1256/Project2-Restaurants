const React = require('react');

function Signup(props) {
  
  const { nickname = '', password = '', email = '', _id = '' } = props.user || {}

  return (
    <div className='Container'>
      <form action="/dishly" method="POST">
        <label>User Name:</label>
        <input type="text" name="nickname" defaultValue={nickname} required />

        <label>Email:</label>
        <input type="email" name="email" defaultValue={email} required />

        <label>Password:</label>
        <input type="password" name="password" defaultValue={password} required />

        <div className="radio-group">
            <input type="radio" name="role" value="admin" required /> Admin
            <input type="radio" name="role" value="user" required />  User
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

module.exports = Signup 