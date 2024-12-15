"use client";

import SubmitButton from "@/components/dashboard/FormElement/SubmitBtn/SubmitBtn";
import TextareaInput from "@/components/dashboard/FormElement/TextArea/TextArea";

import TextInput from "@/components/dashboard/FormElement/TextInput/TextInput";
import FormHeader from "@/components/dashboard/FormHeader/FormHeader";
import { makePostRequest } from "@/lib/makeApiPostRequest";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NewSupplier = () => {
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
    // const {
    //   supplierName,
    //   phone,
    //   email,
    //   address,
    //   contactPerson,
    //   supplierCode,
    //   paymentTerms,
    //   taxID,
    //   notes,
    // } = data;
    // // console.log(data);
    // const SupplierData = {
    //   supplierName,
    //   phone,
    //   email,
    //   address,
    //   contactPerson,
    //   supplierCode,
    //   paymentTerms,
    //   taxID,
    //   notes,
    // };
    // sending data to api endpoint with makeapiPostRequest
    makePostRequest(setIsLoading, "api/supplier", data, `Supplier`, reset);
  };
  useEffect(() => {
    const subscription = watch(() => {});

    // Cleanup when the component unmounts
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <div>
      {/* header */}
      <FormHeader link={"/dashboard/inventory"} title={"New Supplier"} />

      {/* form */}
      <form
        action="
      "
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-4"
      >
        {/*supplierName */}
        <TextInput
          label={"Supplier Name"}
          name={"supplierName"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />
        {/*phone */}
        <TextInput
          label={"Supplier Phone"}
          name={"phone"}
          register={register}
          type="text"
          pattern={
            /^\+?(\d{1,4}[\s-])?(\(?\d{1,4}\)?[\s-])?(\d{1,4}[\s-])?\d{1,4}[\s-]?\d{1,4}$/
          }
          isRequired={false}
          invalidMessage={`please follow +44 20 7123 4567 format`}
          errors={errors}
          className="w-full"
        />
        {/*email */}
        <TextInput
          label={"Supplier email"}
          name={"email"}
          register={register}
          type="text"
          pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
          invalidMessage={`please follow john.doe@example.com format`}
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        {/*adress */}
        <TextInput
          label={"Supplier address"}
          name={"email"}
          register={register}
          type="text"
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        {/*contactPerson */}
        <TextInput
          label={"Contact Person"}
          name={"contactPerson"}
          register={register}
          type="text"
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        {/*supplierCode */}
        <TextInput
          label={"Supplier Code"}
          name={"supplierCode"}
          register={register}
          type="text"
          errors={errors}
          className="w-full"
        />
        {/*payment terms */}
        <TextInput
          label={"Payment Terms"}
          name={"paymentTerms"}
          register={register}
          type="text"
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        {/*taxID*/}
        <TextInput
          label={"taxID / TRN"}
          name={"taxID"}
          register={register}
          type="text"
          errors={errors}
          isRequired={false}
          className="w-full"
        />

        {/* notes*/}

        <TextareaInput
          label={"Notes"}
          name={"notes"}
          isRequired={false}
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

export default NewSupplier;
