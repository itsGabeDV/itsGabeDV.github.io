/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gabriel Del Valle",
  title: "Hello, I'm Gabriel!",
  subTitle: emoji(
    "A passionate software engineer finishing my B.S. in Computer Science at ASU, with 4+ years building solutions in C#, C++, Java, Python, HTML, and CSS — including game development with Unity. I thrive on breaking complex problems into clean, scalable solutions and I'm always looking for opportunities to grow as an engineer."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LZ_RnE98DE3aAIb5iCmWcpdrvskq46s9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/itsGabeDV",
  linkedin: "https://linkedin.com/in/gabedv",
  gmail: "gabrieldelvalle000@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEERING AND GAME DESIGN",
  skills: [
    emoji("⚡ Develop interactive software projects including games and visual applications"),
    emoji("⚡ Apply object-oriented programming principles such as encapsulation, inheritance, abstraction, and polymorphism"),
    emoji("⚡ Use GitHub and collaborative workflows to manage, version, and contribute to software projects"),
    emoji("⚡ Design intuitive and modular software that emphasizes maintainability, reusability, and clean architecture"),
    emoji("⚡ Continuously learn new technologies and apply them through hands-on software development")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fa fa-laptop-code"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Blender",
      fontAwesomeClassname: "fa fa-cube"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "C#/C++/C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asu_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2025 - December 2026",
      desc: "Deans List for 4 semesters, PTK Scholarship Recipient",
      descBullets: [
        "Took courses about Software Engineering, Data Structures and Algorithms, and Database Management Systems.",
      ]
    },
    {
      schoolName: "Estrella Mountain Community College",
      logo: require("./assets/images/EMCC_logo.png"),
      subHeader: "Associate of Science, Emphasis in Computer Science",
      duration: "May 2023 - December 2024",
      desc: "Honors student, graduated with distinction",
      descBullets: ["Took courses about Programming, Computer Architecture, and Programming Languages"]
    },
    {
      schoolName: "Estrella Mountain Community College",
      logo: require("./assets/images/EMCC_logo.png"),
      subHeader: "Associate of Arts, Emphasis in Mathematics",
      duration: "May 2023 - December 2024",
      desc: "Honors student, graduated with distinction",
      descBullets: ["Took courses about Calculus, and Discrete Mathematics"]
    },
    {
      schoolName: "Estrella Mountain Community College",
      logo: require("./assets/images/EMCC_logo.png"),
      subHeader: "Associate of Applied Science, Web Development and Graphic Design",
      duration: "May 2020 - December 2022",
      desc: "Honors student, graduated with distinction",
      descBullets: ["Took courses about Web Development, Graphic Design, and Linux"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern",
      company: "Mayo Clinic",
      companylogo: require("./assets/images/mayo-clinic-logo.png"),
      date: "May 2024 – May 2025",
      desc: "",
      descBullets: [
        "3D Patient Modeling: Developed 3D patient models using depth camera to enhance the accuracy of Peak Skin Dosage (PSD) estimates during fluoroscopic procedures.",
        "Data Visualization: Built a custom dashboard for MR technicians using Python, streamlining data analysis and improving the workflow for radiology procedures.",
        "Academic Presentation: Selected to present research findings at the HSI Summit (NAU, Oct 2024) and the WAESO Conference (ASU, Feb 2025), effectively communicating complex data to non-specialist audiences.",
      ]
    },
    {
      role: "IT Help Desk Intern",
      company: "City of Goodyear",
      companylogo: require("./assets/images/goodyear-logo.jpg"),
      date: "April 2024 – October 2024",
      desc: "",
      descBullets: [
        "Infrastructure Management: Managed technology inventory and executed asset deployment projects, ensuring city employees were equipped with up-to-date hardware.",
        "Technical Troubleshooting: Provided support for hardware and software issues, gaining hands-on experience with PC internal components and IT systems.",
        "Process Improvement: Assisted in large-scale hardware replacement cycles, reducing downtime for city departments."
      ]
    },
    {
      role: "Student Advisor",
      company: "Estrella Mountain Community College",
      companylogo: require("./assets/images/emcc_logo.jpg"),
      date: "September 2023 – April 2024",
      desc: "",
      descBullets: [
        "Academic Mentorship: Guided incoming students through the college transition, providing personalized advising on degree paths and enrollment processes.",
        "Relationship Building: Developed strong interpersonal skills by identifying student goals and tailoring resources to support their educational journeys."
      ]
    },
        {
      role: "Associate Banker",
      company: "Wells Fargo",
      companylogo: require("./assets/images/wells_logo.jpg"),
      date: "November 2018 – May 2023",
      desc: "",
      descBullets: [
        "Financial Consulting: Advised customers on complex financial decisions and provided tailored banking solutions to meet long-term financial goals.",
        "Leadership & Training: Appointed to mentor and train incoming bankers and tellers. Acted as a lead for cash shipments and resolved escalated customer complaints to maintain branch efficiency.",
        "Operational Excellence: Entrusted with managerial-level tasks, ensuring team compliance and consistent success in a high-stakes environment."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Large Scale Projects that I have had the pleasure of working on 🖥️",
  projects: [
    {
      images: [
        require("./assets/images/mayo_model.jpg"),
        require("./assets/images/psd_model.jpg") //this is optional to add more views
      ],
        projectName: "Creating Patient-Specific Models for Fluoroscopy PSD Estimation",
      projectDesc: "The goal of the project was to improve the accuracy of Peak Skin Dose (PSD) estimates to enhance fluoroscopy patient safety. Fluoroscopy procedures utilize generic patient data in PSD estimates. My research team was tasked with creating patient-specific models to attain more accurate estimates. To do this, my team and I developed patient models using a depth camera and calculated PSD estimates using a Python-based PSD calculator. We successfully created a prototype method for high-accuracy modeling and shared our research findings at two different conventions.",
      footerLink: [
        {
          name: "Mayo Clinic",
          url: "http://mayoclinic.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      images:[
        require("./assets/images/mri_plot.png"),
        require("./assets/images/mri_board.png") //this is optional to add more views
      ],
      projectName: "Dashboard Creation for Physicians and MR Technicians",
      projectDesc: "The goal of the project was to develop a dashboard to streamline radiology data into an intuitive dashboard, assisting physicians and MR technicians in identifying workflow efficiencies. Utilizing Python libraries, including Pandas and NumPy for data processing, and Dash and Plotly for visualization. My team developed a functional interface for real-time analysis. The final dashboard allows technicians to filter by date, search specific data, and toggle between graph types.",
      footerLink: [
        {
          name: "Mayo Clinic",
          url: "http://mayoclinic.com/"
        }
      ]
    },
    {
      images:[
        require("./assets/images/game.png"),
        require("./assets/images/gam_ss2.png"), //this is optional to add more views
        require("./assets/images/gam_ss3.png") 
      ],
      projectName: "Tower Defense",
      projectDesc: "I created a strategic tower defense game on the Unity Engine for an Honors Project. Over the course of the semester, I created game assets, worked on game logic, custom soundFX, music, enemy pathfinding, and upgradable defensive structures. The outcome is a fully functional, small tower defense game. Feel free to try the game out—download below, extract the ZIP, and run the .exe file to play",
      footerLink: [
        {
          name: "Download Game (.zip)",
          url: "downloads/tower-defense.zip"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Conferences and Presentations",
  subtitle: emoji(
    "Presentations and conferences I’ve had the opportunity to attend or present at ⭐"
  ),

  talks: 
  [
    {
      title: "WAESO 2025",
      subtitle: "I was invited to present at WAESO in Phoenix, AZ, Feburary 2025",
      event_url: "https://sustainability-innovation.asu.edu/",
      image: require("./assets/images/waeso_2025.png")
    },

    {
      title: "SACNAS 2024",
      subtitle: "I was invited to attend SACNAS 2024 in Phoenix, AZ, November 2024",
      event_url: "https://www.sacnas.org/conference",
      image: require("./assets/images/sacnas_2024.png")
    },
    {
      title: "HSI Summit 2024",
      subtitle: "My research presentation at Flagstaff, AZ, October 2024",
      slides_url: "https://docs.google.com/presentation/d/15Z7H8WwaEwDQXAct8ThHtnd5nyHlf2nN_X_6p412TCg/edit?usp=sharing",
      event_url: "https://hsi.arizona.edu/sites/default/files/2024-10/FINAL-AZ-HSI-Consortium-2024-AZ-HSI-Summit-Program_0.pdf",
      image: require("./assets/images/presenting.JPG")
    }
  ], 
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📱"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+623-282-7825",
  email_address: "gabrieldelvalle000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
