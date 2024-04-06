const tasbehaWithoutCover = [
  {
    name: 'Tasbeha Annuale',
    description: '',
    href: '/files/Tasbeha Annuale.pdf',
  },
  { name: 'Tasbeha Kiahk', description: '', href: '/files/tasbeha_kiahk.pdf' },
]

const tasbeha = tasbehaWithoutCover.map((tasbeha) => ({
  ...tasbeha,
  cover: `/covers/${tasbeha.name.replace(/ /g, '_').toLowerCase()}.jpg`,
}))

export default tasbeha
