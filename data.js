export const bio = [
 "Hello! I am Lidia SADI, an artificial intelligence and data engineer passionate about solving complex problems using data."  ,
"With solid expertise in AI and data science, I am driven by the creation of innovative solutions that have a significant impact."  ,
"Thank you for visiting my profile!"
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python, C++, Java, Rust",
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
    title: "Databases",
    skillName: "MongoDB, SQL, PostgreSQL, MySQL, NoSQL",
    color: "7",
    percentage: "90",
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
      projectName: "Sentiment Analysis on the Crisis in Syria and Turkey",
      image: "images/nlp.jpeg",
      summary:
        "Analyzing global opinions from tweets using natural language processing tools like TextBlob, VADER, and NLTK. Visualizations created with Matplotlib, Seaborn, and Plotly.",
      preview: "https://github.com/your-repo-link",  
      techStack: ["TextBlob", "VADER", "NLTK", "Matplotlib", "Seaborn", "Plotly"],
      
    },
    {
      projectName: "Electricity Time Series Classification",
      image: "images/ast.jpg",
      summary:
        "Time series analysis to detect device activation periods using classification algorithms such as Random Forest, XGBoost, KNN, and CNN.",
      preview: "https://github.com/your-repo-link",  
      techStack: ["Random Forest", "XGBoost", "KNN", "CNN", "Python"],

    },
    {
      projectName: "Modeling Spatial Relationships between Objects",
      image: "images/mrsp.png",
      summary:
        "Research on modeling spatial relationships between objects using K-Means, Random Forest, CNN, and KNN for advanced computer vision applications.",
      preview: "https://github.com/your-repo-link", 
      techStack: ["K-Means", "Random Forest", "CNN", "KNN", "Machine Learning"],

    },
    {
      projectName: "Human-Machine Interaction Project",
      image: "images/emdt.jpeg",
      summary:
        "Development of an emotion detection model from images using advanced machine learning techniques. Integration of ResNet for feature extraction, landmarks for facial expressions, and an MLP for emotion classification.",
      preview: "https://github.com/your-repo-link", 
      techStack: ["ResNet", "Landmarks", "MLP", "Python", "Deep Learning"],

    },  
    {
      projectName: "Formal Development for Fighter Jet Landing",
      image: "images/vdm.png",
      summary:
        "Led a crucial project during my bachelor's degree focused on formal development for fighter aircraft landing. Utilized formal methods such as the B method and VDM++ specification language to ensure the correctness and safety of the embedded software.",
      preview: "https://github.com/your-repo-link",   
      techStack: ["B Method", "VDM++", "Formal Methods", "Safety-Critical Systems"],

    },
    {
      projectName: "Development of a Desktop Application in Java",
      image: "images/java.jpeg",
      summary:
        "Creation of a desktop application with an intuitive user interface for task management. Implementation of CRUD functionalities, smooth navigation, and data handling using JavaFX and Swing.",
      preview: "https://github.com/your-repo-link",  
      techStack: ["Java", "JavaFX", "Swing", "MySQL"],

    }
    
  ],
   CVP: [{
    projectName: "YOLOv8 for Computer Vision",
    image: "images/uyolov8.jpeg",
    summary:
      "Development of models for face blurring, PPE detection, and object segmentation.",
    preview: "https://github.com/ultralytics/yolov8",
    techStack: ["YOLOv8", "Python", "Deep Learning"],

    },
    {
      projectName: "Multimodal Medical Image Segmentation",
      image: "images/smm.png",
      summary:
        "Medical image segmentation project using the Unet model. Data analysis from the Brats2021 dataset to improve segmentation accuracy.",
      preview: "https://github.com/your-repo-link",   
      techStack: ["Unet", "Deep Learning", "Medical Imaging", "Python"],

    },
],
  freelanceProjects: [ {
    projectName: "Business Intelligence Reports",
    image: "images/qsp.png",
    summary:
      "Design of interactive reports with Qlik Sense, including data extraction and transformation for actionable visualizations.",
    preview: "https://www.qlik.com/",
    techStack: ["Qlik Sense", "Data Transformation", "BI"],

  },],
};

export const experience = [
  {
    title: "TimeLapseGo' Boulogne Billancourt",
  duration: "September 2023 - September 2024",
  subtitle: "AI and Data Engineering Apprentice",
  details: [
    "Development of YOLOv8 models for face blurring, PPE detection, and object segmentation.",
    "Automation and optimization of processes through Python scripts.",
    "Creation and management of datasets for computer vision tasks.",
  ],
  tags: ["Python", "YOLOv8", "Computer Vision", "Deep Learning"],
  icon: "ai",

  },
  {
    title: "Personal Project",
    duration: "Since September 2024",
    subtitle: "Data Analysis and Modeling",
    details: [
      "Design of interactive reports using Qlik Sense.",
      "Data extraction, transformation, and analysis for actionable visualization.",
      "Creation of dynamic and interactive dashboards.",
    ],
    tags: ["Qlik Sense", "Data Analysis", "Business Intelligence"],
    icon: "chart-bar",

  },
];

export const education = [
  {
    title: "Master in Vision and Intelligent Machines",
    duration: "2022 - 2024",
    subtitle: "Université Paris Cité, Paris",
    details: [],
    tags: [
      "Machine Learning",
      "Computer Vision",
      "Image Analysis",
      "Big Data",
      "Data Science",
    ],
    icon: "graduation-cap",

  },
  {
    title: "Bachelor's in Computer Science",
    duration: "2021 - 2022",
    subtitle: "Université Pau et des Pays de l'Adour",
    details: [],
    tags: ["Programming", "Databases", "Algorithms"],
    icon: "book",

  },
];

export const footer = [
     {
       label: "Dev Profiles",
      data: [
         {
           text: "Stackoverflow",
           link: "https://stackoverflow.com/users/28305952/lidia-sadi",
         },
         {
           text: "GitHub",
           link: "https://github.com/lidiasd",
         },
  //       {
  //         text: "LeetCode",
  //         link: "",
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
         {
           text: "Print this page",
           func: "window.print()",
         },
         
       ],
     },
  {
    label: "Contact",
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
      }
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
