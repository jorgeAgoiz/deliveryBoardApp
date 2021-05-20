import React from "react";

const Forbidden = () => {
  return (
    <div className='ui segment center aligned'>
      <img
        className='ui centered middle aligned huge image'
        src='https://images.unsplash.com/photo-1570395623789-d9c9a31598a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      />
      <div className='ui clearing divider'></div>
      <h2 className='ui center aligned header'>You need to login.</h2>
    </div>
  );
};

export default Forbidden;
