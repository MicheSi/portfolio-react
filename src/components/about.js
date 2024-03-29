import React from "react";
import NavBar from "./nav";
import about from "../images/about.png";
import profile from "../images/michelle_2021.jpg";

const About = (props) => {
  return (
    <section id="about">
      <div className="titleDiv aboutImgDiv">
        <img className="titleImg" src={about} alt="About" />
        <NavBar />
      </div>
      <div className="aboutDiv">
        <img
          className="michelle"
          src={profile}
          alt="Michelle Sirimanivong"
        />
        <h3>I am a web developer and designer from Arizona.</h3>
        <p>
          My passion for design started in 2004 when I worked for a small
          stationery store. I was drawn to the aesthetically pleasing
          designs of the greeting cards and stationery. I began to create
          custom stationery and invitations for clients - turning a simple
          piece of paper into a beautiful work of art.
        </p>
        <p>
          From there, I transitioned into web development, continuing my
          love for design and adding a new affection for technology. I
          graduated from BloomTech's (formerly Lambda School) Full Stack
          Web Development program in July 2020. I learned the skills needed
          to build visually appealing websites and create applications that
          help solve real-world problems. I am currently working as a
          software engineer for Optum (United HealthGroup).
        </p>
        {/* <p>
          I graduated from BloomTech's (formerly Lambda School) Full Stack
          Web Development program in July 2020. I learned how to build
          functional and appealing applications using HTML, CSS,
          JavaScript, React and Node.js. During our Computer Science unit,
          I learned how to build programs and write algorithms using
          Python. I am currently working as a software engineer for
          Optum/United HealthGroup.
        </p> */}
        <h3 className="skillsh3">Skills</h3>
        <p className="skills">
          JavaScript | TypeScript | React | Redux | Angular | C# | .NET |
          Node | Python | SQL | SQLite | Postgres | Express | Knex | Jest |
          Jasmine | HTML | CSS
        </p>
      </div>
    </section>
  );
};

export default About;
