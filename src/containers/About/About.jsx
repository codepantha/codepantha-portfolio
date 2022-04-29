import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Front-end development',
    description: 'I love the UI and love to code it',
    imgUrl: images.about05,
  },
  {
    title: 'Backend development',
    description:
      'I also love to work on the backend. creating database schemas, Building APIs, and developing complex applications',
    imgUrl: images.about06
  },
  {
    title: 'UX',
    description:
      'I am passionate about providing the best User experience possible.',
    imgUrl: images.about07
  }
];

const About = () => {
  return (
    <section>
      <h2 className="head-text">
        Code is like <span>humour.</span>
        <br />
        When you have to explain it, <span>It is bad</span>
      </h2>
      <div className="app__profiles">
        {
          abouts.map((about, index) => (
            <motion.div
              animate={{ opacity: [0, 1] }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >

              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: '20px' }}>{about.title}</h2>
              <p className="p-text">{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
};

export default About;
