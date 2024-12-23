"use client";

import SelectOptions from "@/components/dashboard/FormElement/SelectOptions/SelectOptions";
import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";
import TextareaInput from "@/components/dashboard/FormElement/TextArea/TextArea";

import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { makePostRequest, makePutRequest } from "@/lib/makeApiPostRequest";
import { useRouter } from "next/navigation";

const NewWarehouse = ({ initialData = {}, isUpdate = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  // redirect function after updating
  const router = useRouter();
  const redirect = () => {
    return router.push("/dashboard/inventory/warehouse");
  };
  // warehouse type options
  const warehouseTypeOptions = [
    { id: "main", title: "Main" },
    { id: "branch", title: "Branch" },
    { id: "distribution", title: "Distribution" },
    { id: "coldStorage", title: "Cold Storage" },
    { id: "bonded", title: "Bonded" },
    { id: "fulfillmentCenter", title: "Fulfillment Center" },
    { id: "retail", title: "Retail" },
    { id: "industrial", title: "Industrial" },
    { id: "rawMaterials", title: "Raw Materials" },
    { id: "eCommerce", title: "E-commerce" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      warehouseTitle: initialData?.title,
      warehouseDescription: initialData?.warehouseDescription,
      warehouseType: initialData?.warehouseType,
      warehouseLocation: initialData?.warehouseLocation,
    },
  });
  const onSubmit = async (data) => {
    setIsLoading(true);

    if (isUpdate) {
      makePutRequest(
        setIsLoading,
        `api/warehouse/${initialData?.id}`,
        data,
        `Warehouse`,
        redirect
      );
    } else {
      // sending data to api endpoint with makeapiPostRequest
      makePostRequest(setIsLoading, "api/warehouse", data, `Warehouse`, reset);
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
      <FormHeader
        link={"/dashboard/inventory/warehouse"}
        title={isUpdate ? "Update Warehouse" : "New Warehouse"}
      />

      {/* form */}
      <form
        action="
      "
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-4"
      >
        {/* warehouse title */}
        <TextInput
          label={"Warehouse Title"}
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
          isRequired={false}
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
          isRequired={false}
          register={register}
          errors={errors}
        />

        {/* submit button */}
        <SubmitButton
          title={isUpdate ? "Update Warehouse" : "New Warehouse"}
          isLoading={isLoading}
        />
      </form>
      {/* footer */}
    </div>
  );
};

export default NewWarehouse;
