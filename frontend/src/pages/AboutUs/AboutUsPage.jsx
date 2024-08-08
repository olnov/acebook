import { CardGridImage } from "../../components/CardGridImage";
import { HeroBasic } from "../../components/HeroBasic";
import TopBarGroup from "../../components/TopBarGroup";
import "./style.css";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <TopBarGroup block="/img/block-2.svg" headerClassName="top-bar-group-instance" property1="default" />
      <div className="content-section">
        <h2 className="heading">The Makers of Acebook</h2>
        <p className="subheading">Who we are</p>
        <div className="card-grid">
          {["Oleg Novikov", "Sam Quincey", "Charlie Roberts", "Marya Shariq"].map((name) => (
            <div className="card" key={name}>
              <h3>{name}</h3>
              <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
