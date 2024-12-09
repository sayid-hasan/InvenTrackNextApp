"use client";

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
  // warehouse type options
  // const warehouseTypeOptions = [
  //   { value: "main", label: "Main" },
  //   { value: "branch", label: "Branch" },
  //   { value: "distribution", label: "Distribution" },
  //   { value: "coldStorage", label: "Cold Storage" },
  //   { value: "bonded", label: "Bonded" },
  //   { value: "fulfillmentCenter", label: "Fulfillment Center" },
  //   { value: "retail", label: "Retail" },
  //   { value: "industrial", label: "Industrial" },
  //   { value: "rawMaterials", label: "Raw Materials" },
  //   { value: "eCommerce", label: "E-commerce" },
  // ];
  // catergory options for select

  const categoryTypeOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "groceries", label: "Groceries" },
    { value: "homeAppliances", label: "Home Appliances" },
    { value: "furniture", label: "Furniture" },
    { value: "beautyPersonalCare", label: "Beauty & Personal Care" },
    { value: "toysGames", label: "Toys & Games" },
    { value: "booksStationery", label: "Books & Stationery" },
    { value: "sportsOutdoors", label: "Sports & Outdoors" },
    { value: "automotive", label: "Automotive" },
    { value: "healthWellness", label: "Health & Wellness" },
    { value: "jewelryAccessories", label: "Jewelry & Accessories" },
    { value: "petsSupplies", label: "Pets & Supplies" },
    { value: "gasEquipment", label: "Gas Equipment" },
    { value: "cookerParts", label: "Cooker Parts" },
    { value: "electricItems", label: "Electric Items" },
    { value: "kitchenEquipment", label: "Kitchen Equipment" },
    { value: "burner", label: "Burner" },
    { value: "brassFitting", label: "Brass Fitting" },
    { value: "msFitting", label: "MS Fitting" },
    { value: "csFitting", label: "CS Fitting" },
  ];
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
      ItemDimension,
      brandTitle,
      buyingPrice,
      categoryTitle,
      itemBarcode,
      itemDescription,
      itemName,
      itemNotes,
      itemSku,
      qty,
      reOrderPoint,
      sellingPrice,
      supplierName,
      unitTitle,
      warehouseLocation,
      weightGm,
    } = data;

    const baseUrl = "http://localhost:3000";
    // sending data to api endpoint
    try {
      const wareHouseData = {
        ItemDimension,
        brandTitle,
        buyingPrice,
        categoryTitle,
        itemBarcode,
        itemDescription,
        itemName,
        itemNotes,
        itemSku,
        qty,
        reOrderPoint,
        sellingPrice,
        supplierName,
        unitTitle,
        warehouseLocation,
        weightGm,
      };
      const response = await axios.post(`${baseUrl}/api/items`, wareHouseData);

      console.log("Server Response: ", response.data);

      // Handle successful response
      if (response.status === 200) {
        console.log("Category created successfully!");
        setIsLoading(false);
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
  }, [watch]);
  return (
    <div>
      {/* header */}
      <FormHeader link={"/dashboard/inventory"} title={"New Item"} />

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
          name={"categoryTitle"}
          options={categoryTypeOptions}
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
          name={"unitTitle"}
          options={unitTypeOptions}
          register={register}
          className="w-full"
        />
        {/* Brands */}
        <SelectOptions
          label="Select Brand"
          name={"brandTitle"}
          options={brandTypeOptions}
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
        <TextInput
          label={"Supplier Name"}
          name={"supplierName"}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
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

        {/* warehouse location */}
        <TextInput
          label={"Warehouse Location"}
          name={"warehouseLocation"}
          register={register}
          type="text"
          className="w-full"
          errors={errors}
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

        {/* submit button */}
        <SubmitButton title={"Item"} isLoading={isLoading} />
      </form>
      {/* footer */}
    </div>
  );
};

export default NewItem;
