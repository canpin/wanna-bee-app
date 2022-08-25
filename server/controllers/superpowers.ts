import { Response, Request } from "express";
import SuperPower from "../model/superpower";

export const getSuperPowers = async (req: Request, res: Response): Promise<void> => {
  const superpowers: SuperPower[] = [new SuperPower("Fly"), new SuperPower("Walk through walls"), new SuperPower("X-ray vision")];
  res.status(200).json({ superpowers });
}
