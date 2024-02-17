import logo from "../slike/logo.svg";
import { socialIcons } from "../data";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" childClass="nav-link" />
        <ul className="nav-icons">
          {socialIcons.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
