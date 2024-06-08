/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import * as Yup from "yup";
import { FormProvider, Resolver, useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import ReservationDetails from "../components/home/ReservationDetails";
import CustomerInformation from "../components/home/CustomerInformation";
import VehicleInformation from "../components/home/VehicleInformation";
import AdditionalCharges from "../components/home/AdditionalCharges";
import ChargesSummary from "../components/home/ChargesSummary";
import { useEffect, useRef, useState } from "react";
import useDateDifferenceCalculation from "../utils/use-date-difference-calculation";
import { useReactToPrint } from "react-to-print";
import Print from "../components/ui/print";

type initialTypes = {
  reservationID?: string;
  pickupDate: string;
  returnDate: string;
  duration: string;
  discount: string;
  vehicleType: any;
  vehicle: any;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  collisionDamageWaiver: boolean;
  liabilityInsurance: boolean;
  rentalTax: boolean;
  weeks: any;
  days: any;
};

const validationSchema = Yup.object().shape({
  reservationID: Yup.string().optional(),
  pickupDate: Yup.string().required("Pickup date is required"),
  returnDate: Yup.string().required("Return date is required"),
  duration: Yup.string(),
  weeks: Yup.number(),
  days: Yup.number(),
  discount: Yup.number()
    .nullable()
    .transform((value) => (isNaN(value) ? undefined : value))
    .typeError("Discount must be number")
    .max(99, "Discount must be under 100")
    .min(-0, "Discount must positive"),
  vehicleType: Yup.object().required("Vehicle type is required"),
  vehicle: Yup.object().required("Vehicle is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  collisionDamageWaiver: Yup.boolean(),
  liabilityInsurance: Yup.boolean(),
  rentalTax: Yup.boolean(),
});

export default function HomePage({ data }: any) {
  const [printData, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const methods = useForm<initialTypes>({
    resolver: yupResolver(validationSchema) as unknown as Resolver<initialTypes>,
    shouldUnregister: true,
    // @ts-ignore
    defaultValues: {
      reservationID: "",
      pickupDate: "",
      returnDate: "",
      duration: "",
      weeks: 0,
      days: 0,
      discount: "",
      vehicleType: null,
      vehicle: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      collisionDamageWaiver: false,
      liabilityInsurance: false,
      rentalTax: false,
    },
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = methods;

  const vehicle: any = watch("vehicle");
  const weeks: any = watch("weeks");
  const days: any = watch("days");
  const discount: any = watch("discount");
  const pickupDate: any = watch("pickupDate");
  const returnDate: any = watch("returnDate");
  const vehicleType: any = watch("vehicleType");
  const rentalTax: any = watch("rentalTax");
  const collisionDamageWaiver: any = watch("collisionDamageWaiver");
  const liabilityInsurance: any = watch("liabilityInsurance");

  useEffect(() => {
    if (returnDate && pickupDate) {
      const data = useDateDifferenceCalculation({
        start: pickupDate,
        end: returnDate,
      });

      setValue("duration", data.duration);
      setValue("weeks", data.weeks);
      setValue("days", data.days);
    }
  }, [returnDate, pickupDate]);

  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Create a new array with unique car types
  const uniqueCarTypes = Array.from(
    new Set(data?.map((car: { type: any }) => car.type))
  );
  // Create a new array with only one object for each unique car type
  const vehicleTypeData = uniqueCarTypes.map((type) =>
    data?.find((car: any) => car.type === type)
  );

  // find vehicle base on vehicle type
  const vehicleData = data?.filter(
    (i: { type: any }) => i?.type === vehicleType?.type
  );

  // Additional Charges Data
  const AdditionalChargesData = [
    {
      id: 1,
      name: "collisionDamageWaiver",
      label: "Collision Damage Waiver",
      price: 9.0,
    },
    {
      id: 2,
      name: "liabilityInsurance",
      label: "Liability Insurance",
      price: 15.0,
    },
    { id: 3, name: "rentalTax", label: "Rental Tax", present: 11.5 },
  ];

  const onSubmit = async (value: any) => {
    setLoading(true);
    setData({
      ...value,
    });
    setTimeout(() => {
      handlePrint();
    }, 1500);
    setLoading(false);
  };

  return (
    <>
      <div className="max-w-6xl w-full mt-[50px] mx-auto">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex justify-between items-center mb-[35px]">
              <h1 className="font-bold text-2xl text-black">Reservation</h1>
              <Button type="submit" disabled={loading}>
                Print / Download
              </Button>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-5">
                <ReservationDetails
                  register={register}
                  control={control}
                  errors={errors}
                />

                <VehicleInformation
                  control={control}
                  errors={errors}
                  vehicleTypeData={vehicleTypeData!}
                  vehicleData={vehicleData}
                />
              </div>

              <div className="flex flex-col gap-5">
                <CustomerInformation register={register} errors={errors} />

                <AdditionalCharges
                  register={register}
                  data={AdditionalChargesData}
                />
              </div>

              <ChargesSummary
                AdditionalChargesData={AdditionalChargesData}
                data={{
                  days,
                  weeks,
                  vehicle,
                  collisionDamageWaiver,
                  liabilityInsurance,
                  rentalTax,
                  discount,
                }}
              />
            </div>
          </form>
        </FormProvider>
      </div>

      <div style={{ display: "none" }}>
        <Print
          printData={printData}
          AdditionalChargesData={AdditionalChargesData}
          ref={componentRef}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch data from API using Axios
    const response = await axios.get(
      "https://exam-server-7c41747804bf.herokuapp.com/carsList"
    );
    const data = response?.data?.data;

    // Pass data to the page via props
    return {
      props: {
        data,
      },
    };
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        data: null,
      },
    };
  }
}
