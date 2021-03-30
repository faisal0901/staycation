import React from "react";
import Button from "Elements/Buttons";

import Icontext from "./Icontext";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <Icontext />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Star booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/user-payments">
                  Use Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Our carees
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/user-payments">
                  Terms & condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+62211212412">
                  021-1212412
                </Button>
              </li>
              <li className="list-group-item">
                <span> jakarta </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center copyrights">CopyRight 2019</div>
        </div>
      </div>
    </footer>
  );
}
