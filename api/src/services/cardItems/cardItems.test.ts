import type { CardItem } from '@prisma/client'

import {
  cardItems,
  cardItem,
  createCardItem,
  updateCardItem,
  deleteCardItem,
} from './cardItems'
import type { StandardScenario } from './cardItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cardItems', () => {
  scenario('returns all cardItems', async (scenario: StandardScenario) => {
    const result = await cardItems()

    expect(result.length).toEqual(Object.keys(scenario.cardItem).length)
  })

  scenario('returns a single cardItem', async (scenario: StandardScenario) => {
    const result = await cardItem({ id: scenario.cardItem.one.id })

    expect(result).toEqual(scenario.cardItem.one)
  })

  scenario('creates a cardItem', async () => {
    const result = await createCardItem({
      input: { title: 'String', description: 'String', published: true },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.published).toEqual(true)
  })

  scenario('updates a cardItem', async (scenario: StandardScenario) => {
    const original = (await cardItem({
      id: scenario.cardItem.one.id,
    })) as CardItem
    const result = await updateCardItem({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a cardItem', async (scenario: StandardScenario) => {
    const original = (await deleteCardItem({
      id: scenario.cardItem.one.id,
    })) as CardItem
    const result = await cardItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
