const React = require("react");

function MainUser(props) {

  return (
    <>
        <header>
        <link rel="stylesheet" href="/style/MainUser.css" />
      </header>
        
      <div className="Top-navigation">
        <div className="left-top">
            <h2>Restaurant Web</h2>
            <a href="Home" className="home">Home</a>
            <a href="Rest" className="home">Restaurants</a>
            <a href="order" className="home">Orders</a>
            <a href="review" className="home">Review</a>
        </div>

        <div className="right-top"><input type="text" placeholder="Search" className="Search" />
            <img type="icon" className="UserProfile" alt="User Profile" />
            <span>Hello, {props.user?.nickname || "Guest"}</span></div>
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

      <div className="navigation">
        <div className="left-navigation">
        <a>About</a>
        <a>Contact</a>
        <a>FAQ</a>
        <a>Terms of Service</a>
        <a>Privacy-Policy</a>
        </div>
        <div className="right-navigation">
        <a href="https://www.instagram.com/salman_alhashime/"  target="_blank">instagram</a>
        <a href="https://www.linkedin.com/in/salman-alhashime/"  target="_blank">Linkedin</a>
        <a href="https://github.com/xpo1256" target="_blank" >GitHub</a>
        </div>
      </div>
    </>
  );
}

module.exports = MainUser;
