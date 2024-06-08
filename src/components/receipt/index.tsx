/* eslint-disable react/no-unescaped-entities */
import { calculateAll } from "@/src/utils/calculate-all";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

const Receipt = ({ AdditionalChargesData, data }: any) => {
  const {
    weeklyCharge,
    dailyCharge,
    rentalTaxCharge,
    discountCharge,
    total,
    filteredOptions,
  } = calculateAll({ AdditionalChargesData, data });

  console.log(
    weeklyCharge,
    dailyCharge,
    rentalTaxCharge,
    discountCharge,
    total,
    filteredOptions,
    AdditionalChargesData,
    data
  );

  return (
    <div className="bg-gray-100 p-10 w-[715px]">
      <div className="flex text-[13px]">
        <div className="w-1/2">
          <div className="flex">
            <div className="w-1/2">
              <Image
                alt="car"
                height={200}
                width={300}
                src={data?.vehicle?.imageURL}
                className="mb-2"
              />
              <h2 className="font-bold">RENTER INFO</h2>
              <p>
                {data?.firstName} {data?.lastName}
              </p>
              <p>{data?.email}</p>
              <p>PH: {data?.phone}</p>
            </div>
            <div className="w-1/2">
              <p>CH Car Place Inc</p>
              <p>162 Bergen st, Brooklyn, NY 11213, PH#</p>
              <br />
              <p>Monday 9:00AM - 6:00 PM </p>
              <p>Tuesday 9:00AM - 6:00 PM </p>
              <p>Wednesday 9:00AM - 6:00 PM </p>
              <p>Thursday 9:00AM - 6:00 PM </p>
              <p>Friday 9:00AM - 6:00 PM </p>
              <p>Saturday 9:00AM - 6:00 PM </p>
              <p>Sunday 9:00AM - 6:00 PM </p>
            </div>
          </div>

          <h1 className="my-5 font-bold text-base">
            ADDITIONAL AUTHORIZED DRIVER(s)
          </h1>

          <h1 className="mt-2 mb-1 font-bold text-base uppercase">
            unit details
          </h1>
          <p className="uppercase">Unit: </p>
          <p>
            Make & Model: {data?.vehicle?.make} & {data?.vehicle?.model}
          </p>

          <br />

          <p className="uppercase">Bull to: </p>
          <p>Payment Type: Unpaid</p>
          <p>AUTH: ${total.toFixed(2)}</p>

          <br />

          <p>Referral:</p>
          <p>
            NOTICE: Collision Insurance (CDW)- $7 per day Limits liability of
            damages to one's own vehicle up to $1000 in event of an accident,
          </p>
          <p>
            by waiving this coverage renter agrees to be hold liable for damages
            up to the entire value of the vehicle.
          </p>

          <div className="flex my-5">
            <div className="w-1/2 text-center">Accept</div>
            <div className="w-1/2 text-center">Reject</div>
          </div>

          <p>
            Rental service may be refused anyone when done in the best interest
            of the renting company or customer. Rates do not include gasoline. -
            Reserves the right to collect deposit covering estimated rental
            charges.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-lg">Reservation</h1>
          <h1 className="font-bold text-lg mb-1">{data?.reservationID}</h1>

          <p>REPAIR ORDER:</p>
          <p>CLAIM:</p>
          <p>
            {" "}
            Date?Time Out:{" "}
            {dayjs(data?.pickupDate).format("MM/DD/YYYY hh:mm A")}
          </p>
          <p>
            {" "}
            Date?Time In: {dayjs(data?.returnDate).format("MM/DD/YYYY hh:mm A")}
          </p>

          <div className="bg-slate-300 w-full mb-5 mt-1">
            <h2 className="font-bold text-sm pt-2">CHARGE SUMMARY</h2>
            <table className="max-w-[500px] w-full text-sm text-left">
              <thead className="text-xs">
                <tr>
                  <th scope="col" className="px-2 py-1.5"></th>
                  <th scope="col" className="px-2 py-1.5">
                    Unit
                  </th>
                  <th scope="col" className="px-2 py-1.5">
                    Price
                  </th>
                  <th scope="col" className="px-2 py-1.5">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="px-2 py-1 font-medium whitespace-nowrap"
                  >
                    Daily
                  </th>
                  <td className="px-2 py-1 text-end">{data?.days || 0}</td>
                  <td className="px-2 py-1 text-end">
                    ${(data?.vehicle?.rates?.daily || 0).toFixed(2)}
                  </td>
                  <td className="px-2 py-1 text-end">
                    ${dailyCharge.toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <th
                    scope="row"
                    className="px-2 py-1 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Weekly
                  </th>
                  <td className="px-2 py-1 text-end">{data?.weeks || 0}</td>
                  <td className="px-2 py-1 text-end">
                    ${(data?.vehicle?.rates?.weekly || 0).toFixed(2)}
                  </td>
                  <td className="px-2 py-1 text-end">
                    ${weeklyCharge.toFixed(2)}
                  </td>
                </tr>

                {filteredOptions?.map((option: any) => (
                  <tr key={option.id}>
                    <th
                      scope="row"
                      colSpan={2}
                      className="px-2 py-1 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {option?.label}
                    </th>
                    <td className="px-2 py-1 text-end">
                      {option.price
                        ? `$${option?.price?.toFixed(2)}`
                        : `${option?.present}%`}
                    </td>
                    <td className="px-2 py-1 text-end">
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
                      className="px-2 py-1 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Discount
                    </th>
                    <td className="px-2 py-1 text-end">{data?.discount}%</td>
                    <td className="px-2 py-1 text-end">
                      -${discountCharge.toFixed(2)}
                    </td>
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
                  <td className="px-2 py-1 text-end">${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-5">
            Your rental agreement offers, for an additional charge, an optional
            waiver to cover all or a part of your responsibility for damage to
            or loss of the vehicle: Before deciding whether to purchase the
            waiver, you may wish to determine whether your own automobile
            insurance or credit card agreement that provides you coverage for
            rental vehicle damage or loss and determines the amount of the
            deductible loss and determines the amount of the deductible under
            your own insurance coverage. The purchase of this agreement is not
            mandatory. The waiver is not insurance. I acknowledge that I have
            received and read a copy of this. pen_spark
          </p>

          <p>Renters Signature</p>
          <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>

          <p>Additional Driver</p>
          <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
