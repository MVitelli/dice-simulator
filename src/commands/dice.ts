import {Command, Flags} from '@oclif/core'

export default class Dice extends Command {
  static override args = {}

  static override description = 'Roll a dice'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    faces: Flags.string({char: 'n', description: 'number of faces'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Dice)

    const faces = Number(flags.faces) || 6
    this.log(`Output: ${this.throw(faces)}`)
  }

  throw(faces: number) {
    return Math.round(Math.random() * faces)
  }
}
