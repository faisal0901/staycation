import React from "react";
import completedImg from "assets/images/completed.jpg";
export default function Completed() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-4">
          <img
            src={completedImg}
            alt={"completed image"}
            className="img-fluid"
          />
          <p className="text-gray-500">
            we will accept you via email later once the transaction accepted
          </p>
        </div>
      </div>
    </div>
  );
}
