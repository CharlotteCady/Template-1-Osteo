import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialDribbbleOutline } from "react-icons-kit/ionicons/socialDribbbleOutline";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";
import { socialGoogleplusOutline } from "react-icons-kit/ionicons/socialGoogleplusOutline";

import Bouche from "../../assets/image/portfolio/bouche.svg";
import Poumons from "../../assets/image/portfolio/poumons.svg";
import Estomac from "../../assets/image/portfolio/estomac.svg";
import Squelette from "../../assets/image/portfolio/squelette.svg";
import Cerveau from "../../assets/image/portfolio/cerveau.svg";
import Urethra from "../../assets/image/portfolio/urethra.svg";

import BebeImage from "../../assets/image/portfolio/bebe.jpg";
import EnfantImage from "../../assets/image/portfolio/enfant.jpeg";
import EnceinteImage from "../../assets/image/portfolio/enceinte.jpg";
import SportifImage from "../../assets/image/portfolio/sportif.jpeg";
import AdulteImage from "../../assets/image/portfolio/adulte.jpeg";
import SeniorImage from "../../assets/image/portfolio/senior.jpg";

import Step1 from "../../assets/image/portfolio/doctor.svg";
import Step2 from "../../assets/image/portfolio/pain.svg";
import Step3 from "../../assets/image/portfolio/treatment.svg";

import AdultImage from "../../assets/image/portfolio/girl.svg";
import StudentImage from "../../assets/image/portfolio/student.svg";
import TransportImage from "../../assets/image/portfolio/domicile.svg";

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
    label: "QUI SUIS-JE ?",
    path: "#experiences_section",
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
    path: "#skills_section",
    offset: "0"
  }
];

export const AWARDS = [
  {
    awardLogo: Squelette,
    awardName: "L'appareil locomoteur",
    awardDetails:
      "Cervicalgie, torticoli, dorsalgie, douleur intercostale, lumbago, névralgie, entorse, accident musculaire, tendinite, séquelles d'accident, mal de tête d’origine mécanique, etc."
  },
  {
    awardLogo: Cerveau,
    awardName: "Le système nerveux et vasculaire",
    awardDetails:
      "Névralgies, troubles du retour veineux, troubles de l'humeur, prise en charge des maladies neurodégénératives, etc."
  },
  {
    awardLogo: Estomac,
    awardName: "Le système digestif",
    awardDetails:
      "Ballonements, brûlures d'estomac, diarrhée, constipation, régurgitations, nausées, etc."
  },
  {
    awardLogo: Urethra,
    awardName: "Le système génito-urinaire",
    awardDetails:
      "Cystites chroniques, enurésie, prévention des infections urinaires, suivi de la grossesse, règles irrégulières ou douloureuses, etc."
  },
  {
    awardLogo: Bouche,
    awardName: "La bouche et la sphère ORL",
    awardDetails:
      "Otites, acouphènes, rhinites, sinusites, conjonctivites, vertiges fonctionnels, etc."
  },
  {
    awardLogo: Poumons,
    awardName: "Le système respiratoire",
    awardDetails: "Asthme, prévention des bronchites répétitives."
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
    title: "1. L’anamnèse",
    description:
      "Permet de bien cibler la douleur, de connaitre les antécédents  du patient ainsi que ses habitudes de vie"
  },
  {
    image: Step2,
    title: "2. L'examen clinique",
    description:
      "Permet de poser un diagnostic ostéopathique et de trouver avec précision la zone du corps douloureuse et les causes de cette douleur afin d’élaborer un plan de traitement."
  },
  {
    image: Step3,
    title: "3. Le traitement",
    description:
      "Propre à chaque patient, à ses antécédents et à son motif de consultation. J'utilise une grande diversité de techniques, toujours adaptées au patient et non traumatisantes. "
  }
];

export const SERVICE_LIST = [
  {
    title: "Expériences",
    listItems: [
      {
        content: "Ostéopathe au cabinet d'ostéopathie Durand à Nantes - 2017"
      },
      {
        content: "Ostéopathe au cabinet d'ostéopathie Parmentier à Paris - 2015"
      },
      {
        content: "Conférencier au séminaire des ostéopathes de Nantes - 2015"
      },
      {
        content: "Assistant de cours et de clinique - 2013"
      }
    ]
  },
  {
    title: "Formations",
    listItems: [
      {
        content: "Diplôme 1"
      },
      {
        content: "Diplôme 2"
      },
      {
        content: "Formation 1"
      },
      {
        content: "Formation 2"
      },
      {
        content: "Formation 3"
      }
    ]
  }
];

export const SKILLS = [
  {
    title: "60 euros",
    description: "Adultes et enfants",
    icon: AdultImage
  },
  {
    title: "50 euros",
    description: "Étudiants",
    icon: StudentImage
  },
  {
    title: "70 euros",
    description: "À domicile",
    icon: TransportImage
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
      "Excellent ostéopathe, qui connaît parfaitement son métier ! Il a soulagé efficacement une douleur qui me pénalisait depuis plusieurs mois. Encore merci !",
    name: "Philippe"
  },
  {
    image: Reviewer2,
    review:
      "Très satisfaite de cet ostéopathe qui se met toujours à la portée de son patient. Il m'a remarquablement soigné là ou d'autres n'ont pas été aussi efficaces, je le recommande vivement.",
    name: "Juliette"
  },
  {
    image: Reviewer3,
    review:
      "Des mains en or. De la gentillesse, à l écoute. Que demander de plus. A recommander.",
    name: "Christian"
  }
];

export const FOOTER_MENU = [
  {
    label: "Mentions légales",
    path: "#"
  }
];
