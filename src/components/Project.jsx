import React from "react";
import bookshelfImage from "../assets/bookshelf.png";
import upndownImage from "../assets/upndown.png";
import "./Project.css";

const Project = () => {
  return (
    <div className="container my-5 card-container">
      <h1 className="text-center mb-5 slide-in title">Project</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 slide-in">
        <div className="col">
          <div className="card slide-in h-100">
            <img src={bookshelfImage} className="card-img-top" alt="card 1" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title slide-in">Bookshelf App</h5>
              <p className="slide-in">Interactive web front-end application and has a storage feature using web storage.</p>
              <div className="mt-auto d-flex flex-row mb-3 slide-in">
                <a href="https://euphonious-axolotl-ed0835.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                  Live
                </a>
                <a href="https://github.com/Wijayayaya/bookshelf-apps" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card slide-in h-100">
            <img src={upndownImage} className="card-img-top" alt="card 1" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title slide-in">UPnDOWN</h5>
              <p className="slide-in">Front end web Dashboard Admin UPnDOWN</p>
              <div className="mt-auto d-flex flex-row mb-3 slide-in">
                <a href="https://dashadm.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                  Live
                </a>
                <a href="https://github.com/Wijayayaya/Dashboard-Admin-PFS" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
