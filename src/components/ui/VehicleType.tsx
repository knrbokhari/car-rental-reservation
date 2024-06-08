import React from "react";
import { Control } from "react-hook-form";
import Label from "./Label";
import SelectInput from "./select-input";

interface Props {
  control: Control<any>;
  data: any;
  errors: any;
}

const VehicleType = ({ control, data = [], errors }: Props) => {
  return (
    <div className="mb-2">
      <Label>
        Vehicle Type<span className="text-red-600">*</span>
      </Label>
      <SelectInput
        name="vehicleType"
        control={control}
        getOptionLabel={(option: any) => option?.type}
        getOptionValue={(option: any) => option?.type}
        options={data!}
      />
      {errors?.vehicleType && (
        <p className="my-2 text-xs text-red-500 text-start">
          {errors?.vehicleType?.message}
        </p>
      )}
    </div>
  );
};

export default VehicleType;
