import { socialIcons } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" childClass="footer-link" />
      <ul className="footer-icons">
        {socialIcons.map((socialIcon) => {
          const { id, href, icon } = socialIcon;
          return (
            <li key={id}>
              <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tour company
        <span id="date">{new Date().getFullYear()}</span> Sva prava zadržana
      </p>
    </footer>
  );
};
export default Footer;
