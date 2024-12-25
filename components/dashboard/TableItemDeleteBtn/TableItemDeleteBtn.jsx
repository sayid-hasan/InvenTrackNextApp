import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";
import Swal from "sweetalert2";

const TableItemDeleteBtn = ({ id, endPoint }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    console.log(baseUrl);
    console.log(baseUrl, id, endPoint);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Your delete logic goes here
        const res = await axios.delete(`${baseUrl}/api/${endPoint}?id=${id}`);
        console.log(res.data);
        Swal.fire({
          title: "Deleted!",
          text: `${res.data?.message || "item deleted successfully"}}`,
          icon: "success",
        });
        router.refresh();
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="font-medium text-red-600 dark:text-blue-500 flex items-center space-x-1"
    >
      <Trash2 className="w-4 h-4" />
      <span>Delete</span>
    </button>
  );
};

export default TableItemDeleteBtn;
