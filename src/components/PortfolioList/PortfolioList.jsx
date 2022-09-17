import "./portfolioList.scss";

function PortfolioList({ id, title, active, setSelected }) {
  //   console.log(setSelected);

  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
