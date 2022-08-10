
const churches = [
  // BOLOGNA
{
  name: "Sant'Atanasio Apostolico",
  imageUrl:"/photos/sanAtanasio.jpg",
  slug: 'sanatanasio',
  churchName: "Chiesa di San Atanasio Apostolico",
  churchImageUrl: "",
  massSchedule: {
      monday: '8:00 - 9:30',
      tuesday: '',
      wednesday: '',
      thursday: '8:30 - 10:00',
      friday: '',
      saturday: '8:00 - 10:00',
      sunday: '9:15 - 11:30'
  },
  referentID: 7,
  location: 'via Caselle, 104, 40068 Caselle (BO)',
  locationUrl: 'https://goo.gl/maps/Yw8s7Qtnoae56B9u5'
},
 // CATANIA
{
  name: "San Giorgio",
  imageUrl:"/photos/sangiorgio.jpg",
  slug: 'sangiorgio',
  churchName: "Chiesa di San Giorgio",
  churchImageUrl: "/photos/catania-sangiorgio.jpg",
  massSchedule: {
      monday: '',
      tuesday: '8h30',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '8h30',
  },
  referentID: 342876,
  location: 'Via Sante Bargellini, 13, 00157 catania RM',
  locationUrl: 'https://goo.gl/maps/bpjJ6CPcoDu9PWP59'
},
{
  name: "Santa Maria di Palermo",
  imageUrl:"/photos/verginemaria.jpg",
  slug: 'verginemaria',
  churchName: "Chiesa di Santa Maria di Palermo",
  churchImageUrl: "/photos/catania-palermo.jpg",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Via Nicolò Garzilli, 90141 Palermo PA',
  locationUrl: 'https://goo.gl/maps/d4mUJHPkzN7E2eARA'
},
{
  name: "Chiesa del papa Cirillo VI",
  imageUrl:"/photos/popekyrellos.jpeg",
  slug: 'popekyrellos',
  churchName: "Chiesa del papa Cirillo VI",
  churchImageUrl: "/photos/catena-ragusa.jpg",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Ragusa',
  locationUrl: ''
},
{
  name: "San Karas",
  imageUrl:"/photos/sankaras.jpeg",
  slug: 'sankaras',
  churchName: "Chiesa di San Karas",
  churchImageUrl: "/photos/catena-ragusa.jpg",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Acireale',
  locationUrl: ''
},
{
  name: "Chiesa San Paolo di Tebe",
  imageUrl:"",
  slug: 'sanpaolo',
  churchName: "Chiesa San Paolo di Tebe",
  churchImageUrl: "/photos/catena-cosenza.jpg",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Cosenza',
  locationUrl: 'https://maps.app.goo.gl/G33kEBNPk1uXThMn6'
},
{
  name: "Anba Antonious",
  imageUrl:"/photos/anbaantonios.jpeg",
  slug: 'anbaantonious',
  churchName: "Chiesa Anba Antonios",
  churchImageUrl: "/photos/catena-cosenza.jpg",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Crotone',
  locationUrl: 'https://maps.app.goo.gl/G33kEBNPk1uXThMn6'
},
{
  name: "Santa Maria - Matera",
  imageUrl:"/photos/verginemaria.jpg",
  slug: 'santamariamatera',
  churchName: "Chiesa di Santa Maria",
  churchImageUrl: "/photos/catena-matera.jpg",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Via Appia Nuova, 244, 00183 catania RM',
  locationUrl: 'https://goo.gl/maps/6Yqr8MEjaLBet6Kd8'
},
{
  name: "Chiesa di San Michele arcangelo",
  imageUrl:"/photos/archangelmikhail.jpeg",
  slug: 'santamichele',
  churchName: "Chiesa di San Michele arcangelo",
  churchImageUrl: "",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Reggio Calabria - Piazza Sant’Agostino',
  locationUrl: ''
},
{
  name: "Chiesa di San Gabriele Arcangelo",
  imageUrl:"/photos/archangelgabriel.jpeg",
  slug: 'sangabriele',
  churchName: "Chiesa di San Gabriele Arcangelo",
  churchImageUrl: "/photos/catania-cagliari.jpg",
  churchName: "Chiesa di Santa Maria",
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  referentID: 342876,
  location: 'Cagliari - Vicino al porto',
  locationUrl: ''
},

  // FIRENZE
{
  name: "San Mina Megalomartire",
  imageUrl:"/photos/sanMina.jpg",
  slug: 'sanmina',
  churchName: "Chiesa di San Mina & San Papa Cirillo VI",
  churchImageUrl: "",
  massSchedule: {
      monday: '9:00 - 11:30',
      tuesday: '9:00 - 11:30',
      wednesday: '9:00 - 11:30',
      thursday: '',
      friday: '9:00 - 11:30',
      saturday: '9:00 - 11:30',
      sunday: '9:00 - 11:30'
  },
  referentID: 13,
  location: 'Via S.Bartolo in Tuto 7, 50018 Scandicci FI',
  locationUrl: 'https://goo.gl/maps/x6bmQhd6wLExCmPUA'
},

// ROMA
{
  name: "San Giorgio Megalomartire",
  imageUrl:"/photos/sangiorgio.jpg",
  slug: 'sangiorgio',
  churchName: "Chiesa di San Giorgio",
  churchImageUrl: "/photos/roma-sangiorgio.jpg",
  massSchedule: {
      monday: '9:00 - 11:30',
      tuesday: '9:00 - 11:30',
      wednesday: '9:00 - 11:30',
      thursday: '9:00 - 11:30',
      friday: '9:00 - 11:30',
      saturday: '9:00 - 11:30',
      sunday: '9:00 - 11:30'
  },
  referentID: 3,
  location: 'Via Sante Bargellini, 13, 00157 Roma RM',
  locationUrl: 'https://goo.gl/maps/bpjJ6CPcoDu9PWP59'
},
{
  name: "San Mina Megalomartire",
  imageUrl:"/photos/sanMina.jpg",
  slug: 'sanmina',
  churchName: "Chiesa di San Mina & San Papa Cirillo VI",
  churchImageUrl: "/photos/roma-sanmina.jpg",
  massSchedule: {
      monday: '9:00 - 11:30',
      tuesday: '',
      wednesday: '9:00 - 11:30',
      thursday: '',
      friday: '9:00 - 11:30',
      saturday: '',
      sunday: '9:00 - 11:30'
  },
  referentID: 304580,
  location: 'Piazza della Trasfigurazione, 00151 Roma RM',
  locationUrl: 'https://goo.gl/maps/QMojMr917Jvw35J6A'
},
{
  name: "Vergine Maria",
  imageUrl:"/photos/verginemaria.jpg",
  slug: 'verginemaria',
  churchName: "Monastero della Vergine Maria",
  churchImageUrl: "/photos/monasterio.jpg",
  massSchedule: {
      monday: '9:00 - 11:30',
      tuesday: '9:00 - 11:30',
      wednesday: '9:00 - 11:30',
      thursday: '',
      friday: '9:00 - 11:30',
      saturday: '',
      sunday: '9:00 - 11:30'
  },
  referentID: 905021,
  location: 'Via Laurentina, 1571, 00134 Roma RM',
  locationUrl: 'https://goo.gl/maps/JT6r7VkWm45GXEUYA'
},
{
  name: "San Marco Apostolo",
  imageUrl:"/photos/sanmarco.jpg",
  slug: 'sanmarco',
  churchName: "Chiesa di San Marco",
  churchImageUrl: "",
  massSchedule: {
      monday: '9:00 - 11:00',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '9:00 - 11:30'
  },
  referentID: 800770,
  location: 'Via Appia Nuova, 244, 00183 Roma RM',
  locationUrl: 'https://goo.gl/maps/6Yqr8MEjaLBet6Kd8'
},
{
  name: "Santa Vergine Maria - Fiumicino",
  imageUrl:"/photos/verginemaria.jpg",
  slug:"santaverginemariafiumicino",
  churchName: "Chiesa della Santa Vergine Maria",
  churchImageUrl: "",
  massSchedule: {
      monday: '',
      tuesday: '8:00 - 10:00',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
  },
  referentID: 6,
  location: 'Via della Scafa, 176, 00054 Fiumicino RM',
  locationUrl: 'https://goo.gl/maps/KVGPAUxDXYHwT5ZYA'
},
{
  name: "San Musa il nero",
  imageUrl:"/photos/sanmusa.jpg",
  slug: 'sanmusa',
  churchName: "Chiesa di San Musa il nero",
  churchImageUrl: "",
  monthlyMassSchedule:"La messa viene celebrata il 1° e 3° Lunedi' del mese a partire dalle 8:00.",
  massSchedule: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
  },
  referentID: 9,
  location: 'Via Luigi Cadorna, 6, 00044 Frascati RM',
  locationUrl: 'https://goo.gl/maps/p5j2JuNPFzaAvgZt7'
},
{
  name: "San Macario",
  imageUrl:"/photos/sanmacario.jpg",
  slug: 'sanmacario',
  churchName: "Chiesa di San Macario",
  churchImageUrl: "",
  monthlyMassSchedule:"La messa viene celebrata il 1° e 3° Sabato del mese a partire dalle 8:00.",
  massSchedule: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
  },
  referentID: 9,
  location: 'Piazza di Santa Monica, 1, 00121 Lido di Ostia RM',
  locationUrl: 'https://goo.gl/maps/L5xKX5ZD56HQX48H9'
},
{
  name: "Arcangelo Michele",
  imageUrl:"/photos/arcangelomichele.jpg",
  slug: 'arcangelomichele',
  churchName: "Chiesa dell'Arcangelo Michele",
  churchImageUrl: "",
  monthlyMassSchedule:"La messa viene celebrata una volta al mese.",
  massSchedule: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
  },
  referentID: 3,
  location: '',
  locationUrl: ''
},
{
  name: "Sant'Agostino e Santa Monica",
  imageUrl:"/photos/sanagostinosantamonica.jpg",
  slug:"sanagostinosantamonica",
  churchName: "Chiesa di Sant'Agostino e Santa Monica",
  churchImageUrl: "",
  monthlyMassSchedule:"La messa viene celebrata una volta al mese.",
  massSchedule: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
  },
  referentID: 3,
  location: '',
  locationUrl: ''
},
{
  name: "San Abramo",
  imageUrl:"/photos/sanabraam.jpg",
  slug: 'sanabramo',
  churchName: "Chiesa di San Abramo",
  churchImageUrl: "/photos/genova-abramo.jpg",
  referentID: 13,
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  location: 'Corso Europa 33, 83100 Avellino',
    locationUrl: 'https://goo.gl/maps/giiCjnRp4PEjKbt77'
},

