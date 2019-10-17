import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Coolbuttons from "./Coolbuttons";

class Navbar extends Component {

  render() {


    return (

      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">

          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">

                <p className="control">
                  <Coolbuttons one="login" two="signup" />
                </p>

              </div>
            </div>
          </div>
        </div>
      </nav >

    );
  }
}

export default Navbar;