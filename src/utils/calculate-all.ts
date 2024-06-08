export const calculateAll = ({ AdditionalChargesData, data }: any) => {
  // Calculate daily and weekly charges
  const dailyCharge = data?.days * data?.vehicle?.rates?.daily || 0;
  const weeklyCharge = data?.weeks * data?.vehicle?.rates?.weekly || 0;

  // Filter the additional charges based on the provided data
  const filteredOptions = AdditionalChargesData?.filter(
    (option: any) => data[option.name]
  );

  // Calculate the total of the additional charges
  const additionalChargesAmount = filteredOptions?.reduce(
    (acc: any, option: any) => acc + (option?.price || 0),
    0
  );

  // Calculate rental tax charge if applicable
  const rentalTaxCharge = ((dailyCharge + weeklyCharge) * 11.5) / 100;

  // Calculate discount if applicable
  const discountCharge = ((dailyCharge + weeklyCharge) * data?.discount) / 100;

  // Calculate the total charge
  const total =
    dailyCharge +
    weeklyCharge +
    additionalChargesAmount +
    (data?.rentalTax ? rentalTaxCharge : 0) -
    (data?.discount ? discountCharge : 0);
  console.log(
    dailyCharge,
    weeklyCharge,
    additionalChargesAmount,
    data?.rentalTax ? rentalTaxCharge : 0,
    data?.discount ? discountCharge : 0
  );

  return {
    weeklyCharge,
    dailyCharge,
    rentalTaxCharge,
    discountCharge,
    total,
    filteredOptions,
  };
};
