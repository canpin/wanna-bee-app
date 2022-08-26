import { Response, Request } from "express";
import ISuperPower from "../../API/ISuperPower";
import ISuperHero from "../../API/ISuperHero";

/*let superheroNames: String[] = [

]*/

export const getSuperPowers = async (req: Request, res: Response): Promise<void> => {
  const superpowers: ISuperPower[] = [{ ability: "Fly"}, { ability: "Walk through walls"}, { ability: "X-ray vision"}];
  res.status(200).json(superpowers);
}

export const addSuperHero =async (req: Request, res: Response): Promise<void> => {
  const newSuperHero = req.body;
  let status: number = 200;
  let message: string = `You can be ${newSuperHero.name}!`;
  if (!newSuperHero.name) {
    status = 400;
    message = "Super hero needs a name!";
  }
  else if (!newSuperHero.superPower?.ability) {
    status = 400;
    message = "Super hero needs a super power!";
  }
  res.status(status).send(message);
}