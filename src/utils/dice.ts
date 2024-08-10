export class Dice {
  constructor(readonly faces: number = 6) {}

  roll = () => Math.floor(Math.random() * this.faces) + 1

  prettyPrint = (result: number) => `You rolled ${result}/${this.faces}`
}
