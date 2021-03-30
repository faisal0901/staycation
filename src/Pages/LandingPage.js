import React, { Component } from "react";
import Header from "../Parts/Header";
import Hero from "Parts/Hero";
import MostPicked from "Parts/MostPicked";
import Categories from "Parts/Categories";
import { connect } from "react-redux";
import Testimony from "Parts/Testimony";
import Footer from "Parts/Footer";
import { fetchPage } from "store/actions/page";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "staycation | Home";
    window.scrollTo(0, 0);
    if (!this.props.page.landingPage) {
      this.props.fetchPage(`/landing-page`, "landingPage");
    }
  }
  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage"))
      return (
        <div class="d-flex justify-content-center" style={{ marginTop: "20%" }}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );

    return (
      <>
        <Header {...this.props} />
        <Hero
          refMostPicked={this.refMostPicked}
          data={page.landingPage.hero}
        ></Hero>
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial}></Testimony>
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps, { fetchPage })(LandingPage);
