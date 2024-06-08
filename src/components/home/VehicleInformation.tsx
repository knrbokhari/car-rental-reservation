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
      <div className="border-b-2 border-purple-500 mb-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">Vehicle Information</h2>
      </div>
      <div className="mt-3 p-[10px] border border-[#DFDFFF] rounded-[5px]">
        <VehicleType control={control} data={vehicleTypeData} errors={errors} />
        <Vehicle control={control} data={vehicleData} errors={errors} />
      </div>
    </div>
  );
};

export default VehicleInformation;
