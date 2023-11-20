import type { Prisma, CardItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CardItemCreateArgs>({
  cardItem: {
    one: { data: { title: 'String', description: 'String', published: true } },
    two: { data: { title: 'String', description: 'String', published: true } },
  },
})

export type StandardScenario = ScenarioData<CardItem, 'cardItem'>
