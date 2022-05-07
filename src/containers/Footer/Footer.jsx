import React, { useState } from 'react';
import { client } from '../../client';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const defaultFormData = {
  username: '',
  email: '',
  message: ''
};

const Footer = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: username,
      email,
      message
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <footer>
      <h2 className="head-text">Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:pezechigozirim@gmail.com" className="p-text">
            pezechigozirim@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +234 (70)37523771" className="p-text">
            +234 (70) 3752 3771
          </a>
        </div>

        { !isFormSubmitted ? (
          <form
            onSubmit={handleSubmit}
            method="post"
            className="app__footer-form app__flex"
          >
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="app__flex">
              <input
                type="email"
                className="p-text"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                className="p-text"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="p-text">
              Send Message
            </button>
          </form>
        ) : (
          <div>
            <h2 className="head-text">
              Thank you for getting in touch!
            </h2>
          </div>
        )}
      </div>
    </footer>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
