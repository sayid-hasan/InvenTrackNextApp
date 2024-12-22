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
      toast.success(` ${resourceName} created successfully!`);
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
export async function makePutRequest(
  setIsLoading,
  endpoint,
  data,
  resourceName,
  redirect
) {
  try {
    setIsLoading(true);
    const baseUrl = "http://localhost:3000";
    const response = await axios.put(`${baseUrl}/${endpoint}`, data);

    console.log("Server Response: ", response);

    // Handle successful response
    if (response.status === 200) {
      // console.log("WareHouse created successfully!");
      toast.success(` ${resourceName} updated successfully!`);
      setIsLoading(false);

      redirect();
    } else {
      setIsLoading(false);
      throw new Error("Unexpected response status");
    }
  } catch (error) {
    console.log(error);
    toast.error(` ${resourceName} updated failed ${error.message}`);
    setIsLoading(false);
  }
}
