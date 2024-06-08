import React from "react";
import Label from "./Label";
import { Controller } from "react-hook-form";
import { DatePicker } from "./date-picker";

const ReturnDate = ({ control, errors }: any) => {
  return (
    <div
      className="mb-4
      "
    >
      <Label>
        Return Date<span className="text-red-600">*</span>{" "}
      </Label>
      <Controller
        control={control}
        name="returnDate"
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePicker
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            onChange={onChange}
            onBlur={onBlur}
            //@ts-ignore
            selected={value}
            startDate={new Date()}
            className="border border-border-base !p-2 !pr-4 !w-full !rounded-[5px] outline-none text-sm"
            placeholderText="Select Date and Time"
            showIcon={true}
            calendarIconClassname="absolute right-0 top-[4px]"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            }
          />
        )}
      />
      {errors?.returnDate && <p className="my-2 text-xs text-red-500 text-start">{errors?.returnDate?.message}</p>}
    </div>
  );
};

export default ReturnDate;
