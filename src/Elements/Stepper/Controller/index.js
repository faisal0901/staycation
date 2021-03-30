import React from "react";

export default function Controller(props) {
  return (
    <div>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-3">{props.children}</div>
        </div>
      </section>
    </div>
  );
}
