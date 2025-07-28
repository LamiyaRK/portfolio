import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const skills = [
  { name: 'HTML', icon: '/Frontend/icons8-html-48.png', category: 'Frontend' },
  { name: 'CSS', icon: '/Frontend/icons8-css-48.png', category: 'Frontend' },
  { name: 'JavaScript', icon: '/Frontend/icons8-javascript-48.png', category: 'Frontend' },
  { name: 'React', icon: '/Frontend/icons8-react-32.png', category: 'Frontend' },
  { name: 'Tailwind', icon: '/Frontend/icons8-tailwind-css-48.png', category: 'Frontend' },

  { name: 'Express JS', icon: '/backend/icons8-express-js-50.png', category: 'Backend' },
  { name: 'MongoDB', icon: '/backend/icons8-mongodb-24.png', category: 'Backend' },
  { name: 'Firebase', icon: '/backend/icons8-firebase-48.png', category: 'Backend' },

  { name: 'Figma', icon: '/Tools/icons8-figma-48.png', category: 'Tools' },
  { name: 'VS Code', icon: '/Tools/icons8-visual-studio-30.png', category: 'Tools' },
  { name: 'GitHub', icon: '/Tools/icons8-github-48.png', category: 'Tools' },

  { name: 'C', icon: '/Others/icons8-c-programming-48.png', category: 'Others' },
  { name: 'C++', icon: '/Others/icons8-c-48.png', category: 'Others' },
  { name: 'Java', icon: '/Others/icons8-java-48.png', category: 'Others' },
  { name: 'Python', icon: '/Others/icons8-python-48.png', category: 'Others' },
  { name: 'PHP', icon: '/Others/icons8-php-logo-80.png', category: 'Others' },
  { name: 'MySQL', icon: '/Others/icons8-mysql-48.png', category: 'Others' },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Others'];

const fadeScale = keyframes`
  0% {opacity: 0; transform: scale(0.95);}
  100% {opacity: 1; transform: scale(1);}
`;

const Radio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === selectedCategory);

  return (
    <StyledWrapper>
      <div className="radio-input">
        {categories.map(category => {
          const inputId = `category-${category}`;
          return (
            <label key={category} className="label" htmlFor={inputId}>
              <input
                id={inputId}
                type="radio"
                name="value-radio"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              <span className="text">{category}</span>
            </label>
          );
        })}
      </div>

      <div className="grid">
        {filteredSkills.map(skill => (
          <button key={skill.name} className="skill-button" title={skill.name}>
            <img src={skill.icon} alt={skill.name} />
            {skill.name}
          </button>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default Radio;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  .radio-input {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    background-color: #000;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  .radio-input input {
    display: none;
  }

  .radio-input .label {
    width: 150px;
    height: 50px;
    background: linear-gradient(to bottom, #333, #222);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    user-select: none;
  }

  .label input[type='radio']:checked + .text {
    color: #66fcf1;
    text-shadow: 0px 0px 8px #66fcf1;
  }

  .label:has(input[type='radio']:checked) {
    background: #1d1d1d;
    box-shadow: 0 0 10px #66fcf1;
  }

  .label .text {
    color: white;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .grid {
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  .skill-button {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    padding: 1.25rem 1.5rem;
    border-radius: 20px;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid transparent;
    transition: all 0.25s ease;
    animation: ${fadeScale} 0.3s ease forwards;
    cursor: pointer;
  }

  .skill-button:hover {
    background-color: #0b0b0b;
    border-color: #66fcf1;
    transform: translateY(-3px) scale(1.05);
  }

  .skill-button img {
    width: 40px;
    height: 40px;
  }
`;
