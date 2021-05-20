import React from "react";

const Board = () => {
  console.log(process.env.REACT_APP_GOOGLEID);
  return (
    <div className='ui equal width padded grid center aligned grid'>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          1
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          9
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          17
        </div>
      </div>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          2
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          10
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          18
        </div>
      </div>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          3
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          11
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          19
        </div>
      </div>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          4
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          12
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          20
        </div>
      </div>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginleft: "2px", marginRight: "2px" }}
        >
          5
        </div>
        <div
          className='column teal'
          style={{ marginleft: "2px", marginRight: "2px" }}
        >
          13
        </div>
        <div
          className='column teal'
          style={{ marginleft: "2px", marginRight: "2px" }}
        >
          21
        </div>
      </div>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          6
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          14
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          22
        </div>
      </div>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          7
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          15
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          23
        </div>
      </div>
      <div className='row' style={{ margin: "3px" }}>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          8
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          16
        </div>
        <div
          className='column teal'
          style={{ marginLeft: "2px", marginRight: "2px" }}
        >
          24
        </div>
      </div>
    </div>
  );
};

export default Board;
