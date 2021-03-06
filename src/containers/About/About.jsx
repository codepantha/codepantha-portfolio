import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import './About.scss';
import { AppWrap } from '../../wrapper';
import MotionWrap from '../../wrapper/MotionWrap';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <section>
      <h2 className="head-text">
        Code is like <span>humour.</span>
        <br />
        When you have to explain it, <span>It is bad</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgurl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: '20px' }}>
              {about.title}
            </h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// wrap About in MotionWrap - a HigherOrderComponent
// wrap that in AppWrap - another HigherOrderComponent
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
