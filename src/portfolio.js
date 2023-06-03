/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sheharyar's Portfolio",
  description:
    "A passionate developer who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shaharyar Khan Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/sheharyar-khan-44b98b192/",
  },
};

//Home Page
const greeting = {
  title: "Shaharyar Khan",
  logo_name: "ShaharyarKhan",
  // nickname: "layman_brother",
  subTitle:
    "A passionate developer who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/14z0OyWQp11wFTg-oFzh8y5JErQx7-s1_/view?usp=share_link",
  portfolio_repository: "https://github.com/Sheharyar-Khan401/myPortfolio",
  // githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  // {
  //   name: "Github",
  //   link: "https://github.com/ashutosh1919",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sheharyar-khan-44b98b192/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shaharyar.khan42@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sheharyar.khaann/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "MERN Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Create user interfaces and interactive web applications using React.js.",
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Design and implement MongoDB databases, including schema definition and query optimization",
        "⚡ Build server-side applications using Node.js and Express.js, including RESTful APIs and data storage",
        "⚡ Develop and integrate APIs for seamless communication between front-end and back-end components",
        "⚡ Identify and optimize performance bottlenecks in both front-end and back-end components",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Establish automated processes for quick and reliable software delivery.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Coordinate software releases across different environments with version control",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
        "⚡ Automate and manage server and infrastructure configurations for consistency.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Lead a team of developers & designers to deliver complex web applications on time and within budget",
        "⚡ Collaborate with stakeholders to define project goals and requirements, and ensure alignment with the company's overall business strategy.",
        "⚡ Coordinate cross-functional teams to ensure effective communication and collaboration throughout the project lifecycle",
        "⚡ Conducte regular project status meetings with stakeholders to provide updates on progress, and gather feedback and input",
        "⚡ Mentore and trained team members to develop their skills and abilities, and foster a culture of continuous learning and improvement.",
      ],
      softwareSkills: [
        {
          skillName: "Leadership",
          fontAwesomeClassname: "fluent-mdl2:party-leader",
          style: {
            color: "lightblue",
          },
        },
        {
          skillName: "Management",
          fontAwesomeClassname: "ep:management",
          style: {
            color: "#DBBD94",
          },
        },
        {
          skillName: "Communication",
          fontAwesomeClassname: "fluent:communication-person-20-regular",
          style: {
            color: "#fa7e45",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Education",
      iconifyClassname: "zondicons:education",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Certificates",
      iconifyClassname: "bxs:certification",
      style: {
        color: "gold",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Comsats University Islamabad",
      subtitle: "Bachelors in Computer Science",
      logo_path: "COMSATS_new_logo.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2021",
      descriptions: [
        "✏️ Studied a comprehensive curriculum covering computer systems, programming languages, algorithms, and software development methodologies.",
        "✏️ Developed a strong understanding of data structures, databases, networking, and operating systems.",
        "✏️ Completed coding projects, labs, and internships to gain practical experience in software development.",
        "✏️ Applied problem-solving and critical thinking skills to analyze and solve complex programming challenges.",
        "✏️ Explored areas such as software engineering principles, software testing, and quality assurance.",
        "✏️ Graduated with a Bachelor's degree in Computer Science, equipped with the skills for a successful career in software development, web development, data analysis, or cybersecurity.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Kashmir Modal College",
      subtitle: "HIGHER SECONDARY SCHOOL CERTIFICATE (HSSC)",
      logo_path: "kmc.jpg",
      alt_name: "KMC",
      duration: "2015 - 2017",
      descriptions: [
        "🎓 Grade A",
      ],
      website_link: "https://www.indiana.edu/",
    },
    {
      title: "Kashmir Modal College",
      subtitle: "Secondary School Certificate (SSC),",
      logo_path: "kmc.jpg",
      alt_name: "KMC",
      duration: "2013 - 2015",
      descriptions: [
        "🎓 Grade A+",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as React and Web Developer. I have also worked with some well established companies mostly as MERN stack Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "React Developer",
          company: "GlobeWyze Inc.",
          company_url: "https://globewyze.com/index.html",
          logo_path: "gwlogo.jpg",
          duration: "August 2021 - Present",
          location: "Rawalpindi/Islamabad",
          description:
            "I am working on building user interfaces and front-end components using React.js. I translate UI/UX designs into functional code, implement responsive layouts, and ensure a smooth user experience. I work with state management libraries, integrate APIs, and optimize application performance. Collaboration with designers and back-end developers, version control using Git, and continuous learning of new React trends and best practices are essential aspects of my work. Overall, I play a crucial role in developing high-quality web applications with a focus on modularity, reusability, and performance.",
          color: "#0879bf",
        },
        {
          title: "Front-end Engineering Lead",
          company: "GlobeWyze Inc.",
          company_url: "https://globewyze.com/index.html",
          logo_path: "gwlogo.jpg",
          duration: "Feb 2022 - Present",
          location: "Rawalpindi/Islamabad",
          description:
            "As a Front-end Engineering Lead, my role is to provide technical leadership and guidance to a team of front-end developers. I am responsible for planning and executing front-end development projects, ensuring they are delivered on time and with high quality. I architect scalable and maintainable solutions, making decisions on technologies and frameworks. Collaborating with cross-functional teams, I facilitate effective communication and resolve conflicts. I actively participate in front-end development tasks, conducting code reviews and mentoring team members. Staying updated with industry trends, I strive for continuous improvement and innovation in our front-end development practices.",
          color: "rgb(148 163 180",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Lenticas Private Limited",
          company_url: "https://www.facebook.com/lenticas",
          logo_path: "lenticaslogo.png",
          duration: "May 2022 - July 2022",
          location: "Wahh cantt",
          description:
            "As a Web Development Intern, my primary role was to collaborate with experienced developers and gain practical experience in web development. I assisted in front-end and back-end development tasks, including coding in HTML, CSS, and JavaScript, implementing website designs, and managing databases. Under the guidance of senior team members, I had the opportunity to learn and apply various web development frameworks and tools. I actively contributed to debugging and testing processes, supported website maintenance activities, and participated in team discussions and meetings. Throughout my internship, I aimed to gain valuable hands-on experience, enhance my technical skills, and make meaningful contributions to the success of web development projects.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Showcasing Expertise and Achievements in web development using MongoDB, Express.js, React.js, and Node.js. Explore my portfolio to witness the results of my passion and dedication to delivering high-quality solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sherry.jpg",
    description:
      "Let's connect and start a conversation! Whether you have questions, need assistance, or want to explore potential collaborations, I'm here to help. Feel free to reach out to me, and I'll get back to you as soon as possible. Looking forward to hearing from you!",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
