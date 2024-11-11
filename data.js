export const bio = [
  "Bonjour ! Je suis Lidia SADI, une ingénieure en intelligence artificielle et data passionnée par la résolution de problèmes complexes à l'aide des données.",
  "Avec une solide expertise en IA et data science, je suis motivée par la création de solutions innovantes qui ont un fort impact.",
  "Merci de visiter mon profil !",
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python, C++, Java, R",
    color: "1",
    percentage: "90",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Scikit-learn, TensorFlow, Keras, Pytorch",
    color: "6",
    percentage: "85",
  },
  {
    title: "Design",
    skillName: "HTML, CSS, JavaScript",
    color: "4",
    percentage: "80",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Qlik Sense, PowerBI, Talend Open Studio",
    color: "3",
    percentage: "75",
  },
  //   {
  //     title: "Analytics",
  //     skillName: "CleverTap, Countly",
  //     color: "5",
  //     percentage: "50",
  //   },
  //   {
  //     title: "IDE",
  //     skillName: "VS Code",
  //     color: "6",
  //     percentage: "70",
  //   },
];

export const projects = {
  webProjects: [
    
    
  ],
  softwareProjects: [
    {
      projectName: "Analyse de Sentiments sur la Crise en Syrie et en Turquie",
      image: "images/nlp.jpeg",
      summary:
        "Analyse des opinions mondiales à partir des tweets en utilisant des outils de traitement du langage naturel comme TextBlob, VADER, et NLTK. Visualisations avec Matplotlib, Seaborn, et Plotly.",
      preview: "https://github.com/your-repo-link", // Remplacez avec le lien approprié
      techStack: ["TextBlob", "VADER", "NLTK", "Matplotlib", "Seaborn", "Plotly"],
    },
    {
      projectName: "Classification des Séries Temporelles d'Électricité",
      image: "images/ast.jpg",
      summary:
        "Analyse des séries temporelles pour détecter les périodes d'activation des appareils avec des algorithmes de classification tels que Random Forest, XGBoost, KNN, et CNN.",
      preview: "https://github.com/your-repo-link", // Remplacez avec le lien approprié
      techStack: ["Random Forest", "XGBoost", "KNN", "CNN", "Python"],
    },
    {
      projectName: "Modélisation des Relations Spatiales entre Objets",
      image: "images/mrsp.png",
      summary:
        "Recherche sur la modélisation des relations spatiales entre les objets avec K-Means, Random Forest, CNN, et KNN pour des applications avancées de vision par ordinateur.",
      preview: "https://github.com/your-repo-link", // Remplacez avec le lien approprié
      techStack: ["K-Means", "Random Forest", "CNN", "KNN", "Machine Learning"],
    },
    {
      projectName: "Projet d'Interaction Homme-Machine",
      image: "images/emdt.jpeg",
      summary:
        "Développement d'un modèle de détection des émotions à partir d'images en utilisant des techniques avancées d'apprentissage automatique. Intégration de ResNet pour l'extraction des caractéristiques, landmarks pour les expressions faciales, et un MLP pour la classification des émotions.",
      preview: "https://github.com/your-repo-link", // Remplacez avec le lien approprié
      techStack: ["ResNet", "Landmarks", "MLP", "Python", "Deep Learning"],
    },    
    {
      projectName: "Développement d'une Application Desktop en Java",
      image: "images/java.jpeg",
      summary:
        "Création d'une application desktop avec une interface utilisateur intuitive pour la gestion des tâches. Implémentation des fonctionnalités CRUD, navigation fluide, et gestion des données avec JavaFX et Swing.",
      preview: "https://github.com/your-repo-link", // Remplacez avec le lien approprié
      techStack: ["Java", "JavaFX", "Swing", "MySQL"],
    }
    
  ],
  androidProjects: [{
    projectName: "YOLOv8 pour Vision Par Ordinateur",
    image: "images/uyolov8.jpeg",
    summary:
      "Développement de modèles pour le floutage de visages, la détection des EPI et la segmentation d'objets.",
    preview: "https://github.com/ultralytics/yolov8",
    techStack: ["YOLOv8", "Python", "Deep Learning"],
  },
  {
    projectName: "Segmentation Multimodale des Images Médicales",
    image: "images/smm.png",
    summary:
      "Projet de segmentation des images médicales avec le modèle Unet. Analyse des données du dataset Brats2021 pour améliorer la précision de la segmentation.",
    preview: "https://github.com/your-repo-link", // Remplacez avec le lien approprié
    techStack: ["Unet", "Deep Learning", "Medical Imaging", "Python"],
  },
],
  freelanceProjects: [ {
    projectName: "Rapports de Business Intelligence",
    image: "images/qsp.png",
    summary:
      "Conception de rapports interactifs avec Qlik Sense, extraction et transformation des données pour une visualisation exploitable.",
    preview: "https://www.qlik.com/",
    techStack: ["Qlik Sense", "Data Transformation", "BI"],
  },],
};

