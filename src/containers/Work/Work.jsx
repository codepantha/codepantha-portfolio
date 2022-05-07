import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '../../client';
import './Work.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { WorkCard } from '../../components';

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
            <WorkCard key={work + index} work={work} />
          ))
        )}
      </motion.section>
    </section>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work');
