import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* first div */}
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>
      {/* second div*/}
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com" target={"blank"}>
            Youtube
          </a>
          <a href="https://www.instagram.com/ekta7211/" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/Ekta0027" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
