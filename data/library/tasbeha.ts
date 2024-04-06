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
  cover: `/covers/${tasbeha.href.replace('/files/', '').replace('.pdf', '').replace(/ /g, '_')}.jpg`,
}))

export default tasbeha
