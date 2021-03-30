import Header from "Parts/Header";
import React, { Component } from "react";
import { connect } from "react-redux";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "Elements/Stepper";
import BookingInformation from "Parts/Checkout/BookingInformation";

import Payment from "Parts/Checkout/Payment";
import Completed from "Parts/Checkout/Completed";
import Button from "Elements/Buttons";
import { submitBooking } from "store/actions/checkout";
class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };
  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };
  componentDidMount() {
    window.scroll(0, 0);
  }
  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;
    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    payload.append("bankId", data.bankName);
    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };
  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;
    console.log(data);
    if (!checkout) {
      return <p>tidak ada halaman</p>;
    }
    const steps = {
      bookingInformation: {
        title: "Booking information",
        description: "please fill up the blank fields bellow",
        content: (
          <BookingInformation
            data={data}
            ItemDetails={page[checkout._id]}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instruction below",
        content: (
          <Payment
            data={data}
            ItemDetails={page[checkout._id]}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Payment",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => {
            return (
              <>
                <Numbering
                  data={steps}
                  current={CurrentStep}
                  style={{ marginBottom: 50 }}
                />
                <Meta data={steps} current={CurrentStep} />;
                <MainContent data={steps} current={CurrentStep} />;
                {CurrentStep === "bookingInformation" && (
                  <Controller>
                    {data.firstName !== "" &&
                      data.lastName !== "" &&
                      data.email !== "" &&
                      data.phone !== "" && (
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      )}

                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isLight
                      href={`/properties/${checkout._id}`}
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}
                {CurrentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankHolder !== "" && (
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      )}
                    <Button
                      className="btn"
                      type="button"
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}
                {CurrentStep === "completed" && (
                  <Controller>
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isPrimary
                      hasShadow
                      href=""
                    >
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            );
          }}
        </Stepper>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});
export default connect(mapStateToProps, { submitBooking })(Checkout);
