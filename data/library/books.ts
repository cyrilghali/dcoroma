const booksWithoutCover = [
  {
    name: 'A te la Potenza e Gloria - Papa Shenouda III',
    description: '',
    href: '/files/A_te_la_Potenza_e_Gloria.pdf',
  },
  {
    name: 'CONTEMPLAZIONI SUL LIBRO DEL PROFETA GIONA - Papa Shenouda III',
    description: '',
    href: '/files/contemplazioni_di_giona.pdf',
  },
  {
    name: 'Cenni storici balbis - Papa Shenouda III',
    description: '',
    href: '/files/cenni_storici_balbis.pdf',
  },
  {
    name: 'Come iniziare un nuovo anno - Papa Shenouda III',
    description: '',
    href: '/files/come_iniziare_un_nuovo_anno.pdf',
  },
  {
    name: 'Dieci Definizioni - Papa Shenouda III',
    description: '',
    href: '/files/Dieci_Definizioni.pdf',
  },
  {
    name: 'Donne e Omosessualita - Papa Shenouda III',
    description: '',
    href: '/files/Donne_e_Omosessualita.pdf',
  },
  {
    name: 'Festa annunciazione - Papa Shenouda III',
    description: '',
    href: '/files/Festaannunciazione.pdf',
  },
  {
    name: 'I vantaggi spirituali del digiuno - Papa Shenouda III',
    description: '',
    href: '/files/I_vantaggi_spirituali_del_digiuno.pdf',
  },
  {
    name: 'Il discorso della montagna - Papa Shenouda III',
    description: '',
    href: '/files/ildiscorsodellamontagna.pdf',
  },
  {
    name: 'LA DIVINITÀ DI CRISTO - Papa Shenouda III',
    description: '',
    href: '/files/divinita_cristo.pdf',
  },
  {
    name: "L'epifaniae san giovanni - Papa Shenouda III",
    description: '',
    href: '/files/lepifaniaesangiovanni.pdf',
  },
  {
    name: 'La Santa Vergine Maria - Papa Shenouda III',
    description: '',
    href: '/files/LasantaVergineMaria.pdf',
  },
  {
    name: 'La Serenità - Papa Shenouda III',
    description: '',
    href: '/files/La_Serenita.pdf',
  },
  {
    name: 'La festa della Croce - Papa Shenouda III',
    description: '',
    href: '/files/LafestadellaCroce.pdf',
  },
  {
    name: 'La sapienza e il discernimento - Papa Shenouda III',
    description: '',
    href: '/files/La_sapienza_e_il_discernimento.pdf',
  },
  {
    name: 'Lacrime nella vita spirituale - Papa Shenouda III',
    description: '',
    href: '/files/lacrime_vita_spirituale.pdf',
  },
  {
    name: 'Le Sette Frasi pronunciate sulla Croce - Papa Shenouda III',
    description: '',
    href: '/files/Le_Sette_Frasi_pronunciate_sulla_Croce.pdf',
  },
  {
    name: 'Pietroe Paolo - Papa Shenouda III',
    description: '',
    href: '/files/PietroePaolo.pdf',
  },
  {
    name: 'Riflessioni sulla Resurrezione - Papa Shenouda III',
    description: '',
    href: '/files/Riflessioni sulla Resurrezione.pdf',
  },
  {
    name: 'Ritorno a Dio - Papa Shenouda III',
    description: '',
    href: '/files/ritorno_a_dio.pdf',
  },
  {
    name: 'Santo Zelo - Papa Shenouda III',
    description: '',
    href: '/files/santo_zelo.pdf',
  },
  {
    name: 'TeologiaComparativa - Papa Shenouda III',
    description: '',
    href: '/files/TeologiaComparativa.pdf',
  },
  {
    name: 'Trasfigurazione - Papa Shenouda III',
    description: '',
    href: '/files/Trasfigurazione.pdf',
  },
  {
    name: 'Vita di conversione - Papa Shenouda III',
    description: '',
    href: '/files/Vita_di_conversione.pdf',
  },
  {
    name: 'Cenni storici sulla Chiesa Copta Ortodossa di Alessandria',
    description: '',
    href: '/files/cenni_storici_balbis.pdf',
  },
  {
    name: "La Fase dell'adolescenza",
    description: '',
    href: '/files/FASE ADOLESCENZIALE (sacerdote Andraues Matta).pdf',
  },
  {
    name: 'Commento al Vangelo di Giovanni',
    description: '',
    href: '/files/Commento Vangelo Giovanni (Passione) P.Cirillo 1.pdf',
  },
]

const books = booksWithoutCover.map((book) => ({
  ...book,
  cover: `/covers/${book.href.replace('/files/', '').replace('.pdf', '').replace(/ /g, '_')}.jpg`,
}))

export default books
