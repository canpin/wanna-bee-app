// TODO remove this
export default class SuperPower {
  private ability: string;

  constructor(ability: string) {
    this.ability = ability;
  }

  public getAbility(): string {
    return this.ability;
  }
}