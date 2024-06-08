import React from "react";

const AdditionalCharges = ({ register, data }: any) => {
  return (
    <div className="w-[345px]">
      <h2 className="font-semibold text-lg text-black">Additional Charges</h2>
      <hr className="border-b border-[#5D5CFF]" />
      <div className="mt-3 border border-[#DFDFFF] rounded-[5px]">
        {data?.map((charge: any) => (
          <div key={charge.id}>
            <label className="flex items-center space-x-2 p-3">
              <input
                type="checkbox"
                className="rounded focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50"
                {...register(charge.name)}
              />
              <div className="flex justify-between w-full">
                <span className="text-sm">{charge.label}</span>
                {charge.price && (
                  <span className="text-sm font-normal">
                    ${charge.price.toFixed(2)}
                  </span>
                )}
                {charge.present && (
                  <span className="text-sm font-normal">{charge.present}%</span>
                )}
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalCharges;
