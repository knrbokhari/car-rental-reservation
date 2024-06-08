import React, { useState } from "react";
import Input from "../ui/Input";
import PickupDate from "../ui/PickupDate";
import ReturnDate from "../ui/ReturnDate";
import Label from "../ui/Label";

const ReservationDetails = ({ register, errors, control }: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-[345px]">
      <h2 className="font-semibold text-lg text-black">Reservation Details</h2>
      <hr className="border-b border-[#5D5CFF]" />

      <div className="mt-3 p-[10px] border border-[#DFDFFF] rounded-[5px]">
        <Input
          label="Reservation ID"
          {...register("reservationID")}
          error={errors?.reservationID?.message!}
          className="mb-3"
        />

        <PickupDate control={control} errors={errors} />
        <ReturnDate control={control} errors={errors} />

        <div className="flex justify-between items-center">
          <Label className="!m-0">Duration</Label>
          <Input
            {...register("duration")}
            error={errors?.duration?.message!}
            className="!w-[200px] mb-3"
          />
        </div>

        <Input
          label="Discount"
          {...register("duration")}
          error={errors?.duration?.message!}
        />
      </div>
    </div>
  );
};

export default ReservationDetails;
