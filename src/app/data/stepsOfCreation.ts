export interface Step {
  id: number;
  title: string;
  paragraph: string;
  imageUrl: string;
}

export const stepsOfCreation: Step[] = [
  {
    id: 1,
    title: "Un premier rendez-vous",
    paragraph:
      "Peu importe le projet que vous avez en tête, nous le construirons au plus proche de votre idée. Ce premier rendez-vous permet de nous mettre d’accord ensemble sur vos besoins et d’estimer au mieux la durée du développement à prévoir.",
    imageUrl: "",
  },

  {
    id: 2,
    title: "Création du prototype",
    paragraph:
      "Le prototype de votre projet est créé à l’aide de Figma, un outil de création web collaboratif. Ce prototype vous sera proposé et retouché au besoin afin de correspondre au plus près à votre demande.",
    imageUrl: "",
  },

  {
    id: 3,
    title: "Développement",
    paragraph:
      "Que ce soit pour la mise en ligne d’un site web ou l’enregistrement de votre application sur un store en ligne, nous réalisons cela ensemble en toute transparence.",
    imageUrl: "",
  },
  {
    id: 4,
    title: "Déploiement",
    paragraph:
      "En fonction de la taille du projet, le développement peut durer de quelques jours à plusieurs mois. Dans tous les cas, vous êtes informé de l’avancée du projet et recontacté lors de la réalisation des étapes clés.",
    imageUrl: "",
  },
  {
    id: 5,
    title: "Dépannage & conseil",
    paragraph:
      "Lors de la livraison finale du projet, vous avez entièrement la main sur celui-ci. Nous restons naturellement en contact pour vous dépanner et vous apporter nos conseils au besoin.",
    imageUrl: "",
  },
  {
    id: 6,
    title: "Satisfait ?",
    paragraph:
      "Si l’agence EH Web vous a apporté entière satisfaction, nous pouvons travailler à nouveau ensemble sur un nouveau projet. La fidélité est appréciée et ouvre à des réductions sur la prochaine réalisation !",
    imageUrl: "",
  },
];
