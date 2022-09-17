import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";

import {
  list,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../AppData";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setPortfolioData(featuredPortfolio);
        break;

      case "web":
        setPortfolioData(webPortfolio);
        break;

      case "mobile":
        setPortfolioData(mobilePortfolio);
        break;

      case "design":
        setPortfolioData(designPortfolio);
        break;

      case "content":
        setPortfolioData(contentPortfolio);
        break;

      default:
        setPortfolioData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {portfolioData.map((data) => (
          <div className="item" key={data.id}>
            <img src={data.img} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
