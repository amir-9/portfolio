import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { experiencesData, skillsData } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const [experience, setExperience] = useState(experiencesData);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperience(experiencesData);
    setSkills(skillsData);
  }, [experience]);

  return (
    <>
      <h2 className="Head-text">Skills & Experiences</h2>

      <div className="skills-container">
        <motion.div className="skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name} </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="skills-exp">
          {experience.map((experience) => (
            <motion.div className="skills-exp-item" key={experience.year}>
              <div className="skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="skills-exp-works">
                {experience.works.map((work, index) => (
                  <div key={work.name + index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="skills-exp-work"
                      id={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      anchorId={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "skills"), "skills", "app__whitebg");
