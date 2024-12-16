import axios from "axios";

export async function getLatestData(endpoint) {
  try {
    const baseUrl = "http://localhost:3000";
    const response = await axios.get(`${baseUrl}/api/${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
