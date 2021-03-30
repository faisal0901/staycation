import Header from "Parts/Header";
import React, { Component } from "react";
import { connect } from "react-redux";

import PageDetailsTittle from "Parts/PageDetailsTittle";
import FeaturedImg from "Parts/FeaturedImg";
import PageDetailsDescription from "Parts/PageDetailsDescription";
import BookingForm from "Parts/BookingForm";
import Activity from "Parts/Activity";
import Testimony from "Parts/Testimony";
import Footer from "Parts/Footer";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage, loadingPage } from "store/actions/page";
class DetailsPage extends Component {
  componentDidMount() {
    window.title = "staycation | Details Page";
    window.scrollTo(0, 0);
    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }
  render() {
    const { page, match } = this.props;

    if (!page[match.params.id])
      return (
        <div class="d-flex justify-content-center" style={{ marginTop: "20%" }}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );

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
    return (
      <div>
        <Header {...this.props} />
        <PageDetailsTittle
          breadcrumb={breadcrumbList}
          data={page[match.params.id]}
        />
        <FeaturedImg data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailsDescription
                data={page[match.params.id]}
              ></PageDetailsDescription>
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              ></BookingForm>
            </div>
          </div>
        </section>
        <Activity data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
