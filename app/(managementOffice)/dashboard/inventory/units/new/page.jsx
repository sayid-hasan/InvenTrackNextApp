"use client";

import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";

import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const NewUnit = () => {
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
    const { unitTitle, unitAbbreviation } = data;
    // console.log(data);

    const baseUrl = "http://localhost:3000";
    // sending data to api endpoint
    try {
      const unitData = {
        unitTitle,
        unitAbbreviation,
      };
      const response = await axios.post(`${baseUrl}/api/units`, unitData);

      console.log("Server Response: ", response.data);

      // Handle successful response
      if (response.status === 200) {
        // console.log("Unit created successfully!");
        toast.success("Unit created successfully!");
        setIsLoading(false);

        reset();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      toast.error(`Error creating Unit! ${error.message}`);
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
      <FormHeader link={"/dashboard/inventory"} title={"New Unit"} />

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
        <SubmitButton title={"Unit"} isLoading={isLoading} />
      </form>
      {/* footer */}
    </div>
  );
};

export default NewUnit;
