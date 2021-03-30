import React from "react";
import ImgHero from "../assets/images/img-hero.jpg";
import ImgHero_ from "../assets/images/img-hero-frame.jpg";
import IconCities from "../assets/images/icon-traveler/ic_cities.svg";
import IconTraveler from "../assets/images/icon-traveler/ic_traveler.svg";
import IconTreasure from "../assets/images/icon-traveler/ic_treasure.svg";
import Button from "Elements/Buttons";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  function NumberFormat(number) {
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className=" font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next vacation
          </h1>
          <p
            className="mb-5 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            isPrimary
            hasShadow
            className="btn px-5 py-2"
            onClick={showMostPicked}
          >
            Show Me now
          </Button>
          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img height="36" width="36" src={IconTraveler} alt={`traveler`} />
              <h6 className="mt-3">
                {NumberFormat(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-ligtht">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                height="36"
                width="36"
                src={IconTreasure}
                alt={`${props.data.treasures}-traveler`}
              />
              <h6 className="mt-3">
                {NumberFormat(props.data.treasures)}
                <span className="text-gray-500 font-weight-ligtht">
                  {" "}
                  treasure
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                height="36"
                width="36"
                src={IconCities}
                alt={`${props.data.cities}-traveler`}
              />
              <h6 className="mt-3">
                {NumberFormat(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-ligtht">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div className="img-hero" style={{ width: 540, height: 410 }}>
            <img
              src={ImgHero}
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              alt=""
            />
            <img
              src={ImgHero_}
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
