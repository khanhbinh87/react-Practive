import React, { Component } from "react";

export default class DataBinding extends Component {
  //create attribute binding
  name = "KB ";
  fnc = () => {
    return <div>Hello fnc</div>;
  };
  render() {
    //create variable render =>ko su dung cho ham khac
    const school = "hcm";
    return (
      <div>
        Hello {this.name} - school : {school}
        <br />
        Hello {this.fnc()} 
      </div>
    );
  }
}
