import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessComponent = () => {
  const { state } = useLocation();
  return (
    <div className="success-container">
      <h1>Form Submission Successful</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default SuccessComponent;
