import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroActions from "../../components/HeroActions/HeroActions";
import TopBarGroup from "../../components/TopBarGroup";
import "./style.css";

export const LandingPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
    document.body.classList.add('page-background');

    return () => {
    document.body.classList.remove('page-background');
  };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div className="landing-page">
      <TopBarGroup
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <div className="hero-section">
        <HeroActions
          buttonGroupText="Sign Up"
          textContentTitleSubtitle="Facebook with Data Protection"
          textContentTitleTitle="Ace Book"
          className="heroactions-instance"
        />
      </div>
    </div>
  );
};

export default LandingPage;
