import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialDribbbleOutline } from "react-icons-kit/ionicons/socialDribbbleOutline";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";
import { socialGoogleplusOutline } from "react-icons-kit/ionicons/socialGoogleplusOutline";

import Awardee1 from "../../assets/image/portfolio/awardee-1.png";
import Awardee2 from "../../assets/image/portfolio/awardee-2.png";
import Awardee3 from "../../assets/image/portfolio/awardee-3.png";
import Awardee4 from "../../assets/image/portfolio/awardee-4.png";
import AwardImage1 from "../../assets/image/portfolio/award-1.png";
import AwardImage2 from "../../assets/image/portfolio/award-2.png";
import AwardImage3 from "../../assets/image/portfolio/award-3.png";
import AwardImage4 from "../../assets/image/portfolio/award-4.png";

import PortfolioImage1 from "../../assets/image/portfolio/portfolio-1.jpg";
import BebeImage from "../../assets/image/portfolio/bebe.jpg";
import EnfantImage from "../../assets/image/portfolio/enfant.jpeg";
import EnceinteImage from "../../assets/image/portfolio/enceinte.jpg";
import SportifImage from "../../assets/image/portfolio/sportif.jpeg";
import AdulteImage from "../../assets/image/portfolio/adulte.jpeg";
import SeniorImage from "../../assets/image/portfolio/senior.jpg";

import Step1 from "../../assets/image/portfolio/step-1.png";
import Step2 from "../../assets/image/portfolio/step-2.png";
import Step3 from "../../assets/image/portfolio/step-3.png";

import SkillIcon1 from "../../assets/image/portfolio/skill-1.svg";
import SkillIcon2 from "../../assets/image/portfolio/skill-2.svg";
import SkillIcon3 from "../../assets/image/portfolio/skill-3.svg";
import SkillIcon4 from "../../assets/image/portfolio/skill-4.svg";

import Client1 from "../../assets/image/portfolio/client-1.png";
import Client2 from "../../assets/image/portfolio/client-2.png";
import Client3 from "../../assets/image/portfolio/client-3.png";
import Client4 from "../../assets/image/portfolio/client-4.png";
import Client5 from "../../assets/image/portfolio/client-5.png";
import Client6 from "../../assets/image/portfolio/client-6.png";

import Reviewer1 from "../../assets/image/portfolio/client-avatar-1.jpg";
import Reviewer2 from "../../assets/image/portfolio/client-avatar-2.jpg";
import Reviewer3 from "../../assets/image/portfolio/client-avatar-3.jpg";

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: "#"
  },
  {
    icon: socialFacebook,
    url: "#"
  },
  {
    icon: socialGoogleplusOutline,
    url: "#"
  }
];

