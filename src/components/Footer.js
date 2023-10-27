import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>My Journey</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Change log</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">github</a>
          <a href="/">instagram</a>
          <a href="/">X</a>
          <a href="/">twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
