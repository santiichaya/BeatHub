import React from 'react';
import { ContainerPlayList } from '../components/ContainerPlayList';

const HomePage: React.FC = () => {
  return (
    <div className='main-container'>
      <ContainerPlayList ids={[1,1,1,]}/>
    </div>
  );
};

export default HomePage;
