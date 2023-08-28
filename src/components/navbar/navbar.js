import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>Michael Svahn</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Kontakt</a>
        <a href="/#">Intro</a>
        <a href="/#">Hvem</a>
        <a href="/#">Prosjekter</a>
        <button className="nav_btn nav_close_btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav_btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
export default Navbar;
