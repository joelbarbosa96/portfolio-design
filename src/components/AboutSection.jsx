import React from "react";
import home1 from "../img/home1.png";

//Styles
import styled from "styled-components";
import { BasicLayout, Description, Image, Hide } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

const About = styled(BasicLayout)``;

export default AboutSection;
