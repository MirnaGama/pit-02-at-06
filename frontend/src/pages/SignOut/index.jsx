import React from 'react';

const SignOut = () => {
  window.localStorage.removeItem('token');
  return (
    <div>
      Volte sempre
    </div>
  );
};

export default SignOut;
