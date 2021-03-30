import Button from "Elements/Buttons";
import React from "react";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {category.itemId.length === 0 ? (
            <div className="row">
              <div className="col-auto align-item-center">
                there is not destination
              </div>
            </div>
          ) : (
            category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`item-${index1}-category-${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-bold ">Choice</span>{" "}
                      </div>
                    )}
                  </div>
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={
                        item.imageId[0]
                          ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                          : ""
                      }
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
                    <span className="text-gray-500">
                      {item.city},{item.country}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
