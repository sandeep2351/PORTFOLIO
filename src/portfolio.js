
const settings = {
  isSplash: false,
};

const seo = {
  title: "Sandeep's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sandeep Kalyan's Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Sandeep Kalyan",
  logo_name: "Sandeep Kalyan",
  nickname: "FullStack Web Developer",
  subTitle:
    "Driven by a passion for innovation, I focus on building scalable systems and advancing my knowledge in AI and prompt engineering. With strong problem-solving skills, I thrive on addressing complex challenges and delivering effective solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1ouoIeG19pjvvqti6qAviIl5Sz_zu9_4V/view?usp=sharing",
  portfolio_repository: "https://wa.link/fzhxxy",
  githubProfile: "https://github.com/sandeep2351",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sandeep2351",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sandeep-kalyan-75512a232/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/@mahendra4919",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sandeepkalyan299@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_mr_sandy_41/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive UIs with React, React Query, and Tailwind CSS",
        "⚡ Developing server-side apps with Node.js and Express",
        "⚡ Integrating APIs and databases for full-stack solutions.",
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
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
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
          skillName: "App Write",
          fontAwesomeClassname: "simple-icons:appwrite",
          style: {
            color: "#FD366E",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "ViteJS",
          fontAwesomeClassname: "simple-icons:vite",
          style: {
            color: "#646CFF",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: " #FFC400",
          },
        },
        {
          skillName: "React Query",
          fontAwesomeClassname: "simple-icons:reactquery",
          style: {
            color: " #FF4154",
          },
        },
          {
            skillName: "GraphQL",
            fontAwesomeClassname: "simple-icons:graphql",
            style: {
              color: "#E10098",
            },
          },
          {
            skillName: "AWS",
            fontAwesomeClassname: "simple-icons:amazonaws",
            style: {
              color: "#232F3E",
            },
          },
          {
            skillName: "Next.js",
            fontAwesomeClassname: "simple-icons:nextdotjs",
            style: {
              color: "#000000",
            },
          },
          {
            skillName: "TypeScript",
            fontAwesomeClassname: "simple-icons:typescript",
            style: {
              color: "#3178C6",
            },
          },
          {
            skillName: "WebSockets",
            fontAwesomeClassname: "simple-icons:websocket",
            style: {
              color: "#000000", 
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "simple-icons:java",
            style: {
              color: "#007396",
            }, 
        },
      ],
    },
    {
      title: "AI & Prompt Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing high-quality prompts for AI models to improve output accuracy.",
        "⚡ Improving AI responses by adjusting prompts for specific tasks.",
        "⚡ Working with data to make AI systems smarter and more efficient.",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Gemini",
          fontAwesomeClassname: "simple-icons:googlegemini",
          style: {
            color: "#8E75B2",
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
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/sandeepkalyan/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/23pa5a1214",
    },
    {
      siteName: "Geeks For Geeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "green",
      },
      profileLink: "https://www.geeksforgeeks.org/user/sandeepkax0d1/",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:itch_io",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@mahendra_4919",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@mahendra_4919",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vishnu Institute of Technology",
      subtitle: "Bachelor of technology in Information Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "Vishnu Institute of Technology, Vishnupur, Bhimavaram",
      duration: "2023 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development, AWS.",
        "⚡ Technical Code Setter and WebDev Co-Lead at GDG, driving coding excellence and leading Web development initiatives.",
        "⚡ Organized a Hack-IT-Tron hackathon in collaboration with DOIT club at Vishnu Institute of Technology, fostering innovation and teamwork among aspiring developers.",
      ],
      website_link: "https://vishnu.edu.in/",
    },
    {
      title: "Smt B.Seetha Polytechnic",
      subtitle: "Diploma in Computer Management Engineering",
      logo_path: "seethapoly_logo.png",
      alt_name: "Smt B.Seetha Polytechnic, Vishnupur, Bhimavaram",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I have gained foundational knowledge in core software engineering subjects such as Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence during my studies at Smt B Seetha Polytechnic College.",
        "⚡ Apart from this, I have done courses on Web Development.",
      ],
      website_link: "https://seethapoly.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Development",
      subtitle: "- Bharat Intern",
      logo_path: "bharath-intern.png",
      certificate_link: "",
      alt_name: "Bharat Intern",
      color_code: "#F7DF1E",
    },
    {
      title: "Web Development",
      subtitle: "- Codeways",
      logo_path: "codeways.jpeg",
      certificate_link: "",
      alt_name: "Codeways",
      color_code: "#E44D26",
    },
    {
      title: "SQL Certification",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "JavaScript Certification",
      subtitle: "- Scaler",
      logo_path: "scaler.png",
      certificate_link: "",
      alt_name: "Scaler",
      color_code: "#000000",
    },
    {
      title: "Certified System Administrator (CSA)",
      subtitle: "- ServiceNow",
      logo_path: "servicenow.jpg",
      certificate_link: "",
      alt_name: "ServiceNow CSA",
      color_code: "#13AA52",
    },
    {
      title: "Certified Application Developer (CAD)",
      subtitle: "- ServiceNow",
      logo_path: "servicenow.png",
      certificate_link: "",
      alt_name: "ServiceNow CAD",
      color_code: "#13AA52",
    },
  ]
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have collaborated with teams and individuals as a full-stack web developer, specializing in building scalable applications with React, Node.js, and MongoDB. My expertise extends to creating dynamic user experiences, optimizing backend systems, and integrating AI-powered solutions. Additionally, I enjoy mentoring and contributing to communities, actively participating in tech events to foster innovation and knowledge-sharing.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Current Job",
      work: true,
      experiences: [
        {
          title: "Full Stack AI Engineer",
          company: "SproutsAI (Startup)",
          company_url: "https://sproutsai.com/", // Replace with correct URL if different
          logo_path: "sproutsailogo.svg", // Add this logo file in your assets
          duration: "June 2025 - Present",
          location: "Remote",
          description:
            "Working as a Full Stack AI Engineer at SproutsAI, contributing to the development of an AI-powered platform. Responsible for building scalable web applications using Next.js, Node.js, and PostgreSQL, and integrating intelligent systems to enhance automation and user experience.",
          color: "#00C897",
        },
        {
          title: "Bachelor of Technology in Information Technology Student",
          company: "Vishnu Institute of Technology",
          company_url: "https://vishnu.edu.in/",
          logo_path: "iiitk_logo.png",
          duration: "2023 - Present",
          location: "Bhimavaram, Andhra Pradesh",
          description:
            "Currently pursuing a Bachelor of Technology in Information Technology at Vishnu Institute of Technology. Passionate about full-stack web development, focusing on building scalable applications and innovative solutions while exploring advancements in modern web technologies and AI integration.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "WebDev Lead & Designer",
          company: "DOIT Club, Vishnu Institute of Technology",
          company_url: "https://vishnu.edu.in/",
          logo_path: "DOIT_logo.jpg",
          duration: "January 2024 - Present",
          location: "Bhimavaram, Andhra Pradesh",
          description:
            "Organized a flagship 24-hour Hack-IT-Tron hackathon at Vishnu Institute of Technology, bringing together innovative minds to solve real-world challenges. As WebDev Lead, designed and developed event web assets while also contributing as a Poster Designer, ensuring impactful visual representation and seamless event execution",
          color: "#4285F4",
        },
        {
          title: "Developer Program Member",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "June 2023 - Present",
          location: "Work From Home",
          description:
            "Contributing to open-source projects, collaborating with global developers, and building impactful software solutions while continuously expanding programming expertise.",
          color: "#181717",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects showcase a blend of innovation and technical expertise, by Combining modern web development, AI integration, and prompt engineering. I specialize in building scalable MERN stack applications with intuitive React interfaces and secure Node.js backends. Leveraging AI and prompt engineering, I create intelligent, user-focused solutions with dynamic features, showcasing innovation and technical excellence.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sandeep.JPG",
    description:
      "I’d love to hear from you! Whether you have questions, collaboration ideas, or just want to connect, feel free to reach out. Let’s create something amazing together! Drop me a message below, and I’ll get back to you as soon as possible.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bhimavaram, Andhra Pradesh - 521333",
    locality: "Bank colony",
    country: "India",
    region: "Andhra Pradesh",
    postalCode: "534201",
    streetAddress: "3rd street",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/19-25-6,+Vanapalli+St,+Gandhi+Nagar,+Bank+Colony,+Bhimavaram,+Andhra+Pradesh+534202/@16.5357356,81.5275641,17.22z/data=!4m15!1m8!3m7!1s0x3a37d2a6a86d3e4b:0x4eed21243d2dcfed!2sBhimavaram,+Andhra+Pradesh!3b1!8m2!3d16.544893!4d81.521241!16zL20vMDdfdDU2!3m5!1s0x3a37d2ba1182e15b:0x81d2ae2c5b75fc51!8m2!3d16.5345261!4d81.5275748!16s%2Fg%2F11q2t1hr2g?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8367331109",
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
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
