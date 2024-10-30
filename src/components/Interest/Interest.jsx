import React from 'react';
import './Interest.css';

const Interest = () => {
  const interestsData = [
    {
      title: 'Coding',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis amet, libero quam deleniti facilis hic ullam voluptatem temporibus, culpa sit consequuntur rerum accusamus nemo laborum non illum. Sunt, voluptas?',
    },
    {
      title: 'Gaming',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis amet, libero quam deleniti facilis hic ullam voluptatem temporibus, culpa sit consequuntur rerum accusamus nemo laborum non illum. Sunt, voluptas?',
    },
  ];

  return (
    <div className="interest-container" data-aos="fade-up">
      <h2 className="interest-title">Interests</h2>
      <div className="interest-grid">
        {interestsData.map((interest, index) => (
          <div key={index} className="interest-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 className="interest-title-text">{interest.title}</h3>
            <p className="interest-description">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
