import Star from "Elements/Stars";
import React from "react";
import testimonyAcents from "assets/images/testimonial-landingpages-frame.jpg";
import Button from "Elements/Buttons";
export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-item-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={`${process.env.REACT_APP_HOST}/images/testimonial2.jpg`}
              className="position-absolute"
              style={{ zIndex: 1 }}
              alt="s"
            />
            <img src={testimonyAcents} alt="s" />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginTop: 80 }}>{data.name}</h4>
          <Star width={35} height={35} value={4.5} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
