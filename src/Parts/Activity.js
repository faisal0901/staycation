import Button from "Elements/Buttons";
import React from "react";

export default function Categories({ data }) {
  if (data.length === 0) return null;

  return (
    <section className="container">
      <h1 className="mb-3 h2">Activity</h1>
      <div className="container-grid">
        {data.map((item, index2) => {
          return (
            <div className="item column-3 row-1" key={`category-${index2}`}>
              <div className="card">
                {item.isPopular && (
                  <div className="tag">
                    Popular <span className="font-weight-bold ">Choice</span>{" "}
                  </div>
                )}
              </div>
              <figure className="img-wrapper" style={{ height: 180 }}>
                <img
                  src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                  className={"img-cover"}
                  alt={item.name}
                />
              </figure>
              <div className="meta-wrapper">
                <Button
                  href={`/properties/${item._id}`}
                  type="link"
                  className="stretched-link d-blok text-gray-800"
                >
                  {" "}
                  <h4 className="h4">{item.name}</h4>
                </Button>
                <span className="text-gray-500">{item.type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
