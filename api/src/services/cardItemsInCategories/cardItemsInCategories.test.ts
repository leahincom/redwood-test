import type { CardItemsInCategory } from '@prisma/client'

import {
  cardItemsInCategories,
  cardItemsInCategory,
  createCardItemsInCategory,
  updateCardItemsInCategory,
  deleteCardItemsInCategory,
} from './cardItemsInCategories'
import type { StandardScenario } from './cardItemsInCategories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cardItemsInCategories', () => {
  scenario(
    'returns all cardItemsInCategories',
    async (scenario: StandardScenario) => {
      const result = await cardItemsInCategories()

      expect(result.length).toEqual(
        Object.keys(scenario.cardItemsInCategory).length
      )
    }
  )

  scenario(
    'returns a single cardItemsInCategory',
    async (scenario: StandardScenario) => {
      const result = await cardItemsInCategory({
        id: scenario.cardItemsInCategory.one.id,
      })

      expect(result).toEqual(scenario.cardItemsInCategory.one)
    }
  )

  scenario(
    'creates a cardItemsInCategory',
    async (scenario: StandardScenario) => {
      const result = await createCardItemsInCategory({
        input: {
          cardItemId: scenario.cardItemsInCategory.two.cardItemId,
          categoryId: scenario.cardItemsInCategory.two.categoryId,
        },
      })

      expect(result.cardItemId).toEqual(
        scenario.cardItemsInCategory.two.cardItemId
      )
      expect(result.categoryId).toEqual(
        scenario.cardItemsInCategory.two.categoryId
      )
    }
  )

  scenario(
    'updates a cardItemsInCategory',
    async (scenario: StandardScenario) => {
      const original = (await cardItemsInCategory({
        id: scenario.cardItemsInCategory.one.id,
      })) as CardItemsInCategory
      const result = await updateCardItemsInCategory({
        id: original.id,
        input: { cardItemId: scenario.cardItemsInCategory.two.cardItemId },
      })

      expect(result.cardItemId).toEqual(
        scenario.cardItemsInCategory.two.cardItemId
      )
    }
  )

  scenario(
    'deletes a cardItemsInCategory',
    async (scenario: StandardScenario) => {
      const original = (await deleteCardItemsInCategory({
        id: scenario.cardItemsInCategory.one.id,
      })) as CardItemsInCategory
      const result = await cardItemsInCategory({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
