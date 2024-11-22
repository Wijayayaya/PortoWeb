import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowDown } from "react-icons/fa";
import profile from "../assets/IMG_20220512_111300_690.jpg";
import { ReactTyped } from "react-typed";
import "./Home.css"; // Import file CSS eksternal

const Home = () => {
  const icons = [
    { id: 1, link: <FaGithub />, href: "https://github.com/Wijayayaya/" },
    { id: 2, link: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmadpanduw/" },
    { id: 3, link: <FaInstagram />, href: "https://www.instagram.com/wijayayaya_/" },
    { id: 4, link: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=100088381955878" },
  ];

  return (
    <div className="container-fluid text-center py-5">
      <div className="home flex flex-col">
        <div className="row align-items-center justify-content-between">
          {/* Bagian Teks */}
          <div className="col-md-6 text-start py-3">
            <p className="text-subtitle mb-2">Hello I'am</p>
            <h1 className="text-title">Ahmad Pandu Wijaya</h1>
            <p className="text-typed mt-3">
              <ReactTyped strings={["Junior Front End Developer", "Junior React Developer"]} typeSpeed={70} backSpeed={70} loop />
            </p>
            <button className="btn btn-warning flex align-items-center justify-content-center mt-10">
              <a href="/cv.docx" download="cv.docx" style={{ textDecoration: "none", color: "inherit" }}>
                <span>
                  Download CV <FaArrowDown />
                </span>
              </a>
            </button>
          </div>

          {/* Bagian Foto Profil */}
          <div className="col-md-4 text-center py-4">
            <img src={profile} alt="profile" className="rounded-circle img-fluid" style={{ width: "300px", height: "300px" }} />
          </div>
        </div>

        {/* Bagian Ikon Media Sosial */}
        <div className="social-icons slide-in ">
          {icons.map((icon) => (
            <a key={icon.id} href={icon.href} target="_blank" rel="noopener noreferrer" className="social-icon">
              {icon.link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
