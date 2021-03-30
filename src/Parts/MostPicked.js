import Button from "Elements/Buttons";
import React from "react";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`most-picked-${index}`}
              className={`item column-4 row-${index === 0 ? "2" : "1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-ligth">per{item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={`https://ejsrestapi.herokuapp.com/${item.imageId[0].imageUrl}`}
                    className="img-cover"
                    alt={item.name}
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h6>{item.title}</h6>
                  </Button>

                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
