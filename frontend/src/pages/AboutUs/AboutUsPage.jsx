import React from "react";
import { CardGridImage } from "../../components/CardGridImage";
import { HeroBasic } from "../../components/HeroBasic";
import { PanelImageDouble } from "../../components/PanelImageDouble";
import TopBarGroup from "../../components/TopBarGroup";
import "./style.css";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <TopBarGroup block="/img/block-2.svg" headerClassName="top-bar-group-instance" property1="default" />
      <HeroBasic
        className="hero-basic"
        platform="desktop"
        textContentTitleSubtitle="The Maker’s who made"
        textContentTitleTitle="About us"
      />
      <PanelImageDouble
        className="panel-image-double"
        imageClassName="panel-image-double-2"
        imageClassNameOverride="panel-image-double-3"
        platform="desktop"
      />
      <div className="content-section">
        <h2 className="heading">Heading</h2>
        <p className="subheading">Subheading</p>
        <CardGridImage
          className="card-grid-image"
          divClassName="card-grid-image-3"
          divClassNameOverride="card-grid-image-4"
          imageClassName="card-grid-image-instance"
          imageClassName1="card-grid-image-5"
          imageClassName2="card-grid-image-6"
          imageClassNameOverride="card-grid-image-2"
          platform="desktop"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
