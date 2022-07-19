import React from "react";
import link from "../imge/icone/download (1).png";
import you from "../imge/icone/download (2).png";
import fbc from "../imge/icone/download.png";
import "../styels/fotter.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-900 text-white mx-auto py-20">
        <div>
          <p>
            <span className="text-3xl mb-4">dEMO</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ratione fugiat <br /> deserunt dolore harum eaque <br /> cumque
            dignissimos rem <br /> labore sequi nisi.
          </p>
          <div className="flex">
            <a href="#f">
              <img className="w-6 rounded-full" src={fbc} alt="" />
            </a>
            <a href="#f">
              <img className="w-6 mx-2 rounded-full" src={link} alt="" />
            </a>
            <a href="#f">
              <img className="w-6 rounded-full" src={you} alt="" />
            </a>
          </div>
          <div>
            <p>copyright&copy;2022</p>
          </div>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Services</span>
          <hr className="horaizantal" />
          <a href="#f" className="link link-hover">
            Consolting
          </a>
          <a href="#f" className="link link-hover">
            Human resiurse
          </a>
          <a href="#f" className="link link-hover">
            Accounting
          </a>
          <a href="#f" className="link link-hover">
            Marcketing & seo
          </a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">about</span>
          <hr className="horaizantal" />
          <a href="#f" className="link link-hover">
            About us
          </a>
          <a href="#f" className="link link-hover">
            Our Services
          </a>
          <a href="#f" className="link link-hover">
            Our blogs
          </a>
          <a href="#f" className="link link-hover">
            Contact us
          </a>
        </div>
        <div className="mx-auto">
          <span className="footer-title">contact</span>
          <hr className="horaizantal" />
          <p className="link link-hover">+566676723</p>
          <p className="link link-hover">+566785853</p>
          <p className="link link-hover">Contact@info.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
