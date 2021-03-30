import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { ToastContainer } from "react-toastify";

import Example from "Parts/Example";
import DetailsPage from "Pages/DetailsPage";
import Checkout from "Pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/example" component={Example} /> */}
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout" component={Checkout} />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
