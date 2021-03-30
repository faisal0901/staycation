import React from "react";
import Button from "../Elements/Buttons";
import Brandicon from "./Icontext";
export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  if (props.isCentered) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button href="#" type="link" className="brand-text-icon mx-auto">
              {" "}
              Stay<span className="text-gray-900">cation</span>
            </Button>
          </nav>
        </div>
      </header>
    );
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Brandicon />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button href="" classname="nav-link" type="link">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                <Button href="/browse-by" classname="nav-link" type="link">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button href="/stories" classname="nav-link" type="link">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button href="/agents" classname="nav-link" type="link">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
