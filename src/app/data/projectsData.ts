export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string | string[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EH Web",
    description: "Site Next (TS) & React",
    imageUrl: "/images/projectsImages/ehwebWithBkgrd.svg",
    fullDescription:
      "L'emploi de débutants dans le développement web étant devenu compliqué courant 2024, j'ai décidé de travailler un peu en freelance en attendant une opportunité en entreprise. Pour cela, il me fallait un site qui ait une apparence plus professionnelle que mon portfolio initial. J'ai donc monté ce site de toutes pièces en poursuivant mon apprentissage de React et Next, certains fonctionnements ayant évolué depuis ma formation. J'ai également pris à la fois le temps et le plaisir de travailler sur le design et les animations CSS.",
    technologies: ["React", "Next", "Typescript"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 2,
    title: "Furigana App",
    description: "App Nest.js & Vue3 (+ Tailwind)",
    imageUrl: "/images/projectsImages/LogoFuriganaApp.png",
    fullDescription:
      "Dans le but d'étendre mes compétences en apprenant à développer sous Vue3 avec Tailwind CSS, j'ai développé cet outil applicatif qui permet de retranscrire un texte japonais dans une version comprenant la prononciation des idéogrammes (kanji). Pour cette partie technique, j'ai fait appel à l'API 'kuroshiro' qui est spécialement conçue pour ce type de besoin. J'ai pu joindre l'utile à l'agréable, étant moi-même amateur de la langue japonaise.",
    technologies: ["Nest.js", "Vue3", "Typescript", "Tailwind CSS"],
    githubLink: "",
    liveLink: "https://furigana-app.vercel.app/",
  },
  {
    id: 3,
    title: "Gamin Retro APP",
    description: "App Express & React",
    imageUrl: "/images/projectsImages/GaminRetroLogo.png",
    fullDescription:
      "Ce projet est une reprise de la version initialement réalisée sous WordPress. J'ai réalisé cette version 'app' en fullstack avec un backend sous Express et un front en React afin de consolider mes connaissances acquises lors de ma formation à La Capsule. Le vrai plus par rapport à la version WP est la partie Admin que j'ai totalement configurée pour me permettre de récupérer les informations des jeux vidéos via l'API 'IGDB'. Cela me permet d'ajouter les jeux de façon automatisée via une simple recherche et une validation. La base de données MongoDB me permet de conserver l'ensemble des informations m'étant utiles et je peux également modifier ou supprimer les jeux via un onglet de la partie 'admin'. Cloudinary me sert à sauvegarder les illustrations des jeux.",
    technologies: ["Express", "React", "JavaScript"],
    githubLink: "",
    liveLink: "https://app.gaminretro.fr",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Site Next (TS) & React",
    imageUrl: "/images/projectsImages/ehwebLogo.svg",
    fullDescription:
      "Après plusieurs projets, il était important pour moi de développer mon portfolio. Je l'ai réalisé en TypeScript pour garder la main suite à mon stage, profitant ainsi d'un code plus fiable et plus facile à maintenir. ATTENTION : ce site n'est plus mis à jour car remplacé par une version plus professionnelle sur ehweb.fr. Vous pouvez tout de même le visualiser en cliquant sur le lien - voir en live - .",
    technologies: ["Next", "React", "TypeScript"],
    githubLink: "",
    liveLink: "https://ehweb.vercel.app/",
  },
  {
    id: 5,
    title: "On Joue Quand",
    description: "Appli Nest & React Native (développement en cours)",
    imageUrl: "/images/projectsImages/OJQ.png",
    fullDescription: [
      "Lors de mon stage chez Grow Your Business, on m'a missionné sur cette application. Il s'agit d'une application de gestion de parties de jeux. J'ai d'abord travaillé au développement du backend sous Nest.js avec Prisma. Ensuite, j'ai réalisé certaines pages avec React Native et Expo. ",
      "Cette expérience m'a permis de vivre en situation réelle le métier de développeur web dans un contexte agile et une organisation en sprints de développement.",
    ],
    technologies: ["Nest", "Prisma", "React Native", "Expo", "TypeScript"],
    githubLink: "",
    liveLink: "https://fr.ulule.com/on-joue-quand/",
  },
  {
    id: 6,
    title: "Helene Pro +",
    description: "Site Express & React (développement en cours)",
    imageUrl: "/images/projectsImages/HelenePetSitting.png",
    fullDescription:
      "Il s'agit d'un projet indépendant ayant pour but de présenter une activité de petsitting. Ce projet me permet de mettre en pratique mes connaissances acquises lors de ma formation à La Capsule. Le projet est en cours de développement.",
    technologies: ["Node.js", "Express", "React"],
    githubLink: "",
    liveLink: "https://helenepetsitting-frontend.vercel.app/",
  },
  {
    id: 7,
    title: "SYA - Sara Yoga Arras",
    description: "Site Express & React (développement en cours)",
    imageUrl: "/images/projectsImages/SYA.png",
    fullDescription:
      "Il s'agit d'un projet indépendant ayant pour but de présenter une activité de yoga. Ce projet me permet de mettre en pratique mes connaissances acquises lors de ma formation à La Capsule. En créant ce site, j'ai également appris à mettre en place un système de vérification reCAPTCHA. Le projet est en cours de développement.",
    technologies: ["Node.js", "Express", "React"],
    githubLink: "",
    liveLink: "https://sya-frontend.vercel.app/",
  },
  {
    id: 8,
    title: "DressCode",
    description: "Appli Express & React Native (MVP de fin de formation)",
    imageUrl: "/images/projectsImages/DressCode.png",
    fullDescription:
      "DressCode est l'application développée en fin de formation à La Capsule. Nous avons entièrement conceptualisé l'application en groupe de quatre personnes pendant deux semaines. Cela nous a permis de mettre en application les compétences développées au fil de la formation à La Capsule. Il s'agit d'un MVP qui n'est pas disponible sur les stores actuellement. Je vous invite à visualiser la vidéo partagée sur LinkedIn (Cf. lien \"Voir en Live\").",
    technologies: ["Node.js", "Express", "React Native", "Expo"],
    githubLink: "",
    liveLink:
      "https://www.linkedin.com/posts/e-hainaux_demoday-javascript-reconversion-activity-7178679398005403649-4NIw?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 9,
    title: "GaminRetro",
    description: "Site WordPress",
    imageUrl: "/images/projectsImages/GaminRetro.png",
    fullDescription:
      "Après avoir appris les bases de création de sites web en HTML et CSS, j'ai eu la curiosité de développer un site avec WordPress. L'idée était de créer une ludothèque de jeux vidéo retro personnelle. J'ai entre autre apprécié la création du logo et l'agencement du design général.",
    technologies: ["WordPress"],
    githubLink: "",
    liveLink: "https://gaminretro.fr/",
  },
  {
    id: 10,
    title: "FibroQuoi",
    description: "Site HTML5 & CSS3",
    imageUrl: "/images/projectsImages/FibroQuoi.png",
    fullDescription:
      "Tout premier site que j'ai développé avant de lancer ma reconversion. Il s'agit de présenter de façon synthétique le syndrôme fibromyalgique. Site initialement développé avec les moyens du bord : HTML et CSS tapés directement dans un bloc-notes windows. J'ai depuis eu la joie d'apprendre à utiliser Visual Studio Code. Fibro-Quoi est en projet de réalisation future sous Vue.js et Tailwind afin de me familiariser avec ces Technos.",
    technologies: ["HTML5", "CSS", "Bloc-notes Windows"],
    githubLink: "",
    liveLink: "https://fibro-quoi.fr/",
  },
];
