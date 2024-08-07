import CatsNCheese from "../assets/projects/cats-n-cheese.png";
import FootballTeamDashboard from "../assets/projects/football-team-dashboard.png";
import CountriesApi from "../assets/projects/countries-api.png";
import ClipboardLandingPage from "../assets/projects/clipboard-landing-page.png";
import AdviceGenerator from "../assets/projects/advice-generator.png";
import HuddleLandingPage from "../assets/projects/huddle-landing-page.png";
import InteractiveRatingComponent from "../assets/projects/interactive-rating-component.png";
import NewsletterSignUpForm from "../assets/projects/newsletter-sign-up-form-with-success-messege.png";
import RecipePage from "../assets/projects/recipe-page.jpg";

const ProjectsInfo = [
  {
    name: "Cats-N-Cheese",
    image: CatsNCheese,
    stack: ["React", "Tailwind"],
    liveUrl: "https://cats-n-cheese.vercel.app/",
    githubUrl: "https://github.com/sylfort/cats-n-cheese",
    featured: true,
    description: `Cats-N-Cheese is a single-player game where players act as mice stealing cheese from cats, it's all about strategy and fun!`,
  },
  {
    name: "Football Team Dashboard",
    image: FootballTeamDashboard,
    stack: ["React", "Tailwind", "PHP", "MySQL"],
    liveUrl: "https://football-team-dashboard.vercel.app/",
    githubUrl: "https://github.com/iamzaidmohammed/football-team-dashboard",
    featured: true,
    description: `This project is a web application that allows users to view and manage their football team. The data is stored in a MySQL database using PHP and is displayed using React and Tailwind.`,
  },
  {
    name: "Countries API",
    image: CountriesApi,
    stack: ["React", "CSS", "API"],
    liveUrl: "https://countries-api-snowy-pi.vercel.app",
    githubUrl: "https://github.com/iamzaidmohammed/countries-api",
    featured: true,
    description: `Countries API is a web application that allows users to search for countries by name, region, or subregion. The data is fetched from an external API. Users can also view country details and flags.`,
  },
  {
    name: "Advice Generator",
    image: AdviceGenerator,
    stack: ["React", "Tailwind", "API"],
    liveUrl: "https://advice-generator-lake.vercel.app/",
    githubUrl: "https://github.com/iamzaidmohammed/advice-generator",
    featured: true,
    description: `Advice Generator is a web application that generates random advice. The data is fetched from an external API. The advice is displayed using React and Tailwind.`,
  },
  {
    name: "Interactive Rating Component",
    image: InteractiveRatingComponent,
    stack: ["HTML", "CSS", "JS"],
    liveUrl: "https://interactive-rating-component-chi-one.vercel.app/",
    githubUrl: "https://github.com/iamzaidmohammed/Interative-Rating-Component",
    featured: false,
    description: `Interactive Rating Component is a simple web app where users rate a product.`,
  },
  {
    name: "Newsletter Sign Up Form with Success Message",
    image: NewsletterSignUpForm,
    stack: ["HTML", "CSS", "JS"],
    liveUrl:
      "https://newsletter-sign-up-form-with-success-message-henna.vercel.app/",
    githubUrl:
      "https://github.com/iamzaidmohammed/Newsletter-sign-up-form-with-success-message",
    featured: false,
    description: `This project is a web application that allows users to sign up for newsletter.`,
  },
  {
    name: "Clipboard Landing Page",
    image: ClipboardLandingPage,
    stack: ["HTML", "CSS"],
    liveUrl: "https://clipboard-landing-page-alpha-six.vercel.app/",
    githubUrl: "https://github.com/iamzaidmohammed/clipboard-landing-page",
    featured: false,
    description: `Clipboard Landing Page is a landing page for a hypothetical mobile app.`,
  },
  {
    name: "Huddle Landing Page",
    image: HuddleLandingPage,
    stack: ["HTML", "CSS"],
    liveUrl: "https://huddle-landing-page-psi-pink.vercel.app/",
    githubUrl: "https://github.com/iamzaidmohammed/huddle-landing-page",
    featured: false,
    description: `Huddle Landing Page is a landing page for a hypothetical social media platform.`,
  },
  {
    name: "Recipe Page",
    image: RecipePage,
    stack: ["HTML", "CSS"],
    liveUrl: "https://recipe-page-mocha-one.vercel.app/",
    githubUrl: "https://github.com/iamzaidmohammed/recipe-page",
    featured: false,
    description: `Recipe Page is a website that shows a recipe for a dish.`,
  },
];

export default ProjectsInfo;
