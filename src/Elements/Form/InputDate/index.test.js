import { render, fireEvent } from "@testing-library/react";
import InputDate from "./index";
// import { screen } from "@testing-library/dom";
import React, { Component } from "react";
class TestInput extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <InputDate
          max={30}
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
      </div>
    );
  }
}
const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);
  return {
    container,
    wrapper,
    input,
  };
};
test("should have wrapper ", () => {
  const { wrapper } = setup();
  expect(wrapper).toBeInTheDocument();
});
test("should have <input> ", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});
test("should have date Picker ", () => {
  const { container, input } = setup();
  expect(input).toBeInTheDocument();
  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
  expect(datePickerWrapper).toBeInTheDocument();
});
