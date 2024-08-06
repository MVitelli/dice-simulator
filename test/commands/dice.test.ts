import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('dice', () => {
  it('runs dice cmd', async () => {
    const {stdout} = await runCommand('dice')
    expect(stdout).to.contain('hello world')
  })

  it('runs dice --name oclif', async () => {
    const {stdout} = await runCommand('dice --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
