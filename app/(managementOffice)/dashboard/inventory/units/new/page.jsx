"use client";

import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";

import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

import { makePostRequest, makePutRequest } from "@/lib/makeApiPostRequest";
import { useRouter } from "next/navigation";

const NewUnit = ({ initialData = {}, isUpdate = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  // redirect function after updating
  const router = useRouter();
  const redirect = () => {
    return router.push("/dashboard/inventory/units");
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      unitTitle: initialData?.unitName,
      unitAbbreviation: initialData?.title,
    },
  });
  const onSubmit = async (data) => {
    setIsLoading(true);

    // console.log(data);

    if (isUpdate) {
      makePutRequest(
        setIsLoading,
        `api/units/${initialData?.id}`,
        data,
        `Unit`,
        redirect
      );
    } else {
      // sending data to api endpoint with makeapiPostRequest
      makePostRequest(setIsLoading, "api/units", data, `Units`, reset);
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
        link={"/dashboard/inventory/units"}
        title={isUpdate ? "Update Unit" : "New Unit"}
      />

      {/* form */}
      <form
        action="
      "
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-4"
      >
        {/* title */}
        <TextInput
          label={"Unit title"}
          name={"unitTitle"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />
        {/* unitAbbreviation */}
        <TextInput
          label={"Unit Abbreviation"}
          name={"unitAbbreviation"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />

        {/* submit button */}
        <SubmitButton
          title={isUpdate ? "Update Unit" : "New Unit"}
          isLoading={isLoading}
        />
      </form>
      {/* footer */}
    </div>
  );
};

export default NewUnit;
