import { calculateAll } from "@/src/utils/calculate-all";
import React from "react";

const ChargesSummary = ({ AdditionalChargesData, data }: any) => {
  const {
    weeklyCharge,
    dailyCharge,
    rentalTaxCharge,
    discountCharge,
    total,
    filteredOptions,
  } = calculateAll({ AdditionalChargesData, data });

  return (
    <div className="w-[413px]">
      <h2 className="font-semibold text-lg text-black">Charges Summary</h2>
      <hr className="border-b border-[#5D5CFF]" />
      <div className="mt-5 border border-[#5D5CFF] bg-[#DFDFFF] rounded-[5px] ">
        <div className="p-2">
          <table className="max-w-[413px] w-full text-sm text-left">
            <thead className="text-xs border-b border-[#5D5CFF]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Charge
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit
                </th>
                <th scope="col" className="px-6 py-3">
                  Rate
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-2 py-3 font-medium whitespace-nowrap"
                >
                  Daily
                </th>
                <td className="px-2 py-3 text-end">{data?.days || 0}</td>
                <td className="px-2 py-3 text-end">
                  ${(data?.vehicle?.rates?.daily || 0).toFixed(2)}
                </td>
                <td className="px-2 py-3 text-end">${dailyCharge.toFixed(2)}</td>
              </tr>

              <tr>
                <th
                  scope="row"
                  className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                >
                  Weekly
                </th>
                <td className="px-2 py-3 text-end">{data?.weeks || 0}</td>
                <td className="px-2 py-3 text-end">
                  ${(data?.vehicle?.rates?.weekly || 0).toFixed(2)}
                </td>
                <td className="px-2 py-3 text-end">${weeklyCharge.toFixed(2)}</td>
              </tr>

              {filteredOptions?.map((option: any) => (
                <tr key={option.id}>
                  <th
                    scope="row"
                    colSpan={2}
                    className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {option?.label}
                  </th>
                  <td className="px-2 py-3 text-end">
                    {option.price
                      ? `$${option?.price?.toFixed(2)}`
                      : `${option?.present}%`}
                  </td>
                  <td className="px-2 py-3 text-end">
                    {option.price
                      ? `$${option.price.toFixed(2)}`
                      : `$${rentalTaxCharge.toFixed(2)}`}
                  </td>
                </tr>
              ))}

              {!!data?.discount && (
                <tr>
                  <th
                    scope="row"
                    colSpan={2}
                    className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Discount
                  </th>
                  <td className="px-2 py-3 text-end">{data?.discount}%</td>
                  <td className="px-2 py-3 text-end">-${discountCharge.toFixed(2)}</td>
                </tr>
              )}

              <tr>
                <th
                  scope="row"
                  colSpan={3}
                  className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap"
                >
                  Total
                </th>
                <td className="px-2 py-3 text-end">${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChargesSummary;
