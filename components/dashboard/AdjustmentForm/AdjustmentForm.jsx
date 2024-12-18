"use client";

import { makePostRequest } from "@/lib/makeApiPostRequest";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SkuSelectOptions from "../FormElement/SkuSelectInput/SkuSelectInput";
import TextInput from "../FormElement/TextInput/TextInput";
import SelectOptions from "../FormElement/SelectOptions/SelectOptions";
import TextareaInput from "../FormElement/TextArea/TextArea";
import ImageInput from "../FormElement/ImageInput/ImageInput";
import SubmitButton from "../FormElement/SubmitBtn/SubmitBtn";
import { getLatestData } from "@/lib/getLatestData";

const AdjustmentForm = ({
  categoryOptions,
  brandOptions,
  unitOptions,
  warehouseOptions,
  supplierOptions,
  skus,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [serverData, setServerData] = useState(null);

  const [singleItemSku, setSingleItemSku] = useState("");

  const [refreshSkuItem, setRefreshSkuItem] = useState(skus);

  // Function to refetch SKUs
  const refreshSkus = async () => {
    try {
      const updatedSkus = await getLatestData("items/get-skus");
      setRefreshSkuItem(updatedSkus);
    } catch (error) {
      console.error("Failed to refresh SKUs:", error);
    }
  };

  // baseUrl
  const baseUrl = "http://localhost:3000";

  // fetch item data
  const fetchItemData = async (singleItemSku) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/items/single-items?sku=${encodeURIComponent(
          singleItemSku
        )}`
      );
      const data = response.data;
      console.log(data);

      setServerData(response.data);
      // Populate form with the fetched data
      setValue("updatedItemDimension", data.itemDimension);
      setValue("updatedItemName", data.itemName);
      setValue("updatedBrandId", data?.brandId);
      setValue("updatedBuyingPrice", data.buyingPrice);
      setValue("updatedSellingPrice", data.sellingPrice);
      setValue("updatedCategoryId", data?.categoryId);
      setValue("updatedBarcode", data.itemBarcode);
      setValue("updatedItemDescription", data.itemDescription);
      setValue("updatedItemName", data.itemName);
      setValue("updatedItemNotes", data.itemNotes);
      setValue("updatedQty", data.qty);
      setValue("updatedReOrderPoint", data.reOrderPoint);

      setValue("updatedSupplierId", data.supplierId);
      setValue("updatedUnitId", data.unitId);
      setValue("updatedWarehouseId", data.warehouseId);
      setValue("updatedWeightGm", data.weightGm);

      setImageUrl(data.imageUrl);
      setValue("updatedTaxPercentage", data.taxPercentage);
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };

  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // onSubmit form
  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    // sending data to api endpoint
    await makePostRequest(
      setIsLoading,
      "api/adjustments",
      { ...data, updatedImageUrl: imageUrl },
      `Adjustments`,
      reset
    );
    setImageUrl("");
    refreshSkus();
  };

  // item fetch data useEffect

  useEffect(() => {
    fetchItemData(singleItemSku);
  }, [singleItemSku, setValue]);

  useEffect(() => {
    const subscription = watch(() => {});

    // Cleanup when the component unmounts
    return () => subscription.unsubscribe();
  }, [watch, imageUrl]);

  return (
    <div>
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
          options={refreshSkuItem}
          register={register}
          className="w-full"
          setSingleItemSku={setSingleItemSku}
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
        {/* item Name */}
        <TextInput
          label={"Update Item Name"} //
          name={"updatedItemName"}
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
        {/* category Type main or branch */}
        <SelectOptions
          label="Select Items Category"
          name={"updatedCategoryId"}
          value={watch("updatedCategoryId")}
          options={categoryOptions}
          register={register}
          className="w-full"
        />
        {/* Unit */}
        <SelectOptions
          label="Select Unit"
          name={"updatedUnitId"}
          value={watch("updatedUnitId")}
          options={unitOptions}
          register={register}
          className="w-full"
        />
        {/* Brands */}
        <SelectOptions
          label="Select Brand"
          name={"updatedBrandId"}
          value={watch("updatedBrandId")}
          options={brandOptions}
          register={register}
          className="w-full"
        />

        {/* Supplier Name */}
        <SelectOptions
          label="Select Suppliers"
          name={"updatedSupplierId"}
          value={watch("updatedSupplierId")}
          options={supplierOptions}
          register={register}
          className="w-full"
        />
        {/* warehouse Type main or branch */}
        <SelectOptions
          label="Select Warehouse/Branch"
          name={"updatedWarehouseId"}
          value={watch("updatedWarehouseId")}
          options={warehouseOptions}
          register={register}
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
          name={"updatedSellingPrice"}
          register={register}
          isRequired={false}
          type="text"
          pattern={/^[0-9]*\.?[0-9]+$/}
          invalidMessage={"only Numeric values are allowed"}
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

export default AdjustmentForm;
