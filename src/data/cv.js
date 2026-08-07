export const profile = {
  name: "Anindya Midhey",
  firstName: "Anindya",
  lastName: "Midhey",
  title: "M.Sc in Data Science and AI",
  institution: "RKMVERI, Belur",
  roles: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Reinforcement Learning",
  ],
  tagline:
    "Mathematics meets Machine Learning — building practical AI and data-driven systems.",
  summary: [
    "My experience combines a strong foundation in Mathematics, Data Science and Artificial Intelligence with hands-on work in Machine Learning, Deep Learning, Computer Vision, and Reinforcement Learning.",
    "I am comfortable understanding algorithms and applying them to build practical AI and data-driven systems.",
  ],
  phone: "+91 7044908773",
  email: "anindyamidhey2019@gmail.com",
  linkedin: "https://www.linkedin.com/in/anindya-midhey-607866377/",
  github: "https://github.com/Anindya-Midhey",
  image: "/profile.png", // TODO: add a photo path, e.g. "/photo.jpg" (drop file into public/)
  location: "Kolkata, India",
  status: {
    location: "Kolkata, India",
    study: {
      degree: "M.Sc in Data Science and AI",
      institution: "RKMVERI, Belur",
      type: "full-time",
    },
    work: null, // { role, company, type: "full-time" | "part-time" }
    background: "Mathematics undergrad → ML/DL researcher track",
    openToWork: true,
  },
};

export const resume = "/resume.pdf"; // TODO: drop the resume PDF into public/ as resume.pdf

export const contactMethods = [
  { label: "Email", href: `mailto:${profile.email}`, disabled: false },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, disabled: false },
  { label: "LinkedIn", href: profile.linkedin, disabled: profile.linkedin === "#" },
  { label: "GitHub", href: profile.github, disabled: profile.github === "#" },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "C Programming", "C++", "LaTeX"],
  },
  {
    group: "Frameworks",
    items: [
      "OpenCV",
      "PyTorch",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Seaborn",
      "Matplotlib",
    ],
  },
  {
    group: "Operating Systems",
    items: ["Windows", "Linux (Ubuntu)"],
  },
  {
    group: "Tools",
    items: [
      "Git / GitHub",
      "MS Office",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
    ],
  },
];

export const coursework = [
  "Machine Learning",
  "Artificial Intelligence",
  "Deep Learning",
  "Computer Vision",
  "Probability and Statistics",
  "Linear Algebra",
  "Time Series Analysis",
  "Data Structures and Algorithms",
  "Distributed Computing",
  "Programming in Modern C++",
];

