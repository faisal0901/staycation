import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function PageDetailsDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.map((feature, index) => {
          return (
            <div className="col-3" key={`feature-${index}`}>
              <img
                src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                width="38"
                className="d-block mb-2"
                alt={feature.name}
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
