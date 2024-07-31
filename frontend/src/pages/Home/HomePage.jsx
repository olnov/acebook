import { Link } from "react-router-dom";

import React from "react";
import { Section } from "../../components/Section";
import { TopBarGroup } from "../../components/TopBarGroup";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <TopBarGroup
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <Section className="section-instance" />
    </div>
  );
};