export const projects = [
  {
    title: "Real-Time Facial Emotion Recognition",
    venue: "RKMVERI",
    period: "Feb 2026 – Apr 2026",
    tech: ["CNN", "OpenCV", "MTCNN", "Haar Cascade", "Deep Learning"],
    code: "https://github.com/Anindya-Midhey/Real-Time-Emotion-Recognition-DeepLearning.git",
    description: [
      "Classifies human emotions from facial expressions using live webcam feed and CNN-based Deep Learning models.",
      "Integrated Haar Cascade for image preprocessing and MTCNN for accurate real-time face detection, followed by classification into multiple emotion categories.",
      "Optimized the inference pipeline for low-latency, real-time performance and improved detection accuracy under varying lighting conditions and facial orientations.",
    ],
  },
  {
    title: "Project Akshar",
    venue: "RKMVERI",
    period: "Feb 2026 – Apr 2026",
    tech: ["OCR", "RAG", "Vector Database", "Semantic Search", "Python"],
    code: "https://github.com/Anindya-Midhey/Project-Akshar.git", 
    description: [
      "End-to-end document processing and question-answering system that converts document images into searchable, understandable information.",
      "Integrates image preprocessing, OCR, semantic search, vector database, and Retrieval-Augmented Generation (RAG) to generate accurate, context-aware responses.",
      "Highlights relevant document regions using bounding-box coordinates and uses semantic embeddings for efficient retrieval across complex, multi-page documents.",
    ],
  },
  {
    title: "Distributed Gaming Analytics System",
    venue: "RKMVERI",
    period: "Feb 2026 – Apr 2026",
    tech: ["Python", "Ray", "Scikit-Learn", "Feature Engineering"],
    code: "https://github.com/Anindya-Midhey/Distributed-Gaming-Analytics.git", 
    description: [
      "Distributed CS2 player analytics and prediction system using machine learning models and Ray-based parallel processing.",
      "Supports player performance analysis and stat prediction using kills, assists, ADR, KAST, and KD difference.",
      "Performed feature engineering and comparative model evaluation to improve prediction accuracy and scalability.",
    ],
  },
  {
    title: "Reinforcement Learning-Based Space Invaders System",
    venue: "RKMVERI",
    period: "Oct 2025 – Dec 2025",
    tech: ["Reinforcement Learning", "Q-Learning", "Python"],
    code: "https://github.com/Anindya-Midhey/Space-Invaders-RL.git", 
    description: [
      "Built an AI Space Invaders system using Reinforcement Learning in a custom game environment.",
      "Implemented a Q-Learning agent to learn movement and shooting strategies through reward-based training.",
      "Designed state representation, action space, and reward mechanisms, evaluating learning progress via cumulative rewards and gameplay performance across episodes.",
    ],
  },
  {
    title: "Laptop Price Prediction (Regression Analysis)",
    venue: "RKMVERI",
    period: "Sep 2025 – Nov 2025",
    tech: ["Regression", "Pandas", "Scikit-Learn", "EDA"],
    code: "https://github.com/Anindya-Midhey/LaptopPricePrediction-ML.git",
    description: [
      "Predicted laptop prices from specifications such as RAM, processor, storage, GPU, and display features.",
      "Evaluated machine learning regression models using MSE, MAE, and R2 metrics.",
      "Performed data preprocessing, feature encoding, and exploratory data analysis, comparing multiple regression algorithms to identify the best-performing model.",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc in Data Science and Artificial Intelligence",
    institution: "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI), Howrah",
    period: "2025 – Present",
    detail: "CGPA: 5.61 (till Sem 1)",
    ongoing: true,
    points: [
      "Graduate research program combining strong foundations in Mathematics, Data Science and AI.",
      "Hands-on project work in Machine Learning, Deep Learning, Computer Vision, and Reinforcement Learning.",
    ],
  },
  {
    degree: "B.Sc (Honours) in Mathematics",
    institution: "City College, Kolkata",
    period: "2021 – 2024",
    detail: "CGPA: 6.466",
    ongoing: false,
    points: [
      "Rigorous mathematical training spanning Linear Algebra, Probability, and Statistics.",
      "Built the analytical foundation applied across ML, DL, and data-driven systems.",
    ],
  },
  {
    degree: "Higher Secondary Education",
    institution: "Sonarpur Vidyapith (H.S)",
    period: "2019 – 2021",
    detail: "Result: 78.6%",
    ongoing: false,
    points: [
      "Focused on Physics, Chemistry & Mathematics.",
      "Learnt to analyse the equation and theory around this time.",
    ],
  },
  {
    degree: "Secondary Education",
    institution: "Kamrabad Uchcha Vidyalaya (H.S)",
    period: "2019",
    detail: "Result: 88.71%",
    ongoing: false,
    points: [
      "Built the foundation of the educational pillar required for the future.",
    ],
  },
];

export const achievements = [
  {
    title: "GATE 2026 (DA)",
    remark: "Qualified",
    detail: "Qualified the Graduate Aptitude Test in Engineering (Data Science & AI) 2026.",
  },
  {
    title: "IIT JAM 2025 (Mathematics)",
    remark: "AIR: 1424",
    detail: "All India Rank 1424 in the IIT Joint Admission Test for M.Sc, Mathematics.",
  },
  {
    title: "CUET-PG 2025 (Mathematics)",
    remark: "Score: 124",
    detail: "Scored 124 in the Common University Entrance Test for Postgraduate Mathematics.",
  },
];

export const certificates = [
  {
    title: "Programming in Modern C++",
    issuer: "NPTEL",
    year: "2025",
    image: "c++.png",
  },
  {
    title: "Certificate in Information Technology Application",
    issuer: "CITA",
    year: null,
    image: null,
  },
];
