"use client";

import SelectOptions from "@/components/dashboard/FormElement/SelectOptions/SelectOptions";
import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";
import TextareaInput from "@/components/dashboard/FormElement/TextArea/TextArea";

import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NewWarehouse = () => {
  const [isLoading, setIsLoading] = useState(false);
  // warehouse type options
  const warehouseTypeOptions = [
    { value: "main", label: "Main" },
    { value: "branch", label: "Branch" },
    { value: "distribution", label: "Distribution" },
    { value: "coldStorage", label: "Cold Storage" },
    { value: "bonded", label: "Bonded" },
    { value: "fulfillmentCenter", label: "Fulfillment Center" },
    { value: "retail", label: "Retail" },
    { value: "industrial", label: "Industrial" },
    { value: "rawMaterials", label: "Raw Materials" },
    { value: "eCommerce", label: "E-commerce" },
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
      warehouseTitle,
      warehouseLocation,
      warehouseType,
      warehouseDescription,
    } = data;
    // console.log(data);

    const baseUrl = "http://localhost:3000";
    // sending data to api endpoint
    try {
      const wareHouseData = {
        warehouseTitle,
        warehouseLocation,
        warehouseType,
        warehouseDescription,
      };
      const response = await axios.post(
        `${baseUrl}/api/warehouse`,
        wareHouseData
      );

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
      <FormHeader link={"/dashboard/inventory"} title={"New Brand"} />

      {/* form */}
      <form
        action="
      "
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-4"
      >
        {/* warehouse title */}
        <TextInput
          label={"Wrehouse Title"}
          name={"warehouseTitle"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />
        {/* wareHouse Type main or branch */}
        <SelectOptions
          label="Warehouse Type"
          name={"warehouseType"}
          options={warehouseTypeOptions}
          register={register}
          className="w-full"
        />
        {/* warehouse Location */}
        <TextInput
          label={"Warehouse Location"}
          name={"warehouseLocation"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />
        {/* warehouse Description */}

        <TextareaInput
          label={"Warehouse Description"}
          name={"warehouseDescription"}
          register={register}
          errors={errors}
        />

        {/* submit button */}
        <SubmitButton title={"Brand"} isLoading={isLoading} />
      </form>
      {/* footer */}
    </div>
  );
};

export default NewWarehouse;
