import React from 'react';
import './App.css';

//функция отрисовки карточек
export default function ProjectList({ cardsImgs }) {
  return (
    <div className="project-list">
      {cardsImgs.map((card, index) => (
        <div key={index} className="project-card">
          <img
            src={card.img}
            className="project-image"
          />
        </div>
      ))}
    </div>
  );
}