const liturgyWithoutCover = [
  { name: 'Agbeya', description: '', href: '/files/Agbeya.pdf' },
  {
    name: 'Il Santo Messale',
    description: '',
    href: '/files/Il_santo_messale.pdf',
  },
  {
    name: 'Santo Messale Grande',
    description: '',
    href: '/files/santo_messale_grande.pdf',
  },
  { name: 'Messa Pasqua', description: '', href: '/files/pasqua_2020.pdf' },
  {
    name: 'Lezionario Annuale Domeniche',
    description: '',
    href: '/files/katameros_domeniche.pdf',
  },
  {
    name: 'Rito dei funerali',
    description: '',
    href: '/files/ritodeifunerali.pdf',
  },
  {
    name: 'Fidanzamento-Matrimonio',
    description: '',
    href: '/files/Fidanzamento-Matrimonio.pdf',
  },
  {
    name: 'Lezionario della Santa Cinquantina di Pasqua',
    description: '',
    href: '/files/lezionario.pdf',
  },
  {
    name: 'Lezionario annuale feriale',
    description: '',
    href: '/files/lessionario_annuale.pdf',
  },
  {
    name: 'Lezionario Quaresima',
    description: '',
    href: '/files/lezionario_quaresima.pdf',
  },
  { name: 'Il Sinassario', description: '', href: '/files/synexar.pdf' },
  { name: 'Tamgid', description: '', href: '/files/tamgid.pdf' },
  {
    name: 'Corso Matrimonio',
    description: '',
    href: '/files/CORSO_MATRIMONIO.pdf',
  },
  {
    name: 'Rito del Battesimo',
    description: '',
    href: '/files/ritodelbattesimo.pdf',
  },
  {
    name: 'Rito della Lampada',
    description: '',
    href: '/files/Rito_della_lampada_2018.pdf',
  },
  {
    name: 'Benedizione della Casa Nuova',
    description: '',
    href: '/files/benedizione_della_casa_nuova.pdf',
  },
  { name: 'Natale', description: '', href: '/files/nativity.pdf' },
  {
    name: 'Rito della settimana Santa',
    description: '',
    href: '/files/settimanasanta.pdf',
  },
  {
    name: 'Sabato di Lazzaro domenica delle palme',
    description: '',
    href: '/files/Sabato_di_Lazzaro_domenica_delle_palme.pdf',
  },
  {
    name: 'Lunedì, Martedì e Mercoledì Santo',
    description: '',
    href: '/files/Lun_Mar_Mer_Santo.pdf',
  },
  {
    name: 'Giovedì Santo',
    description: '',
    href: '/files/Giovedi_Santo.pdf',
  },
  {
    name: 'Venerdì Santo',
    description: '',
    href: '/files/Venerdi_Santo.pdf',
  },
]

const liturgy = liturgyWithoutCover.map((liturgy) => ({
  ...liturgy,
  cover: `/covers/${liturgy.href.replace('/files/', '').replace('.pdf', '').replace(/ /g, '_')}.jpg`,
}))

export default liturgy
