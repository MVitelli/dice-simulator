import {Command, Flags} from '@oclif/core'
import {select, Separator} from '@inquirer/prompts'
import {Dice as DiceRoller} from '../utils/dice.js'
import {saveStat, getStats} from '../utils/file.js'

enum PromptOptions {
  ROLL = 'ROLL',
  EXIT = 'EXIT',
  STATS = 'STATS',
}

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
      const diceRoller = new DiceRoller(Number(flags.faces || 6))
      this.log(`Output: ${diceRoller.roll()}`)
    } else {
      const dices: DiceRoller[] = []

      let continueRunning = true
      while (continueRunning) {
        const answer = await select({
          message: 'Add a new dice or roll',
          choices: [
            {name: '20-sided dice', value: '20'},
            {name: '10-sided dice', value: '10'},
            {name: '6-sided dice', value: '6'},
            {name: '4-sided dice', value: '4'},
            new Separator(),
            {name: 'Roll current dices', value: PromptOptions.ROLL},
            {name: 'Get roll stats', value: PromptOptions.STATS},
            {name: 'Exit without rolling', value: PromptOptions.EXIT},
          ],
          loop: false,
        })
        continueRunning = await this.onPromptAnswer(answer, dices)
      }
    }
  }

  onPromptAnswer = async (answer: string, dices: DiceRoller[]) => {
    if (answer === PromptOptions.EXIT) return false

    if (answer === PromptOptions.STATS) {
      const stats = await getStats()
      this.log(stats)
      return false
    }

    if (answer === PromptOptions.ROLL) {
      const {sum, stats} = dices.reduce(
        (prev, currentDice) => {
          const diceResult = currentDice.roll()
          const dicePrint = currentDice.prettyPrint(diceResult)
          this.log(dicePrint)
          prev.sum += diceResult
          prev.stats.push(dicePrint)
          return prev
        },
        {sum: 0, stats: Array<string>()},
      )
      this.log(`Dices sum: ${sum}`)
      await saveStat(stats)
      return true
    }

    dices.push(new DiceRoller(Number(answer)))
    return true
  }
}
