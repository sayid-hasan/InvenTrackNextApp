"use client";
import ImageInput from "@/components/dashboard/FormElement/ImageInput/ImageInput";

import SkuSelectOptions from "@/components/dashboard/FormElement/SkuSelectInput/SkuSelectInput";

import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";
import TextareaInput from "@/components/dashboard/FormElement/TextArea/TextArea";
import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";
import { makePostRequest } from "@/lib/makeApiPostRequest";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NewAdjustment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [serverData, setServerData] = useState(null);
  const [skus, setSkus] = useState([]);

  // baseUrl
  const baseUrl = "http://localhost:3000";

  // fetch item data
  const fetchItemData = async (sku) => {
    try {
      const response = await fetch(`/api/items/get-item?sku=${sku}`);
      const data = await response.json();
      setServerData(data);
      // Populate form with the fetched data
      setValue("itemDimension", data.itemDimension);
      setValue("brandId", data.brandId);
      setValue("buyingPrice", data.buyingPrice);
      setValue("categoryId", data.categoryId);
      setValue("itemBarcode", data.itemBarcode);
      setValue("itemDescription", data.itemDescription);
      setValue("itemName", data.itemName);
      setValue("itemNotes", data.itemNotes);
      setValue("qty", data.qty);
      setValue("reOrderPoint", data.reOrderPoint);
      setValue("sellingPrice", data.sellingPrice);
      setValue("supplierId", data.supplierId);
      setValue("unitId", data.unitId);
      setValue("warehouseId", data.warehouseId);
      setValue("weightGm", data.weightGm);
      setValue("imageUrl", data.imageUrl);
      setValue("taxPercentage", data.taxPercentage);
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };

  // Fetch the list of SKUs when the component mounts
  useEffect(() => {
    const fetchSkus = async () => {
      const response = await axios.get(`${baseUrl}/api/items`);

      setSkus(response.data);
    };
    fetchSkus();
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);

    // sending data to api endpoint
    await makePostRequest(
      setIsLoading,
      "api/adjustments",
      { ...data, imageUrl },
      `Adjustments`,
      reset
    );
    setImageUrl("");
  };

  useEffect(() => {
    const subscription = watch((itemSku) => {
      fetchItemData(itemSku);
    });

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

        {/* Sku based data fetching*/}
        <SkuSelectOptions
          label="Select Item that need to update"
          name={"itemSku"}
          options={skus}
          register={register}
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
        {/* Unit
        <SelectOptions
          label="Update Unit"
          name={"updatedUnit"}
          options={unitTypeOptions}
          register={register}
          isRequired={false}
          className="w-full"
        />
        Brands
        <SelectOptions
          label="Update Brand"
          name={"updatedBrandTitle"}
          options={brandTypeOptions}
          register={register}
          isRequired={false}
          className="w-full"
        /> */}

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

        {/* adjusment reason */}
        <TextInput
          label={"Reason of adjustment"}
          name={"adjustmentReason"}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
        />
        {/* Date */}
        <TextInput
          label={"Date"}
          name={"adjustmentDate"}
          register={register}
          type="date"
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

export default NewAdjustment;
