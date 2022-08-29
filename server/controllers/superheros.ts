import { Response, Request } from "express";
import ISuperPower from "../../API/ISuperPower";
import ISuperHero from "../../API/ISuperHero";

const superheroNames: String[] = ["SUPERMAN"];

export const getSuperPowers = async (req: Request, res: Response): Promise<void> => {
  const superpowers: ISuperPower[] = [{ ability: "Flying"}, { ability: "Walking through walls"}, { ability: "X-ray vision"}];
  res.status(200).json(superpowers);
};

export const addSuperHero = async (req: Request, res: Response): Promise<void> => {
  const newSuperHero = req.body;
  const name: string = newSuperHero.name;

  let status: number = 200;
  let message: string = `You can be ${name}.`;
  if (!name) {
    status = 400;
    message = "Super hero needs a name!";
  }
  else if (!newSuperHero.superPower?.ability) {
    status = 400;
    message = "Super hero needs a super power!";
  }
  else if (superheroNames.includes(name.toUpperCase())) {
    status = 400;
    message = `There can only be one ${name}!`;
  }
  else {
    superheroNames.push(name.toUpperCase())
  }
  res.status(status).send(message);
};