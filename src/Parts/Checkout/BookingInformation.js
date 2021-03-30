import React from "react";
import { InputText } from "Elements/Form";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  console.log(ItemDetails);
  return (
    <div class="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-item-center">
        <div className="col-5 border-right py-5">
          <div className="card">
            <figure className="img-wrapper" style={{ height: 270 }}>
              <img
                className="img-cover"
                src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
              />
            </figure>
            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wrapper">
                  <h5>Grand Dhika</h5>
                  <span className="text-gray-500">united states, As</span>
                </div>
              </div>
              <div className="col-auto">
                <span>
                  ${+checkout.duration * ItemDetails.price} USD
                  <span className="text-gray-500"> per </span>
                  {checkout.duration} {ItemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.onChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.onChange}
          />

          <label htmlFor="email">Email Address</label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={props.onChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <InputText
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
}
