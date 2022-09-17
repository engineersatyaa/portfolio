import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";
import { ExpandMore } from "@mui/icons-material";

function Intro() {
  const textRef = useRef();

  /*console.log(textRef); //returns {current:span}*/

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      backSpeed: 60,
      strings: ["Web Developer", "MERN Stack Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <img src="images/sam1.jpg" alt="Man" />
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Satya Pal Singh</h1>
          <h3>
            I work as a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMore className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
