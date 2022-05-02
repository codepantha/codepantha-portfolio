import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss';
import { AppWrap } from '../../wrapper';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWorks(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') return setFilteredWorks(works);

      setFilteredWorks(works.filter((work) => work.tags.includes(item)));
    }, 500);
  };

  // const handleWorkFilter = (item) => setActiveFilter(item);

  return (
    <section>
      <h2 className="head-text">
        My <span>Portfolio</span>
      </h2>

      <ul className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React', 'All'].map(
          (item, index) => (
            <li
              className={`app__work-filter-item app__flex ${
                activeFilter === item ? 'item-active' : ''
              }`}
              key={item + index}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </li>
          )
        )}
      </ul>

      <motion.section
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filteredWorks.length === 0 ? (
          <p className="p-text">No projects in this category, yet.</p>
        ) : (
          filteredWorks.map((work, index) => (
            <article className="app__work-item app__flex" key={work + index}>
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
              </div>
            </article>
          ))
        )}
      </motion.section>
    </section>
  );
};

export default AppWrap(Work, 'work');
