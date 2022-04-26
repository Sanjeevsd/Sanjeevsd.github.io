import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Grid } from "@material-ui/core";
import Image from "../elements/Image";
import CountDown from "reactjs-countdown";
const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "You are Invited",
    paragraph:
      "You are invited to be an honourable guest at our wedding Anniversary. We are anticipating seeing you at our anniversary venue, kandaghari, ktm",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Grid container xs>
            <Grid item xs={12} sm={4} md={4} lg={4} className="gridhead">
              <h1>
                Waiting for.... <br />
                <span>The big Day</span>
              </h1>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} className="gridbody">
              <CountDown deadline="April 30, 2022" />
            </Grid>
          </Grid>
          <div
            className="hero-figure invitation reveal-from-bottom center-content illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <Image
              className="has-shadow"
              src={require("./../../assets/images/anniversary.png")}
              alt="Hero"
              width={896}
              height={504}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
