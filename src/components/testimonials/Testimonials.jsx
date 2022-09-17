import "./testimonials.scss";
import { Shortcut} from "@mui/icons-material";
import { testimonialData } from "../../AppData";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialData.map((data) => (
          <div
            className={data.featured ? "card featured" : "card"}
            key={data.id}
          >
            <div className="top">
              <Shortcut className="arrow-icon" />
              <img src={data.img} alt="xyz" className="image" />
              {data.icon}
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h5>{data.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

// className={"topbar " + (menuOpen && "active")}
