import { FaRegHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiSoap } from "react-icons/gi";

export interface Frame {
  id: number;
  subtitle: string;
  paragraph: string | string[];
  picto: React.ElementType;
}

export const frameData: Frame[] = [
  {
    id: 1,
    subtitle: "J'aime",
    paragraph: [
      "Réfléchir à l'organisation des données en fonction du besoin du projet.",
      "J'apprécie également de concevoir le design d'une application pour offrir une expérience fluide et originale.",
    ],
    picto: FaRegHeart,
  },
  {
    id: 2,
    subtitle: "Clean Code",
    paragraph: [
      "De projet en projet, j'apprends à rendre mon code de plus en plus propre et modulable.",
      "Cela permet à la fois d'améliorer les performances et de laisser un travail plus facile à reprendre par la suite, par moi-même ou tout autre développeur web.",
    ],
    picto: GiSoap,
  },
  {
    id: 3,
    subtitle: "Entraide",
    paragraph: [
      "Être développeur web, c'est faire partie d'une grande famille où l'entraide est au cœur des échanges.",
      "Cette culture du partage des connaissances est l'une des choses que j'apprécie le plus dans le monde du développement web.",
      "C'est un véritable travail d'équipe à l'échelle mondiale : on peut s'entraider d'un bout à l'autre de la planète !",
    ],
    picto: FaPeopleGroup,
  },
];
