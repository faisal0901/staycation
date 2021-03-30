import React from "react";

export default function FeaturedImg({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`featured-img-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                    alt={item._id}
                    className="img-cover"
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
