import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { slidbarData } from "../../AppData";
import "./works.scss";
import { useState } from "react";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < slidbarData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <ArrowBackIos
        className="arrow left"
        onClick={() => handleSlide("left")}
      />
      <ArrowForwardIos
        className="arrow right"
        onClick={() => handleSlide("right")}
      />

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slidbarData.map((data) => (
          <div className="container" key={data.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="iconContainer">{data.icon}</div>
                  <h2>{data.title}</h2>
                  <p>{data.des}</p>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    Project Link
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt={data.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
