import React from "react";

export default function SkuSelectOptions({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  setSingleItemSku,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          onChange={(e) => {
            console.log(e.target.value);
            setSingleItemSku(e.target.value);
          }}
          id={name}
          name={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
        >
          {options?.map((option, i) => {
            const { itemSku, skuFormatted } = option;
            // console.log(itemSku);
            return (
              <option key={i} value={itemSku}>
                {skuFormatted}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
