import Breadcrumb from "Elements/BreadCrumb";
import React from "react";

export default function PageDetailsTittle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <div className="row align-item-center">
        <div className="col">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="col-auto text-center">
          <h1 className="h2">{data.title}</h1>
          <span className="text-gray-400">
            {data.city} , {data.country}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}
