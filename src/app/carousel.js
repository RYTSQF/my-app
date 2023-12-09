import styled from './page.module.css'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://cdn.nba.com/davinci/images/team-matchups/nba/latest/web/dal-lac/1200x628.png',
    altText: 'Dallas Mavericks Vs LA Clippers',
    caption: 'Dallas Maverick Vs LA Clippers',
    key: 1,
  },
  {
    src: 'https://cdn.nba.com/davinci/images/team-matchups/nba/latest/web/dal-lal/1200x628.png',
    altText: 'Dallas Mavericks Vs LA Lakers',
    caption: 'Dallas Mavericks Vs LA Lakers',
    key: 2,
  },
  {
    src: 'https://cdn.nba.com/davinci/images/team-matchups/nba/latest/web/dal-sac/1200x628.png',
    altText: 'Dallas Mavericks Vs Sacramento Kings',
    caption: 'Dallas Mavericks Vs Sacramento Kings',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className={styled.carousel}>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
      
    </Carousel>
    </div>
  );
}

export default Example;