import React from 'react';
import spinner from '../spinner.gif';

const Loader: React.FC = () => {
  return (
    <>
      <div className="img">
        <img src={spinner} alt="Loading..." />
      </div>
    </>
  );
};

export default Loader;
