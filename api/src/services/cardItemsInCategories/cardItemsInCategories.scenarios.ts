import type { Prisma, CardItemsInCategory } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CardItemsInCategoryCreateArgs>({
  cardItemsInCategory: {
    one: {
      data: {
        cardItem: {
          create: { title: 'String', description: 'String', published: true },
        },
        category: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        cardItem: {
          create: { title: 'String', description: 'String', published: true },
        },
        category: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  CardItemsInCategory,
  'cardItemsInCategory'
>
