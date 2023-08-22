import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiLeaf } from "react-icons/ti";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="social_list">
          <li>
            <a href="https://www.facebook.com/icmbio.parnaso" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/parnaso_oficial/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            
          </li>
          <li>
            <a href="https://www.gov.br/mma/pt-br" target="_blank" rel="noreferrer"> <TiLeaf /></a>
          </li>
        </ul>
      </nav>

      <p className="copy">© 2023 - Parque Nacional da Serra dos Órgãos</p>      
    </footer>
  );
}

export default Footer;
