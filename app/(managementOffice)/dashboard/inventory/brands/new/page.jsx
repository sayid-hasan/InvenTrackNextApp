"use client";

import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";

import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { makePostRequest } from "@/lib/makeApiPostRequest";

const NewBrand = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    // sending data to api endpoint with makeapiPostRequest
    makePostRequest(setIsLoading, "api/brands", data, `Brand`, reset);
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
        {/* title */}
        <TextInput
          label={"Brand title"}
          name={"brandTitle"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />

        {/* submit button */}
        <SubmitButton title={"Brand"} isLoading={isLoading} />
      </form>
      {/* footer */}
    </div>
  );
};

export default NewBrand;
