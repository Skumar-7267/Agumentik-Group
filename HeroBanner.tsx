// components/HeroBanner.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setHeroTitle, setHeroDescription } from '../store/actions/heroActions';

const HeroBanner: React.FC = () => {
  const heroContent = useSelector((state: RootState) => state.heroContent);
  const dispatch = useDispatch();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeroTitle(event.target.value));
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeroDescription(event.target.value));
  };

  return (
    <div className="hero-banner">
      <input type="text" value={heroContent.title} onChange={handleTitleChange} />
      <input type="text" value={heroContent.description} onChange={handleDescriptionChange} />
    </div>
  );
};

export default HeroBanner;
