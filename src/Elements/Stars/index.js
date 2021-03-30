import React from "react";
import propTypes from "prop-types";
import "./index.scss";
export default function Star({ value, height, width, spacing, className }) {
  const decimals = Number(value) % 1;

  const stars = [];
  let leftPost = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPost = leftPost + width;
    stars.push(
      <div
        className="star"
        key={`start-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5) {
    stars.push(
      <div
        className="star"
        key={`start`}
        style={{
          left: leftPost,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  }
  const startWithPlaceHolder = [];
  for (let index = 0; index < 5; index++) {
    stars.push(
      <div
        className="star-placeholder"
        key={`start-placeholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {startWithPlaceHolder}
        {stars}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  witdh: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
