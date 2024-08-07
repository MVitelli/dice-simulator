import {Command, Flags} from '@oclif/core'
import {select, Separator} from '@inquirer/prompts'

export default class Dice extends Command {
  static override args = {}

  static override description = 'Roll a dice'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    faces: Flags.string({char: 'n', description: 'number of faces'}),
    interactive: Flags.boolean({char: 'i', description: 'interactive mode'}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Dice)

    if (!flags.interactive) {
      const faces = Number(flags.faces) || 6
      this.log(`Output: ${this.throw(faces)}`)
    } else {
      const dices: number[] = []

      while (true) {
        const answer = await select({
          message: 'Add a new dice or roll',
          choices: [
            {name: '20-sided dice', value: '20'},
            {name: '10-sided dice', value: '10'},
            {name: '6-sided dice', value: '6'},
            {name: '4-sided dice', value: '4'},
            new Separator(),
            {name: 'Roll current dices', value: 'ROLL'},
            {name: 'Exit without rolling', value: 'EXIT'},
          ],
        })

        if (answer === 'EXIT') return

        if (answer === 'ROLL') {
          dices.forEach((d) => this.log(`Roll ${this.throw(d)}/${d}`))
          const sum = dices.reduce((prev, curr) => (prev += curr), 0)
          this.log(`Sum of dices: ${sum}`)
          return
        }

        dices.push(Number(answer))
      }
    }
  }

  throw(faces: number) {
    return Math.round(Math.random() * faces)
  }
}
