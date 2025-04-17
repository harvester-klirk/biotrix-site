import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <img
              src="/img/logo1.svg"
              alt="Bio-Trix Logo"
              style={{
                height: "150px", // or 120px, even 150px
                width: "auto",
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: "12px",
              }}
            />
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            ></span>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              {/* <a href="#features" className="page-scroll">
                Features
              </a> */}
            </li>
            <li>
              <a href="#about" className="page-scroll">
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galerie
              </a>
            </li>
            <li>
              {/* <a href="#testimonials" className="page-scroll">
                Testimonials
              </a> */}
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Équipe
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
