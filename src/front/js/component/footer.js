import React, { Component } from "react";
import gmail from "../../img/gmail.png";
import maps from "../../img/maps.png";
import wsapp from "../../img/wsapp.png";
import youtb from "../../img/youtb.png";
import intg from "../../img/intg.png";
import fondofoo from "../../img/imgfooter.jpg";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="divfooter">
      <a
        className="navbar-brand"
        href="mailto:juarezrodriguezchapaypintura5@gmail.com"
      >
        <img className="img-footer" src={gmail} />
      </a>
      <a
        className="navbar-brand"
        href="https://api.whatsapp.com/send?phone=+34617579462"
      >
        <img className="img-footer" src={wsapp} />
      </a>
      <a
        className="navbar-brand"
        href="https://www.google.com/maps/place/Europa+Juarez+Taller+Oca%C3%B1a/@39.9535622,-3.5060688,17z/data=!3m1!4b1!4m5!3m4!1s0xd420b7398922a1d:0x9bef6e2d8b9d912b!8m2!3d39.9535622!4d-3.5038855"
      >
        <img className="img-footer" src={maps} />
      </a>
      {/* <a
        className="navbar-brand"
        href="https://www.youtube.com/channel/UChPQF4zFH-Oqf2A-b2cYKqA"
      >
        <img className="img-footer" src={youtb} />
      </a> */}
      <a
        className="navbar-brand"
        href="https://www.instagram.com/europajuarez_taller/"
      >
        <img className="img-footer" src={intg} />
      </a>
    </div>
    <div
      className="divimgfdo"
    >
      <img className="fin-footer" src={fondofoo} />
    </div>
  </footer>
);
