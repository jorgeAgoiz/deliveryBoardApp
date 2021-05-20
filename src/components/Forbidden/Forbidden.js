import React from "react";

const Forbidden = () => {
  return (
    <div className='ui segment center aligned'>
      <img
        className='ui centered middle aligned huge image'
        src='https://images.unsplash.com/photo-1515444029923-60569d238ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
        alt='forbidden'
      />
      <div className='ui clearing divider'></div>
      <h2 className='ui center aligned header'>You need to login.</h2>
    </div>
  );
};

export default Forbidden;