// TORINO

{
  name: "San Mercurio il Filopatore",
  imageUrl:"/photos/mercurio.jpg",
  slug: 'sanmercurio',
  churchName: "Chiesa di San Mercurio il Filopatore",
  churchImageUrl: "/photos/torino-mercurio.jpeg",
  referentID: 13,
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  location: 'Via dei Seminari, 9 Biella',
  locationUrl: 'https://goo.gl/maps/pZRLMAF3zn1yGYUXA'
},
{
  name: "Santa Verena & San Muris",
  imageUrl:"/photos/verina.jpg",
  slug: 'santaverena',
  churchName: "Chiesa di Santa Verena & San Muris",
  churchImageUrl: "/photos/torino-verina.jpg",
  referentID: 13,
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  location: 'Via paolo della silva, 15 Domodossola',
  locationUrl: 'https://goo.gl/maps/bZHwBTftHx2mDMHy8'
},{
  name: "Santa Maria & San Giuseppe il falegname",
  imageUrl:"/photos/verginemaria.jpg",
  slug: 'verginemaria',
  churchName: "Chiesa di Santa Maria & San Giuseppe il falegname",
  churchImageUrl: "/photos/torino-santamaria.jpg",
  referentID: 13,
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  location: 'Via Parini, 5 Vercelli',
  locationUrl: 'https://goo.gl/maps/b871Tejs7Lt3aVwp9'
},{
  name: "San Lazzaro",
  imageUrl:"/photos/lazario.jpg",
  slug: 'sanlazarro',
  churchName: "Chiesa di San Lazzaro",
  churchImageUrl: "/photos/torino-lazarro.jpg",
  referentID: 13,
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  location: 'Via trevigi, 47 Casale Monferrato',
  locationUrl: 'https://goo.gl/maps/GELpEx4b59uTxEx48'
},{
  name: "San Giovanni Battista",
  imageUrl:"/photos/giovanni.png",
  slug: 'sangiovanni',
  churchName: "Chiesa di San Giovanni Battista",
  churchImageUrl: "/photos/torino-giovanni.jpg",
  referentID: 13,
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  location: 'Piazza San Rocco 1, Alessandria',
  locationUrl: 'https://goo.gl/maps/vgR9tzie4LVB1Twi9'
},
{
  name: "San Abramo",
  imageUrl:"/photos/sanabraam.jpg",
  slug: 'sanabramo',
  churchName: "Chiesa di San Abramo",
  churchImageUrl: "/photos/torino-abramo.jpg",
  referentID: 13,
  monthlyMassSchedule: 'La messa viene celebrata una volta al mese',
  location: 'Corso Europa 33, 83100 Avellino',
  locationUrl: 'https://goo.gl/maps/giiCjnRp4PEjKbt77'
},
]
export default churches
