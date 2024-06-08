import axios from "axios";
import * as Yup from "yup";
import { FormProvider, Resolver, useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import ReservationDetails from "../components/home/ReservationDetails";
import CustomerInformation from "../components/home/CustomerInformation";
import VehicleInformation from "../components/home/VehicleInformation";

type initialTypes = {
  reservationID?: string;
  pickupDate: string;
  returnDate: string;
  duration: string;
  discount: string;
  vehicleType: string;
  vehicle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  collisionDamageWaiver: boolean;
  liabilityInsurance: boolean;
  rentalTax: boolean;
};

export default function HomePage({ data }: any) {
  const validationSchema = Yup.object().shape({
    reservationID: Yup.string().optional(),
    pickupDate: Yup.string().required("Pickup date is required"),
    returnDate: Yup.string().required("Return date is required"),
    duration: Yup.string(),
    discount: Yup.string(),
    vehicleType: Yup.string().required("Vehicle type is required"),
    vehicle: Yup.string().required("Vehicle is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    collisionDamageWaiver: Yup.boolean(),
    liabilityInsurance: Yup.boolean(),
    rentalTax: Yup.boolean(),
  });

  const methods = useForm<initialTypes>({
    resolver: yupResolver(validationSchema) as Resolver<initialTypes>,
    shouldUnregister: true,
    // @ts-ignore
    defaultValues: {
      reservationID: "",
      pickupDate: "",
      returnDate: "",
      duration: "",
      discount: "",
      vehicleType: "",
      vehicle: "",
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

  const vehicleType: any = watch("vehicleType");

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

  const onSubmit = async (value: any) => {
    console.log(value);
  };

  return (
    <div className="max-w-7xl w-full p-10">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl text-black">Reservation</h1>
            <Button type="submit">Print / Download</Button>
          </div>

          <ReservationDetails
            register={register}
            control={control}
            errors={errors}
          />
          <CustomerInformation register={register} errors={errors} />
          <VehicleInformation
            control={control}
            errors={errors}
            vehicleTypeData={vehicleTypeData!}
            vehicleData={vehicleData}
          />
        </form>
      </FormProvider>
    </div>
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
