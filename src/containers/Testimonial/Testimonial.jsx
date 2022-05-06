import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  const handleClick = (index) => setCurrentIndex(index);

  const testimonial = testimonials[currentIndex];

  return (
    <section>
      { testimonials.length && (
        <>
          <article className="app__testimonial-item app__flex">
            <img src={urlFor(testimonial.imageurl)} alt={testimonial.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonial.name}</h4>
                <h5 className="p-text">{testimonial.company}</h5>
              </div>
            </div>
          </article>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft />
            </div>
            <div className="app__flex"
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);
