import React, { Component } from "react";
import logo from "../../img/logo-turisteat.png";
import { Header, Image } from "semantic-ui-react";

class THeader extends Component {
  constructor(props) {
    super(props);
    //This is a stataless component
  }

  regularScreens = () => {
    return (
      <header className="app-header">
        <Image size="large" src={logo} />
      </header>
    );
  };

  minScreen = () => {};

  render() {
    return this.regularScreens();
  }
} //End class

export default THeader;
