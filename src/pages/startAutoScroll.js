import React from "react";

const cardData = [
  { src: '/assets/images/hero-card1.png' },
  { src: '/assets/images/hero-card2.png' },
  { src: '/assets/images/hero-card3.png' },
  { src: '/assets/images/hero-card4.png' },
];

const CardContent = ({ card }) => (
  <div className="my-1">
    <img src={card.src} alt="Client" className="card-img" />
  </div>
);

const CardScroll = () => {
  const scrollData = [...cardData,...cardData];

  return (
    <div className="card-scroll-container">
      <div className="card-column left">
        <div className="scroll-content">
          {scrollData.map((card, index) => (
            <div className="hero-cards" key={`left-${index}`}>
              <CardContent card={card} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="card-column right">
        <div className="scroll-content">
          {scrollData.map((card, index) => (
            <div className="hero-cards" key={`right-${index}`}>
              <CardContent card={card} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default CardScroll;
