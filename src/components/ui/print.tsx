import React, { Component } from "react";
import Receipt from "../receipt";

export default class Print extends Component {
  render() {
    const { printData, AdditionalChargesData }: any = this.props;

    return (
      <>
        <Receipt
          data={printData}
          AdditionalChargesData={AdditionalChargesData}
        />
      </>
    );
  }
}
