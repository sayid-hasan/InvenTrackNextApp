"use client";

import { useForm } from "react-hook-form";

import React, { useEffect, useState } from "react";

import TextInput from "../FormElement/TextInput/TextInput";
import SelectOptions from "../FormElement/SelectOptions/SelectOptions";
import SubmitButton from "../FormElement/SubmitBtn/SubmitBtn";
import ImageInput from "../FormElement/ImageInput/ImageInput";
import TextareaInput from "../FormElement/TextArea/TextArea";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { makePostRequest } from "@/lib/makeApiPostRequest";
const CreateItemForm = ({
  categories = [],
  units = [],
  brands = [],
  suppliers = [],
  warehouses = [],
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (!imageUrl) {
      toast.error("please provide a image of product ");
      return;
    }
    setIsLoading(true);
    // sending data to api endpoint with makeapiPostRequest
    await makePostRequest(
      setIsLoading,
      "api/items",
      { ...data, imageUrl },
      `Item`,
      reset
    );
    setImageUrl("");
  };
  useEffect(() => {
    const subscription = watch(() => {});

    // Cleanup when the component unmounts
    return () => subscription.unsubscribe();
  }, [watch, imageUrl]);

  return (
    <>
      {/* form */}
      <form
        action="
      "
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-4"
      >
        {/* item Name */}
        <TextInput
          label={"Item Name"}
          name={"itemName"}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
        />

        {/* category Type main or branch */}
        <SelectOptions
          label="Select Items Category"
          name={"categoryId"}
          options={categories}
          register={register}
          className="w-full"
        />
        {/* SKU */}
        <TextInput
          label={"SKU"} //(Stock Keeping Unit): A unique identifier for the item to help with tracking.
          name={"itemSku"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />
        {/* Barcode */}
        <TextInput
          label={"Item Barcode"} //Barcode optional.. will be auto generated
          name={"itemBarcode"}
          register={register}
          type="text"
          isRequired={false}
          errors={errors}
          className="w-full"
        />
        {/* Quantity */}
        <TextInput
          label={"Item Quantity"} //
          name={"qty"}
          register={register}
          type="number"
          errors={errors}
          className="w-full"
        />
        {/* Unit */}
        <SelectOptions
          label="Select Unit"
          name={"unitId"}
          options={units}
          register={register}
          className="w-full"
        />
        {/* Brands */}
        <SelectOptions
          label="Select Brand"
          name={"brandId"}
          options={brands}
          register={register}
          className="w-full"
        />
        {/* buying Price per unit */}
        <TextInput
          label={"Buying Price"}
          name={"buyingPrice"}
          pattern={/^[0-9]*\.?[0-9]+$/}
          invalidMessage={"only Numeric values are allowed"}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
        />
        {/* selling price */}
        <TextInput
          label={"Selling Price"}
          name={"sellingPrice"}
          register={register}
          type="text"
          pattern={/^[0-9]*\.?[0-9]+$/}
          invalidMessage={"only Numeric values are allowed"}
          className="w-full"
          errors={errors}
        />
        {/* Supplier Name */}
        <SelectOptions
          label="Select Suppliers"
          name={"supplierId"}
          options={suppliers}
          register={register}
          className="w-full"
        />
        {/* Reorder Point */}
        <TextInput
          label={"Re-Order Point"}
          name={"reOrderPoint"}
          register={register}
          type="number"
          isRequired={false}
          className="w-full"
          errors={errors}
        />

        {/* category Type main or branch */}
        <SelectOptions
          label="Select Warehouse/Branch"
          name={"warehouseId"}
          options={warehouses}
          register={register}
          className="w-full"
        />
        {/* weight */}
        <TextInput
          label={"Weight(gm)"}
          name={"weightGm"}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
        />
        {/* Dimensions */}
        <TextInput
          label={"Dimensions"}
          name={"ItemDimension"}
          isRequired={false}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
        />
        {/* description */}
        <TextareaInput
          label={"Item Description"}
          name={"itemDescription"}
          register={register}
          isRequired={false}
          errors={errors}
        />
        {/* extra Notes */}
        <TextareaInput
          label={"Notes"}
          name={"itemNotes"}
          isRequired={false}
          register={register}
          errors={errors}
        />
        {/* image upload component */}
        <ImageInput
          label="Item Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          className="w-full"
        />
        {/* tax rate */}
        <TextInput
          label={"Tax Percentage"}
          name={"taxPercentage"}
          register={register}
          type="text"
          pattern={/^[0-9]*\.?[0-9]+$/}
          invalidMessage={"only Numeric values are allowed"}
          className="w-full leading-[1]"
          errors={errors}
        />
        {/* submit button */}
        <SubmitButton title={"Item"} isLoading={isLoading} />
      </form>
      {/* footer */}
    </>
  );
};

export default CreateItemForm;
