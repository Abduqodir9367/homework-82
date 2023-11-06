import React from "react";
import "./Footer.scss"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="big">
          <div className="left">
              <div className="par">
                <h1>Contact Us</h1>
              </div>
            <div className="content">
              <div className="flex flex-col ">
                <h2>Email</h2>
                <p>needhelp@Organia.com</p>
              </div>
              <div className="flex flex-col ">
                <h2>Phone</h2>
                <p>666 888 888</p>
              </div>
              <div className="flex flex-col ">
                <h2>Address</h2>
                <p>88 road, borklyn street, USA</p>
              </div>
            </div>
          </div>
          <div className="center">
            <img src="../logo.png" alt="logo" />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
            <div className="icons">
              <img src="../inst.png" alt="icon" />
              <img src="../face.png" alt="icon" />
              <img src="../twit.png" alt="icon" />
              <img src="../link.png" alt="icon" />
            </div>
          </div>
          <div className="right">
            <div className="par">
              <h1>Utility Pages</h1>
            </div>
            <div className="content">
              <p>Style Guide</p>
              <p>404 Not Found</p>
              <p>Password Protected</p>
              <p>Licences</p>
              <p>Changelog</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
