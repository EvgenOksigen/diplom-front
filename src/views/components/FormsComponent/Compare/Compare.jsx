import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Compare = ({ input, options }) => {
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const moveUp = index => {
    if (index !== 0) {
      let tmp = right[index - 1];
      right[index - 1] = right[index];
      right[index] = tmp;
      setRight([...right]);
    }
    console.log("up");
  };
  const moveDown = index => { };

  useEffect(() => {
    const l = [],
      r = [];
    options.map(item => {
      l.push(item.left);
      r.push(item.right);
    });
    setLeft(l);
    setRight(r);
  }, []);
  useEffect(() => {
    console.log(left, right);
  }, [left, right]);

  /* 
    0: {left: "Jules Winnfield", right: "What does Marcellus Wallace look like?"}
    1: {left: "Brett", right: "What?"}
    2: {left: "Vincent Vega", right: "Thats a pretty fuckin good milkshake...I don't kno…f I'd pay $5 for it but thats pretty fuckin good."}
    3: {left: "Pumpkin", right: "Sounds like a shit job."}
  */
  return (
    <>
      <div className="answer-list">
        <div className="left">
          {left.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <div className="right">
          {right &&
            right.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => moveUp(index)}
                  >
                    up
                  </button>
                  {item}
                  <button
                    className="btn"
                    type="button"
                    onClick={() => moveDown(index)}
                  >
                    dwn
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Compare;
