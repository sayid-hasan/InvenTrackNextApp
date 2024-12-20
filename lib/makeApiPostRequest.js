import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";

export async function makePostRequest(
  setIsLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setIsLoading(true);
    const baseUrl = "http://localhost:3000";
    const response = await axios.post(`${baseUrl}/${endpoint}`, data);

    console.log("Server Response: ", response.data);

    // Handle successful response
    if (response.status === 200) {
      // console.log("WareHouse created successfully!");
      toast.success(` ${resourceName}Supplier created successfully!`);
      setIsLoading(false);

      reset();
    } else {
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    // console.log(error);
    toast.error(` ${resourceName} creation failed ${error.message}`);
    setIsLoading(false);
  }
}
