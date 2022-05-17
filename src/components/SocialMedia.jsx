import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/codepantha" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/codepantha" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/promise-eze/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;