export const experience = [
  {
    title: "TimeLapseGo' Boulogne Billancourt",
    duration: "Septembre 2023 - Septembre 2024",
    subtitle: "Apprentie Ingénieure en Intelligence Artificielle et Data",
    details: [
      "Développement de modèles YOLOv8 pour le floutage de visages, la détection d'EPI et la segmentation d'objets.",
      "Automatisation et optimisation des processus via des scripts Python.",
      "Création et gestion de jeux de données pour la vision par ordinateur.",
    ],
    tags: ["Python", "YOLOv8", "Vision par Ordinateur", "Deep Learning"],
    icon: "ai",
  },
  {
    title: "Projet personnel",
    duration: "Depuis Septembre 2024",
    subtitle: "Analyse et modélisation de données",
    details: [
      "Conception de rapports interactifs avec Qlik Sense.",
      "Extraction, transformation et analyse de données pour visualisation exploitable.",
      "Création de tableaux de bord dynamiques et interactifs.",
    ],
    tags: ["Qlik Sense", "Data Analysis", "Business Intelligence"],
    icon: "chart-bar",
  },
];

export const education = [
  {
    title: "Master Vision et Machine Intelligente",
    duration: "2022 - 2024",
    subtitle: "Université Paris Cité, Paris",
    details: [],
    tags: [
      "Apprentissage Machine",
      "Vision par Ordinateur",
      "Analyse d'Images",
      "Big Data",
      "Data Science",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Licence Informatique",
    duration: "2021 - 2022",
    subtitle: "Université Pau et des pays de l'Adour",
    details: [],
    tags: ["Programmation", "Bases de Données", "Algorithmique"],
    icon: "book",
  },
];

export const footer = [
  //   {
  //     label: "Dev Profiles",
  //     data: [
  //       {
  //         text: "Stackoverflow",
  //         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
  //       },
  //       {
  //         text: "GitHub",
  //         link: "https://github.com/vinaysomawat",
  //       },
  //       {
  //         text: "LeetCode",
  //         link: "https://leetcode.com/somawatvinay/",
  //       },
  //     ],
  //   },
  //   {
  //     label: "Resources",
  //     data: [
  //       {
  //         text: "Enable Dark/Light Mode",
  //         func: "enableDarkMode()",
  //       },
  //       {
  //         text: "Print this page",
  //         func: "window.print()",
  //       },
  //       {
  //         text: "Clone this page",
  //         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
  //       },
  //     ],
  //   },
  {
    label: "",
    data: [
      {
        text: "E-mail : didalydiasadi@gmail.com",
        link: "mailto:didalydiasadi@gmail.com",
      },
      {
        text: "Téléphone : +33758210259",
        link: "tel:+33758210259",
      },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/lidia-sadi-562897236/",
      },
      {
        text: "Github",
        link: "https://github.com/lidiasd",
      },
    ],
    
    
  },
  {
    label: "copyright-text",
    data: [
      "Made with ♥ by Lidia SADI.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
