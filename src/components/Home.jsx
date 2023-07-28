import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            In this fast-paced technological era, we often encounter various
            challenges related to technology and the digital world. Whether it's
            troubleshooting software issues, finding the right tools for a task,
            or learning new skills, we need a reliable platform that can cater
            to our diverse tech-related needs. Introducing "TechStart," your
            ultimate website for solving every tech problem under the sun. What
            is TechStart? TechStart is a comprehensive and user-friendly website
            designed to be a one-stop solution for all your tech-related queries
            and challenges. It serves as a knowledge hub, community forum, and
            resource center, offering a wide range of services and tools to
            empower users in their technology endeavor
          </p>
        </div>
      </div>
      {/* home4 */}
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
