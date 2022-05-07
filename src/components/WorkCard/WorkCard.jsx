import React, { useState } from 'react';

import { urlFor } from '../../client';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const WorkCard = ({ work }) => {
  const [seeProject, setSeeProject] = useState(false);

  return (
    <article className="app__work-item app__flex">
      <div className="app__work-img app__flex">
        <img src={urlFor(work.imgUrl)} alt={work.title} />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            staggerChildren: 0.5
          }}
          className="app__work-hover app__flex"
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              animate={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferrer">
            <motion.div
              animate={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className="app__work-content app__flex">
        <h4 className="bold-text">{work.title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {work.description}
        </p>

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.3 }}
          className="app__work-tag app__flex"
        >
          {work.tags.map((tag, index) => (
            <motion.div
              animate={{ scale: [0.5, 1] }}
              whileHover={{ scale: [1, 1.05] }}
              transition={{ duration: 0.25 }}
              key={tag + index}
            >
              <p className="p-text">{tag}</p>
            </motion.div>
          ))}
        </motion.div>

        {seeProject && (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              staggerChildren: 0.5
            }}
            className="app__flex app__work-mobile"
          >
            <a href={work.projectLink} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, delay: 0.25 }}
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href={work.codeLink} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, delay: 0.25 }}
              >
                <AiFillGithub />
              </motion.div>
            </a>
          </motion.div>
        )}
      </div>

      <motion.button
        whileInView={{ opacity: [0, 1], y: [100, 0], x: [-100, 0] }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        type="button"
        className="app__work-see-btn"
        onClick={() => setSeeProject(!seeProject)}
      >
        <AiFillEye />
      </motion.button>
      
    </article>
  );
};

export default WorkCard;
