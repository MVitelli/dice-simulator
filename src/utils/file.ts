import {readFile, writeFile} from 'fs/promises'

export const getStats = async () => {
  const fileContent = await readFile('stats.json', {encoding: 'utf8'})
  return fileContent
}

export const saveStat = async (results: string[]) => {
  const fileContent = await getStats()
  const stats: string[][] = JSON.parse(fileContent)

  stats.push(results)
  writeFile('stats.json', JSON.stringify(stats, null, 2))
}
