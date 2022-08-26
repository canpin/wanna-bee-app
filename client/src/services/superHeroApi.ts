import axios, { AxiosResponse } from "axios";
import ISuperHero from "../../../API/ISuperHero";
import ISuperPower from "../../../API/ISuperPower";

const baseUrl: string = "http://localhost:8080/api/superheros";

interface Response {
  message: string;
  status: string;
}

type SuperPowersResponse = Response & {
  superpowers: ISuperPower[];
}

export const getSuperPowers = async (): Promise<ISuperPower[]> => {
  const response: AxiosResponse<ISuperPower[]> = await axios.get(baseUrl + "/getSuperPowers");
  return response.data;
}

export const addSuperHero = async (newSuperHero: ISuperHero): Promise<string> => {
  const response: AxiosResponse<Response> = await axios.post(baseUrl + "/add", newSuperHero, { headers: { 'Content-Type': 'application/json' }});
  console.log(response)
  return response.data.message
}