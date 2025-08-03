const React = require("react");

function MainAdmin(props){
    const success = props.query?.success;
    return(
        <div>
            <h1>Admin</h1>
            {success === 'true' && <p style={{ color: 'green' }}>Restaurant has been added successfully!</p>}
            {success === 'false' && <p style={{ color: 'red' }}>Failed to add restaurant. Please try again.</p>}   
            <form action="/adminroute/dishly/mainadmin" method="POST">
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="url" placeholder="Image URL (.png, .jpg, etc)" />
            <input type="text" name="orderName" placeholder="Order Name" required />
            <input type="text" name="typeFood" placeholder="Type of Food" required />
            <input type="text" name="Describes" placeholder="Description" required />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

module.exports = MainAdmin;