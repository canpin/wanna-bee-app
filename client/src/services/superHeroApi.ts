import axios, { AxiosResponse } from "axios";
import ISuperHero from "../../../API/ISuperHero";
import ISuperPower from "../../../API/ISuperPower";

const baseUrl: string = "http://localhost:8080/api/superheros";

export const getSuperPowers = async (): Promise<ISuperPower[]> => {
  const response: AxiosResponse<ISuperPower[]> = await axios.get(baseUrl + "/getSuperPowers");
  return response.data;
}

export const addSuperHero = async (newSuperHero: ISuperHero): Promise<string> => {
  const response: AxiosResponse<string> = await axios.post(baseUrl + "/add", newSuperHero, { headers: { 'Content-Type': 'application/json' }});
  return response.data
}