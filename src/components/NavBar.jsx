import './navbar.css'

const NavBar = () => {
  return (
    <nav className="navigation">
    <ul>
      <li><a href="#home" className="blue-btn">Home</a></li>
      <li><a href="#aboutUs" className="blue-btn">About Us</a></li>
      <li><a href="#services" className="blue-btn">Services</a></li>
      <li><a href="#clients" className="blue-btn">Clients</a></li>
      <li><a href="#contactus" className="blue-btn">Contact Us</a></li>
    </ul>
  </nav>
  );
};

export default NavBar; 
