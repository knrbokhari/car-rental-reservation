import React from "react";
import Input from "../ui/Input";

const CustomerInformation = ({ register, errors }: any) => {
  return (
    <div className="w-[345px]">
      <h2 className="font-semibold text-lg text-black">Customer Information</h2>
      <hr className="border-b border-[#5D5CFF]" />
      <div className="mt-5 p-3.5 border border-[#DFDFFF] rounded-[5px]">
        <div>
          <Input
            label="First Name"
            {...register("firstName")}
            error={errors?.firstName?.message!}
            className="mb-3"
            required={true}
          />
        </div>
        <div>
          <Input
            label="Last Name"
            {...register("lastName")}
            error={errors?.lastName?.message!}
            className="mb-3"
            required={true}
          />
        </div>
        <div>
          <Input
            label="Email"
            {...register("email")}
            error={errors?.email?.message!}
            className="mb-3"
            required={true}
          />
        </div>
        <div>
          <Input
            label="Phone"
            {...register("phone")}
            error={errors?.phone?.message!}
            required={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
