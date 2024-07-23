export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="main-footer">
          <div className="footer-icon">
            <img src="/images/logo-white.svg" alt="" className="logo" />

            <div className="icons">
              <img src="/images/icon-facebook.svg" alt="" />
              <img src="/images/icon-youtube.svg" alt="" />
              <img src="/images/icon-twitter.svg" alt="" />
              <img src="/images/icon-pinterest.svg" alt="" />
              <img src="/images/icon-instagram.svg" alt="" />
            </div>
          </div>
          <div className="lists">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="lists">
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-btm">
            <button className="cta">Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/ajkun55/Easybank-landing-page">
            John A
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
