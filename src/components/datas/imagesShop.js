const ImagesEte = [
  {
    id: 1,
    title: 'Palmiers',
    cover: '../canvy/3xtableau.jpg',
    hovered: '../images/palmier.jpg',
    description: '13 x 18',
    prix: 'vendu',
  },
  {
    id: 2,
    title: 'La jeune fille et la mer',
    cover: '../canvy/decorJeuneFille.jpg',
    hovered: '../images/jeuneFille.jpg',
    description: '21 x 29,7',
    prix: 'Vendu',
  },
  {
    id: 3,
    title: 'Ile de rêve',
    cover: '../canvy/decorMontagneMarine.jpg',
    hovered: '../images/montagneMarine.jpg',
    description: '30 x 40',
    prix: '60€',
  },
]

const ImagesHiver = [
  {
    id: 1,
    title: "Pont d'automne",
    cover: "../canvy/Pont_d'automne.jpg",
    hovered: "../images/pont d'automne.jpg",
    description: '13 x 18',
    prix: '5€',
  },
  {
    id: 2,
    title: "Songe d'automne",
    cover: "../canvy/Songe_d'automne.jpg",
    hovered: "../images/Songe d'automne.jpg",
    description: '21 x 29,7',
    prix: 'vendu',
  },
  {
    id: 3,
    title: 'Paysage automnal',
    cover: '../canvy/Paysage_automnal.jpg',
    hovered: '../images/Paysage automnal.jpg',
    description: '30 x 40',
    prix: '63€',
  },
]

const Collections = [
  {
    title: "Nostalgie d'été",
    images: ImagesEte,
  },
  {
    title: "Légendes d'automne",
    images: ImagesHiver,
  },
]

export default Collections
