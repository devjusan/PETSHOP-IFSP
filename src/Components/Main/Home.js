import React from 'react';
import DogPhoto from './DogPhoto';
import DogPhotoContent from './DogPhotoContent';

const Home = () => {
  return (
    <div>
      <div>
        <DogPhoto />
      </div>
      <div>
        <DogPhotoContent />
      </div>
    </div>
  );
};

export default Home;
