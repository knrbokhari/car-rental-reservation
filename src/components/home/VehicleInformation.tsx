import React from "react";
import VehicleType from "../ui/VehicleType";
import Vehicle from "../ui/Vehicle";

const VehicleInformation = ({
  vehicleTypeData,
  errors,
  control,
  vehicleData,
}: any) => {
  return (
    <div className="w-[345px]">
      <h2 className="font-semibold text-lg text-black">Vehicle Information</h2>
      <hr className="border-b border-[#5D5CFF]" />
      <div className="mt-5 p-3.5 border border-[#DFDFFF] rounded-[5px]">
        <VehicleType control={control} data={vehicleTypeData} errors={errors} />
        <Vehicle control={control} data={vehicleData} errors={errors} />
      </div>
    </div>
  );
};

export default VehicleInformation;
