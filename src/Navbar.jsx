import './App.css';
function Navbar() {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="./images/brand_logo.png" alt="logo image" />
        </div>
        <div className="navigation">
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>

        
        </div>

          <button>Login</button>
      </nav>
    </>
  );
}

export default Navbar;
