/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeroActions } from "../HeroActions";
import "./style.css";

export const HomePageChange = ({ property1, className }) => {
  return (
    <div className={`home-page-change ${property1} ${className}`}>
      {property1 === "default" && (
        <HeroActions
          buttonGroupText="Sign up"
          className="hero-actions-instance"
          platform="desktop"
          textContentTitleSubtitle="Facebook with Data Protection"
          textContentTitleTitle="Ace Book"
        />
      )}

      {property1 === "logged-in" && (
        <div className="friend-list">
          <div className="friend-list-frame">
            <div className="friend-list-2">
              <div className="list-item">
                <div className="state-layer-overlay" />
                <div className="state-layer">
                  <div className="leading-element">
                    <div className="building-blocks">
                      <div className="initial">A</div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="headline">Abbey Johnson</div>
                  </div>
                </div>
              </div>
              <div className="list-item">
                <div className="state-layer-overlay" />
                <div className="state-layer">
                  <div className="leading-element">
                    <div className="building-blocks">
                      <div className="initial">A</div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="headline">Steve Jobs</div>
                  </div>
                </div>
              </div>
              <div className="list-item">
                <div className="state-layer-overlay" />
                <div className="state-layer">
                  <div className="leading-element">
                    <div className="building-blocks">
                      <div className="initial">A</div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="headline">John Smith</div>
                  </div>
                </div>
              </div>
              <div className="list-item">
                <div className="state-layer-overlay" />
                <div className="state-layer">
                  <div className="leading-element">
                    <div className="building-blocks">
                      <div className="initial">A</div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="headline">Jane Doe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-2">Joanne’s Friends</div>
        </div>
      )}
    </div>
  );
};

HomePageChange.propTypes = {
  property1: PropTypes.oneOf(["logged-in", "default"]),
};
