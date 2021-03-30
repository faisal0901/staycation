import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";
const setup = () => {
  const breadcrumbList = [
    {
      pageTitle: "home",
      pageHref: "",
    },
    {
      pageTitle: "home Details",
      pageHref: "",
    },
  ];
  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList} className={"breadcrumb"} />
    </Router>
  );
  const breadcrumb = document.querySelector(`.breadcrumb`);
  return {
    breadcrumb,
  };
};
test("Should have text breadcrumb", () => {
  const { breadcrumb } = setup();
  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("home");
  expect(breadcrumb).toHaveTextContent("home Details");
});
