import React from "react";
import Input from "../ui/Input";

const CustomerInformation = ({ register, errors }: any) => {
  return (
    <div className="w-[345px]">
      <div className="border-b-2 border-purple-500 mb-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">Customer Information</h2>
      </div>
      <div className="mt-3 p-[10px] border border-[#DFDFFF] rounded-[5px]">
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
