import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Foot.css"; // Import CSS

const Footer = () => {
  const icons = [
    { id: 1, link: <FaGithub />, href: "https://github.com/Wijayayaya/" },
    { id: 2, link: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmadpanduw/" },
    { id: 3, link: <FaInstagram />, href: "https://www.instagram.com/wijayayaya_/" },
    { id: 4, link: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=100088381955878" },
  ];

  const navlinks = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Skills" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];

  return (
    <footer>
      {/* Bagian Ikon */}
      <div className="icons">
        {icons.map((icon) => (
          <a key={icon.id} href={icon.href} target="_blank" rel="noopener noreferrer" className="social-icon">
            {icon.link}
          </a>
        ))}
      </div>

      {/* Bagian Navigasi */}
      <div className="navlinks">
        {navlinks.map((nav) => (
          <a key={nav.id} href={`#${nav.link.toLowerCase()}`}>
            {nav.link}
          </a>
        ))}
      </div>

      {/* Bagian Copyright */}
      <p>2024 &copy; Copyright Ahmad Pandu Wijaya. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
