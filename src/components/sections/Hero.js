import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SoundP from "../../assets/BEHULEE.mp3";
import useSound from "use-sound";
import Button from "../elements/Button";
import Image from "../elements/Image";

import myImage from "../../assets/images/cercle.png";
const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const [play] = useSound(SoundP, { volume: 0.75 });

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div
            className="hero-content"
            style={{
              backgroundImage: `url(${myImage})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h4
              className="text-weight-1 mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              We're Getting{" "}
              <span className="text-weight-1 text-color-primary">Married</span>
            </h4>
            <div className="container-xs">
              <p
                className="couple-text text-color-error m-0 mb-32 reveal-from-bottom couple-text"
                data-reveal-delay="400"
              >
                Sanjeev <span className="text-color-lights"> &</span> Nandani
              </p>
              <Button id="buttonsound" color="primary" onClick={play}>
                Play
              </Button>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a href="#0" aria-controls="video-modal">
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
