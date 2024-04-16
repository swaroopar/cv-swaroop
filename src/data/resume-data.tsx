import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Swaroop Akulu Raghupathy",
  initials: "SAR",
  location: "Munich, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Munich",
  about:
    "Full Stack Engineer",
  summary:
    "As an Engineer, my focus has been always on engineering simple solutions for complex problems. I have around 15 years of experience across different phases of the software development life cycle.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54129659?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "swaroop.ar@outlook.com",
    tel: "+4917688462544",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/swaroopar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arswa/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ARSwaroop",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Amrita School of Engineering",
      degree: "Bachelor of Technology in Electronics and Communication",
      start: "2004",
      end: "2008",
    },
  ],
  work: [
    {
      company: "Wipro",
      link: "https://wipro.com",
      badges: ["onsite", "pune", "munich"],
      title: "Technical Lead",
      start: "2009",
      end: "2016",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Cognizant",
      link: "https://cognizant.com",
      badges: ["munich"],
      title: "Lead DevOps Engineer",
      start: "2016",
      end: "2019",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Airbus",
      link: "https://airbus.com/",
      badges: ["private cloud"],
      title: "Lead Software Engineer",
      logo: undefined,
      start: "2020",
      end: "2022",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Huawei",
      link: "https://www.huawei.com",
      badges: ["research", "cloud"],
      title: "Principal Cloud Engineer",
      logo: undefined,
      start: "2023",
      end: "-",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "OpenSource",
    "TypeScript",
    "JavaScript",
    "ReactJS",
    "Java",
    "RestAPI",
    "SpringBoot",
  ],
  projects: [
    {
      title: "Eclipse Xpanse",
      techStack: [
        "OpenSource",
        "TypeScript",
        "JavaScript",
        "ReactJS",
        "Java",
        "RestAPI",
        "SpringBoot",
      ],
      description: "A platform to build and grow your online business",
      logo: undefined,
      link: {
        label: "eclipse-xpanse",
        href: "https://eclipse.dev/xpanse",
      },
    },
  ],
} as const;
