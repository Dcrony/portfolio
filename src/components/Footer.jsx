import "../css/footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-site-logo">
        <a href="#hero">Dcrony<span>.</span></a>
      </div>
      <div className="social">
        <a href="https://github.com/Dcrony" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://x.com/CodeWithDcrony" target="_blank" rel="noreferrer">X</a>
        <a href="https://tiktok.com/codewithdcrony_" target="_blank" rel="noreferrer">TikTok</a>
      </div>
      <p className="site-copyright">
        © {new Date().getFullYear()} Dcrony. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
