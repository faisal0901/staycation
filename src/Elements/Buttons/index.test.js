import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("should not allowed click button if disabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
test("is loading render text loading....", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});
test("should render tag a", () => {
  const { container } = render(
    <Router>
      {" "}
      <Button type="link" href="" isExternal></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render tag link", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
