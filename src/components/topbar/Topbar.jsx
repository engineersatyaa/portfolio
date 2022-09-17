import "./topbar.scss";
import { Person, Email, StarsOutlined } from "@mui/icons-material";

function Topbar({ menuOpen, setMenuOpen }) {

  // console.log("topbar " + (menuOpen && "active"));

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro">
            <StarsOutlined className="logo" />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 798246XXXX</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>engineersatyaa@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