export const MENU_ITEMS = [
  {
    label: "ACCUEIL",
    path: "#banner_section",
    offset: "0"
  },
  {
    label: "C'EST POUR QUI ?",
    path: "#portfolio_section",
    offset: "0"
  },
  {
    label: "QUAND CONSULTER ?",
    path: "#awards_section",
    offset: "0"
  },
  {
    label: "DEROULEMENT",
    path: "#process_section",
    offset: "0"
  },
  {
    label: "TARIFS",
    path: "#process_section",
    offset: "0"
  },
  {
    label: "AVIS",
    path: "#process_section",
    offset: "0"
  }
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: "Free Software Advice",
    awardDetails: "Top Rated App Development Companies USA",
    awardeeLogo: Awardee1,
    awardeeName: "Awardee",
    date: "The Jury 2018"
  },
  {
    awardLogo: AwardImage2,
    awardName: "Free Software Advice",
    awardDetails: "Top Rated App Development Companies USA",
    awardeeLogo: Awardee2,
    awardeeName: "Awardee",
    date: "The Jury 2018"
  },
  {
    awardLogo: AwardImage3,
    awardName: "Free Software Advice",
    awardDetails: "Top Rated App Development Companies USA",
    awardeeLogo: Awardee3,
    awardeeName: "Awardee",
    date: "The Jury 2018"
  },
  {
    awardLogo: AwardImage4,
    awardName: "Free Software Advice",
    awardDetails: "Top Rated App Development Companies USA",
    awardeeLogo: Awardee4,
    awardeeName: "Awardee",
    date: "The Jury 2018"
  }
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: "BÉBÉS",
    portfolioItem: [
      {
        title: "L'ostéopathie chez le bébé",
        description:
          "Le but d’une consultation ostéopathique chez le nouveau-né et le bébé est de rétablir un équilibre physique parfois perturbé lors de la vie intra-utérine ou de l’accouchement.",
        image: BebeImage,
        // link: "#",
        // featuredIn: "AWWWARDS",
        // featuredLink: "#",
        // view: "4.5K",
        // love: "1.5K",
        // feedback: "1.2K",
        buildWith: [
          {
            content: "Pleurs inexpliqués"
          },
          {
            content: "Difficulté d’endormissement"
          },
          {
            content: "Difficulté à rester couché sur le dos"
          },
          {
            content: "Difficulté à l’allaitement"
          },
          {
            content: "Colique"
          },
          {
            content: "Reflux"
          }
        ]
      }
    ]
  },
  {
    title: "ENFANTS",
    portfolioItem: [
      {
        title: "L'ostéopathie chez l'enfant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend aliquet dui, eget ultricies orci volutpat ac. Quisque vitae velit eget lorem consequat vehicula posuere venenatis nulla.",
        image: EnfantImage,
        // link: "#",
        // featuredIn: "AWWWARDS",
        // featuredLink: "#",
        // view: "4.5K",
        // love: "1.5K",
        // feedback: "1.2K",
        buildWith: [
          {
            content: "Douleurs de dos"
          },
          {
            content: "Scoliose"
          },
          {
            content: "Chutes"
          },
          {
            content: "Douleurs liées à la croissance"
          },
          {
            content: "Fatigue physique"
          },
          {
            content: "Fatigue émotionnelle"
          }
        ]
      }
    ]
  },
  {
    title: "FEMMES ENCEINTES",
    portfolioItem: [
      {
        title: "L'ostéopathie pendant la grossesse",
        description:
          "Le but du travail de l’ostéopathe est d’équilibrer les changements morphologiques et toutes leurs conséquences viscérales, articulaires et fonctionnelles. Les techniques utilisées sont douces et adaptées à la patiente.",
        image: EnceinteImage,
        // link: "#",
        // featuredIn: "AWWWARDS",
        // featuredLink: "#",
        // view: "4.5K",
        // love: "1.5K",
        // feedback: "1.2K",
        buildWith: [
          {
            content: "Douleur thoracique"
          },
          {
            content: "Douleur costale"
          },
          {
            content: "Lombalgie"
          },
          {
            content: "Sciatique"
          },
          {
            content: "Douleurs du ventre"
          },
          {
            content: "Nausées"
          },
          {
            content: "Reflux"
          }
        ]
      }
    ]
  },
  {
    title: "ADULTES",
    portfolioItem: [
      {
        title: "L'ostéopathie chez l'adulte",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend aliquet dui, eget ultricies orci volutpat ac. Quisque vitae velit eget lorem consequat vehicula posuere venenatis nulla.",
        image: AdulteImage,
        // link: "#",
        // featuredIn: "AWWWARDS",
        // featuredLink: "#",
        // view: "4.5K",
        // love: "1.5K",
        // feedback: "1.2K",
        buildWith: [
          {
            content: "Troubles du sommeil"
          },
          {
            content: "Baisse de la concentration"
          },
          {
            content: "Stress"
          },
          {
            content: "Mauvaise posture"
          },
          {
            content: "Mal de dos"
          },
          {
            content: "Douleurs articulaires"
          }
        ]
      }
    ]
  },
  {
    title: "SPORTIFS",
    portfolioItem: [
      {
        title: "L'ostéopathie chez le sportif",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend aliquet dui, eget ultricies orci volutpat ac. Quisque vitae velit eget lorem consequat vehicula posuere venenatis nulla.",
        image: SportifImage,
        // link: "#",
        // featuredIn: "AWWWARDS",
        // featuredLink: "#",
        // view: "4.5K",
        // love: "1.5K",
        // feedback: "1.2K",
        buildWith: [
          {
            content: "Entorse"
          },
          {
            content: "Fracture"
          },
          {
            content: "Luxation"
          },
          {
            content: "Tendinite"
          },
          {
            content: "Douleurs musculaires"
          },
          {
            content: "Chute ou traumatisme"
          },
          {
            content: "Amélioration des performances"
          },
          {
            content: "Récupération physique"
          }
        ]
      }
    ]
  },
  {
    title: "SENIORS",
    portfolioItem: [
      {
        title: "L'ostéopathie chez les seniors",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend aliquet dui, eget ultricies orci volutpat ac. Quisque vitae velit eget lorem consequat vehicula posuere venenatis nulla.",
        image: SeniorImage,
        // link: "#",
        // featuredIn: "AWWWARDS",
        // featuredLink: "#",
        // view: "4.5K",
        // love: "1.5K",
        // feedback: "1.2K",
        buildWith: [
          {
            content: "Raideurs"
          },
          {
            content: "Rhumatismes"
          },
          {
            content: "Arthrose"
          }
        ]
      }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: "1. Research",
    description:
      "We work with you to understand user’s stories and validate your idea with real users using lean design sprints."
  },
  {
    image: Step2,
    title: "2. Design",
    description:
      "Expanding on the insights gained, you’ll work closely with our design team to create an elegant design"
  },
  {
    image: Step3,
    title: "3. Build",
    description:
      "With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you "
  }
];

