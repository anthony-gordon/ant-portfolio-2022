import "../style/components/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content-wrapper">
        <div className="Footer__icons-wrapper">
          <a
            className="Footer__social-link"
            href="https://www.facebook.com/Rmotionart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon fontSize="large" />
          </a>
          <a
            className="Footer__social-link"
            href="https://www.instagram.com/robbie_motion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
        <span className="Footer__copyright">Ⓒ Robbie Motion 2022</span>
      </div>
    </div>
  );
}

export default Footer;
