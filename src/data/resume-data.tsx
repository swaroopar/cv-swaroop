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
  personalWebsiteUrl: "https://inprogress-engineer.com",
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
      badges: ["QA", "DBA", "Automation"],
      title: "Software Engineer",
      start: "2009",
      end: "2016",
      description:
        "Responsible for quality assurance and test environments for telecom providers. Worked on all phases of software quality lifecycle. Later on extensively worked on administrating and managing complete test infrastructure. " +
        "Technologies: Linux, OracleDB, Weblogic, Service Integration, end-to-end testing, business process analysis",
    },
    {
      company: "Cognizant",
      link: "https://cognizant.com",
      badges: ["containers", "DevOps", "microservices"],
      title: "Senior DevOps Engineer",
      start: "2016",
      end: "2019",
      description:
        "Responsible for development and operations of Java based microservices application. Implementation of REST APIs, middleware, integration to different backend systems, automation of delivery process, 3rd level support. " +
        "Technologies: Java, SpringBoot, Jersey, REST Api, Jenkins, WLST, Python scripting, Weblogic, load balancers",
    },
    {
      company: "Airbus",
      link: "https://airbus.com/",
      badges: ["private cloud", "Automation", "RPA"],
      title: "Lead Software Engineer",
      logo: undefined,
      start: "2020",
      end: "2022",
      description:
        "Building automation for complete zero-touch deployment of private cloud. Automation using Camunda and Ansible. Technologies: Java, Camunda, Ansible, fast-api, Python, RPA"
    },
    {
      company: "Huawei",
      link: "https://www.huawei.com",
      badges: ["R&D", "cloud", "opensource", "full-stack"],
      title: "Principal Cloud Engineer",
      logo: undefined,
      start: "2023",
      end: "current",
      description: "R&D projects in public cloud domain. Building full stack opensource projects. Technologies: Java, SaaS, PaaS, TypeScript, ReactJS, spring-boot and spring",
    },
  ],
  skills: [
    "OpenSource",
    "TypeScript",
    "JavaScript",
    "ReactJS",
    "Java",
    "RestAPI",
    "Spring",
    "Python",
    "Full-Stack",
    "Ansible",
    "Terraform",
    "Cloud",
    "CI/CD",
    "DevOps",
    "QA",
    "Automation"
  ],
  projects: [
    {
      title: "eclipse-xpanse",
      techStack: [
        "OpenSource",
        "TypeScript",
        "JavaScript",
        "ReactJS",
        "Java",
        "RestAPI",
        "SpringBoot",
        "Vite"
      ],
      description: "xpanse is here to make native cloud services configurable and portable.",
      logo: undefined,
      link: {
        label: "eclipse-xpanse",
        href: "https://eclipse.dev/xpanse",
      },
    },
    {
      title: "terraform-boot",
      techStack: [
        "OpenSource",
        "Java",
        "OpenAPI",
        "Spring",
        "Terraform"
      ],
      description: "REST Wrapper for Terraform",
      logo: undefined,
      link: {
        label: "terraform-boot",
        href: "https://github.com/eclipse-xpanse/terraform-boot",
      },
    },
    {
      title: "personal website",
      techStack: [
        "OpenSource",
        "TypeScript",
        "Docusaurus",
        "tailwind",
      ],
      description: "Document my learnings",
      logo: undefined,
      link: {
        label: "inprogress-engineer",
        href: "https://www.inprogress-engineer.com/",
      },
    },
    {
      title: "tofu-maker",
      techStack: [
        "OpenSource",
        "Java",
        "OpenAPI",
        "Spring",
        "OpenTofu"
      ],
      description: "REST Wrapper for OpenTofu",
      logo: undefined,
      link: {
        label: "tofu-maker",
        href: "https://github.com/eclipse-xpanse/tofu-maker",
      },
    },
  ],
} as const;
