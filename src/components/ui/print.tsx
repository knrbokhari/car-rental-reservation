/* eslint-disable react/display-name */
import React, { Component } from "react";
import Receipt from "../receipt";
interface PrintProps {
  printData: {};
  AdditionalChargesData: (
    | {
        id: number;
        name: string;
        label: string;
        price: number;
        present?: undefined;
      }
    | {
        id: number;
        name: string;
        label: string;
        present: number;
        price?: undefined;
      }
  )[];
  ref: React.Ref<any>;
}

const Print = React.forwardRef<any, PrintProps>((props, ref) => {
  const { printData, AdditionalChargesData } = props;

  return (
    <div ref={ref}>
      <Receipt data={printData} AdditionalChargesData={AdditionalChargesData} />
    </div>
  );
});

export default Print;
