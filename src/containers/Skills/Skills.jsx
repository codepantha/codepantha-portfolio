import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
// import { AppWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Skills.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => setSkills(data));
  }, []);

  return (
    <section>
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.ul
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
