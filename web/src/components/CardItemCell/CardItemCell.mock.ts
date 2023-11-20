// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  cardItem: {
    id: '42',
    title: 'sss',
    colors: [
      {
        name: 'blue',
      },
      {
        name: 'red',
      },
    ],
    price: '110,000원',
    createdAt: new Date().toISOString(),
    image: 'https://picsum.photos/200',
  },
})
