import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}></p>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>'
            <a href="https://github.com/1806PiYuSh1806/movielane-react" target="_blank">
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="/movielane.jpg" alt="project" />
            </a>
            <a href="https://github.com/1806PiYuSh1806/gpt3-react" target="_blank">
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="/gpt3.jpg" alt="project" />
            </a>
            <a href="https://github.com/1806PiYuSh1806/dummy_portfolio" target="_blank">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="/portfolio_prev.png" alt="project" />
            </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;