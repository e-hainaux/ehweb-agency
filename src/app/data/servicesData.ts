export interface Service {
  id: number;
  title: string;
  paragraph: string | string[];
  imageUrl: string;
}

export const servicesInfo: Service[] = [
  {
    id: 1,
    title: "Site monopage",
    paragraph:
      "Un site vitrine moderne vous permet de communiquer sur votre activité de manière simple au plus grand nombre.",
    imageUrl: "/images/networkPicto.svg",
  },

  {
    id: 2,
    title: "Sur mesure",
    paragraph: [
      "Vous avez besoin de plus de fonctionnalités ?",
      "Maîtrisez votre communication avec un site web complet.",
    ],
    imageUrl: "/images/registerPicto.svg",
  },

  {
    id: 3,
    title: "Applicatif",
    paragraph:
      "Application mobile ou logiciel professionnel de gestion, nous construisons ensemble selon vos besoins.",
    imageUrl: "/images/applicationPicto.svg",
  },
];
