const React = require("react");

function MainUser(props) {
  const user = props.user || { name: "Guest" };

  return (
    <>
        <header>
        <link rel="stylesheet" href="/style/MainUser.css" />
      </header>
        
      <div className="Top-navigation">
        <div className="left-top">
            <h3>Restaurant Web</h3>
            <a href="">Home</a>
            <a href="">Restaurants</a>
            <a href="">Orders</a>
            <a href="">Review</a>
        </div>

        <div className="right-top"><input type="text" placeholder="Search" className="Search" />
            <img type="icon" className="UserProfile" alt="User Profile" />
            <span>Hello, {user.name}</span></div>
      </div>

      <div className="Main-container-1">
        <p className="letter">Welcome to Restaurant App</p>
        <p className="secLetter">Discover the best dining experience...</p>
        <button className="btn-explore">Explore Restaurants</button>
      </div>

      <div className="Main-container-2">
        <h1>Restaurants</h1>
        <h1>Popular Orders</h1>
      </div>

      <div className="Bottom-navigation">
        <a className="">About</a>
        <a className="">Contact</a>
        <a className="">FAQ</a>
        <a className="">Terms of Service</a>
        <a className="">Privacy-Policy</a>
        <a className="">Instagram</a>
        <a className="">LinkedIn</a>
        <a className="">GitHub</a>
      </div>
    </>
  );
}

module.exports = MainUser;