export const SERVICE_LIST = [
  {
    title: "UI/UX Design",
    listItems: [
      {
        content: "Design Sprints"
      },
      {
        content: "User Research"
      },
      {
        content: "Visual Design"
      },
      {
        content: "Mobile App Design"
      },
      {
        content: "Tracking & Learning"
      },
      {
        content: "Building Traction"
      }
    ]
  },
  {
    title: "Web Development",
    listItems: [
      {
        content: "ReactJS"
      },
      {
        content: "AngularJS"
      },
      {
        content: "ASP.NET MVC"
      },
      {
        content: "WordPress"
      },
      {
        content: "NodeJS"
      },
      {
        content: "GO"
      }
    ]
  },
  {
    title: "Mobile App Development",
    listItems: [
      {
        content: "iOS"
      },
      {
        content: "Android"
      },
      {
        content: "React Native"
      },
      {
        content: "Ionic & Apache Cordova"
      },
      {
        content: "NodeJS"
      },
      {
        content: "3D & VR"
      }
    ]
  }
];

export const SKILLS = [
  {
    title: "Graphic Design",
    description:
      "Aristotle maintained the sharp distinction between science and the practical",
    icon: SkillIcon1,
    successRate: "90"
  },
  {
    title: "UI/UX Design",
    description:
      "Aristotle maintained the sharp distinction between science and the practical",
    icon: SkillIcon2,
    successRate: "85"
  },
  {
    title: "Web Application",
    description:
      "Aristotle maintained the sharp distinction between science and the practical",
    icon: SkillIcon3,
    successRate: "80"
  },
  {
    title: "Mobile Application",
    description:
      "Aristotle maintained the sharp distinction between science and the practical",
    icon: SkillIcon4,
    successRate: "70"
  }
];

export const CLIENTS = [
  {
    image: Client1,
    title: "Microsoft"
  },
  {
    image: Client2,
    title: "Airbnb"
  },
  {
    image: Client3,
    title: "Adidas"
  },
  {
    image: Client4,
    title: "IBM"
  },
  {
    image: Client5,
    title: "Amazon"
  },
  {
    image: Client6,
    title: "Google"
  }
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      "Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.",
    name: "Thomas Cruz",
    designation: "Founder & CEO",
    twitterProfile: "https://twitter.com/redqinc",
    organization: "@Tonquin",
    organizationURL: "https://redq.io/"
  },
  {
    image: Reviewer2,
    review:
      "Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.",
    name: "Marhta Robson",
    designation: "Co-Founder & CTO",
    twitterProfile: "https://twitter.com/redqinc",
    organization: "@Tonquin",
    organizationURL: "https://redq.io/"
  },
  {
    image: Reviewer3,
    review:
      "Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.",
    name: "Dexter Patterson",
    designation: "Co-Founder & COO",
    twitterProfile: "https://twitter.com/redqinc",
    organization: "@Tonquin",
    organizationURL: "https://redq.io/"
  }
];

export const FOOTER_MENU = [
  {
    label: "Contact",
    path: "#"
  },
  {
    label: "Privacy",
    path: "#"
  },
  {
    label: "Cookie Policy",
    path: "#"
  }
];
