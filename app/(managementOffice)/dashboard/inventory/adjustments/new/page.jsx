"use client";
import ImageInput from "@/components/dashboard/FormElement/ImageInput/ImageInput";
import SelectOptions from "@/components/dashboard/FormElement/SelectOptions/SelectOptions";
import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";
import TextareaInput from "@/components/dashboard/FormElement/TextArea/TextArea";
import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NewItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // unit options for select
  const unitTypeOptions = [
    { value: "kg", label: "Kilogram" },
    { value: "pkgs", label: "Packages" },
    { value: "pcs", label: "Piece" },
    { value: "mtr", label: "Meter" },
    { value: "ft", label: "Foot" },
    { value: "yd", label: "Yard" },
    { value: "inch", label: "Inch" },
    { value: "gm", label: "Gram" },
    { value: "length", label: "Length" },
    { value: "pair", label: "Pair" },
    { value: "dozen", label: "Dozen" },
  ];
  // brands options
  const brandTypeOptions = [
    { value: "clesse", label: "Clesse" },
    { value: "oldham", label: "Oldham" },
    { value: "novacomet", label: "Novacomet" },
    { value: "rego", label: "Rego" },
    { value: "ga", label: "GA" },
    { value: "wika", label: "Wika" },
    { value: "calcon", label: "Calcon" },
    { value: "watts", label: "Watts" },
    { value: "danfoss", label: "Danfoss" },
    { value: "honeywell", label: "Honeywell" },
    { value: "britishGas", label: "British Gas" },
    { value: "fluke", label: "Fluke" },
    { value: "smc", label: "SMC" },
    { value: "parker", label: "Parker" },
    { value: "fisher", label: "Fisher" },
    { value: "kamstrup", label: "Kamstrup" },
    { value: "belimo", label: "Belimo" },
    { value: "siemens", label: "Siemens" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    const {
      updatedSku,
      updatedBarcode,
      updatedQty,
      updatedUnit,
      updatedBrandTitle,
      updatedBuyingPrice,
      UpdatedSellingPrice,
      updatedSupplierName,
      updatedReOrderPoint,
      updatedWarehouseLocation,
      updatedWeightGm,
      updatedItemDimension,
      updatedItemDescription,
      updatedItemNotes,
      updatedTaxPercentage,
    } = data;

    const baseUrl = "http://localhost:3000";
    // sending data to api endpoint
    try {
      const wareHouseData = {
        updatedSku,
        updatedBarcode,
        updatedQty,
        updatedUnit,
        updatedBrandTitle,
        updatedBuyingPrice,
        UpdatedSellingPrice,
        updatedSupplierName,
        updatedReOrderPoint,
        updatedWarehouseLocation,
        updatedWeightGm,
        updatedItemDimension,
        updatedItemDescription,
        updatedItemNotes,
        updatedTaxPercentage,
      };
      const response = await axios.post(
        `${baseUrl}/api/adjustments`,
        wareHouseData
      );

      console.log("Server Response: ", response.data);

      // Handle successful response
      if (response.status === 200) {
        console.log("Category created successfully!");
        setIsLoading(false);
        setImageUrl("");
        reset();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const subscription = watch(() => {});

    // Cleanup when the component unmounts
    return () => subscription.unsubscribe();
  }, [watch, imageUrl]);
  return (
    <div>
      {/* header */}
      <FormHeader link={"/dashboard/inventory"} title={"Update stored Item"} />

      {/* form */}
      <form
        action="
      "
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-4"
      >
        {/* item Name */}

        {/* SKU */}
        <TextInput
          label={"SKU of item that you want to update"} //it'll be a select option that will come from database i will do it latter
          name={"updatedSku"}
          register={register}
          isRequired={false}
          type="text"
          errors={errors}
          className="w-full"
        />

        {/* Barcode */}
        <TextInput
          label={"Update Item Barcode"} //Barcode optional.. will be auto generated
          name={"updatedBarcode"}
          register={register}
          isRequired={false}
          type="text"
          errors={errors}
          className="w-full"
        />
        {/* Quantity */}
        <TextInput
          label={" Update Item Stock"} //
          name={"updatedQty"}
          register={register}
          isRequired={false}
          type="number"
          errors={errors}
          className="w-full"
        />
        {/* Unit */}
        <SelectOptions
          label="Update Unit"
          name={"updatedUnit"}
          options={unitTypeOptions}
          register={register}
          isRequired={false}
          className="w-full"
        />
        {/* Brands */}
        <SelectOptions
          label="Update Brand"
          name={"updatedBrandTitle"}
          options={brandTypeOptions}
          register={register}
          isRequired={false}
          className="w-full"
        />

        {/* buying Price per unit */}
        <TextInput
          label={"Update Buying Price"}
          name={"updatedBuyingPrice"}
          pattern={/^[0-9]*\.?[0-9]+$/}
          invalidMessage={"only Numeric values are allowed"}
          register={register}
          isRequired={false}
          type="text"
          className="w-full"
          errors={errors}
        />
        {/* selling price */}
        <TextInput
          label={"Update Selling Price"}
          name={"UpdatedSellingPrice"}
          register={register}
          isRequired={false}
          type="text"
          pattern={/^[0-9]*\.?[0-9]+$/}
          invalidMessage={"only Numeric values are allowed"}
          className="w-full"
          errors={errors}
        />

        {/* Supplier Name */}
        <TextInput
          label={"Update Supplier Name"}
          name={"updatedSupplierName"}
          register={register}
          isRequired={false}
          type="text"
          className="w-full"
          errors={errors}
        />

        {/* Reorder Point */}
        <TextInput
          label={"Update Re-Order Point"}
          name={"updatedReOrderPoint"}
          register={register}
          isRequired={false}
          type="number"
          className="w-full"
          errors={errors}
        />

        {/* warehouse location */}
        <TextInput
          label={"Update Warehouse Location"}
          name={"updatedWarehouseLocation"}
          register={register}
          isRequired={false}
          type="text"
          className="w-full"
          errors={errors}
        />
        {/* weight */}
        <TextInput
          label={"Update Weight(gm)"}
          name={"updatedWeightGm"}
          register={register}
          isRequired={false}
          type="text"
          className="w-full"
          errors={errors}
        />
        {/* Dimensions */}
        <TextInput
          label={"Update Dimensions"}
          name={"updatedItemDimension"}
          isRequired={false}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
        />

        {/* description */}
        <TextareaInput
          label={"Update Item Description"}
          name={"updatedItemDescription"}
          register={register}
          isRequired={false}
          errors={errors}
        />
        {/* extra Notes */}
        <TextareaInput
          label={"Update item Notes"}
          name={"updatedItemNotes"}
          isRequired={false}
          register={register}
          errors={errors}
        />

        {/* image upload component */}
        <ImageInput
          label="Update Item Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          className="w-full"
        />

        {/* tax rate */}
        <TextInput
          label={"Tax Percentage"}
          name={"updatedTaxPercentage"}
          register={register}
          isRequired={false}
          type="text"
          pattern={/^[0-9]*\.?[0-9]+$/}
          invalidMessage={"only Numeric values are allowed"}
          className="w-full leading-[1]"
          errors={errors}
        />

        {/* submit button */}
        <SubmitButton title={"Update Item"} isLoading={isLoading} />
      </form>
      {/* footer */}
    </div>
  );
};

export default NewItem;
