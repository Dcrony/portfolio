import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <a href="#hero">
            Dcrony<span>.</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a
            href="https://github.com/Dcrony"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/CodeWithDcrony"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://tiktok.com/codewithdcrony_"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Dcrony. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
