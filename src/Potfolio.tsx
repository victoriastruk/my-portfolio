import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Project = {
  title: string;
  desc: string;
  img: string;
  demo: string;
  code: string;
};

const projects: Record<string, Project[]> = {
  fullstack: [
    {
      title: "Squadhelp",
      desc: `Building an online platform for running creative contests and auctions. Customers
post contests for company names, slogans, or logos with a prize pool. Participants
submit proposals, and moderators review the quality of the entries.

Tech stack: React, Redux Toolkit, Node.js, Express, PostgreSQL, MongoDB,
WebSockets, SASS, Docker`,
      img: "/images/squahelp.png",
      demo: "",
      code: "https://github.com/victoriastruk/toolkit-exam-project-2025-01",
    },
    {
      title: "Boarding School Website",
      desc: `Developed and deployed a full-stack web application for an educational institution.
The main functionality focused on content management for publishing school
documents and events. The institution actively uses the website.

Tech stack: React, Express, PostgreSQL, Node.js, SCSS, JWT.`,
      img: "/images/school.png",
      demo: "https://training-manager-fullstack.vercel.app/",
      code: "",
    },
    {
      title: "Training Manager Fullstack App",
      desc: `Backend: Node.js + Express.js + Sequelize (PostgreSQL) + dotenv + Sequelize CLI (migrations & seeders) + Mocha / Chai / Supertest (tests)
        
      Frontend: React + React Router + Axios + HTML / CSS / JS`,
      img: "/images/3.png",
      demo: "https://training-manager-fullstack.vercel.app/",
      code: "https://github.com/victoriastruk/training-manager-fullstack",
    },
    {
      title: "A fullstack application for managing phones",
      desc: "A portfolio project to demonstrate CRUD operations, REST API, Sequelize associations, Express.js routing, and a React client.",
      img: "/images/1.png",
      demo: "https://fullstack-phones.vercel.app",
      code: "https://github.com/victoriastruk/fullstack-phones",
    },
  ],
  frontend: [
    {
      title: "Animated signup section",
      desc: "The section demonstrates a smooth transition from a signup form to course cards using HTML, CSS, and a bit of JavaScript. ",
      img: "/images/animation.gif",
      demo: "https://victoriastruk.github.io/animated-signup-section/",
      code: "https://github.com/victoriastruk/animated-signup-section",
    },
    {
      title: "How It Works Page",
      desc: "Vite + React + SASS + CSS Modules + Flexbox",
      img: "/images/2.png",
      demo: "https://atom-chi-ten.vercel.app/",
      code: "https://github.com/victoriastruk/atom",
    },
    {
      title: "Teamflow",
      desc: "HTML + CSS",
      img: "/images/front5.png",
      demo: "https://victoriastruk.github.io/teamflow/",
      code: "https://github.com/victoriastruk/teamflow",
    },
    {
      title: "Shop",
      desc: "HTML + CSS",
      img: "/images/front6.png",
      demo: "https://victoriastruk.github.io/shop-collusion/",
      code: "https://github.com/victoriastruk/shop-collusion",
    },
    {
      title: "Smart Space",
      desc: "HTML + CSS + JAVASCRIPT",
      img: "/images/front7.png",
      demo: "https://victoriastruk.github.io/smartSpace/",
      code: "https://github.com/victoriastruk/smartSpace",
    },
    {
      title: "Todo App",
      desc: "Vite + React + classnames + SASS + Lucide Icons",
      img: "/images/front4.png",
      demo: "https://victoriastruk.github.io/react-todo/",
      code: "https://github.com/victoriastruk/react-todo",
    },
    {
      title: "Work With Forms",
      desc: "React.js + Formik + yup + react-router-dom@6 + classnames + SASS",
      img: "/images/front1.png",
      demo: "https://victoriastruk.github.io/auth-ui-formik/signup",
      code: "https://github.com/victoriastruk/auth-ui-formik",
    },
    {
      title: "Landing",
      desc: "HTML + CSS + JAVASCRIPT",
      img: "/images/front3.png",
      demo: "https://victoriastruk.github.io/mashup/",
      code: "https://github.com/victoriastruk/mashup",
    },
  ],
  // backend: [
  //   {
  //     title: "REST API",
  //     desc: "Express + MongoDB",
  //     img: "/images/back1.png",
  //     demo: "#",
  //     code: "#",
  //   },
  //   {
  //     title: "GraphQL API",
  //     desc: "Apollo + PostgreSQL",
  //     img: "/images/back2.png",
  //     demo: "#",
  //     code: "#",
  //   },
  // ],
  components: [
    {
      title: "User Card Component",
      desc: "A React component that displays user information passed via props, with conditional styling based on gender.",
      img: "/images/component1.png",
      demo: "https://l58f3s.csb.app/",
      code: "https://github.com/victoriastruk/user-card-props",
    },
    {
      title: "Calendar Widget",
      desc: "A React-based calendar widget component with customizable date selection and responsive design.",
      img: "/images/comp2.png",
      demo: "https://x6xmxy.csb.app/",
      code: "https://github.com/victoriastruk/calendar-widget",
    },
    {
      title: "Weather Widget with API",
      desc: "A React component that displays current weather information with the ability to switch between temperature and wind speed units. ",
      img: "/images/comp3.png",
      demo: "https://hfnp37.csb.app/",
      code: "https://github.com/victoriastruk/weather-widget-api",
    },
    {
      title: "Users List",
      desc: "A React component that renders a list of user cards from provided data with a fallback placeholder when user images fail to load.",
      img: "/images/comp4.png",
      demo: "https://2f3hnz.csb.app/",
      code: "https://github.com/victoriastruk/users-list-fallback",
    },
    {
      title: "Todo App With Redux Toolkit",
      desc: "React + Redux Toolkit + Formik + Yup + classnames + SASS + API",
      img: "/images/comp5.png",
      demo: "https://6n4r83-5173.csb.app/",
      code: "https://github.com/victoriastruk/todo-with-redux-toolkit",
    },
    {
      title: "Responsive Image Carousel",
      desc: "A fully responsive image carousel built with react-slick.",
      img: "/images/comp6.png",
      demo: "https://sn45l6-3000.csb.app/",
      code: "https://github.com/victoriastruk/responsive-react-carusel",
    },
    {
      title: "Cookie Pop-Up",
      desc: "A simple React cookie consent pop-up component.",
      img: "/images/comp7.png",
      demo: "https://qst85r-3000.csb.app/",
      code: "https://github.com/victoriastruk/cookie-pop-up",
    },
    {
      title: "My repos",
      desc: "A React app that fetches and displays a user’s public GitHub repositories with loading states and links to repository homepages. Responsive design with custom styling and API integration. ",
      img: "/images/comp8.png",
      demo: "https://jp67f9-3000.csb.app/",
      code: "https://github.com/victoriastruk/my-repos",
    },
    {
      title: "Users Card",
      desc: "A responsive and flexible user card component built with React for displaying user profiles in a clean, adaptable layout.",
      img: "/images/comp9.png",
      demo: "https://victoriastruk.github.io/flex-user-card/",
      code: "https://github.com/victoriastruk/flex-user-card",
    },
    {
      title: "Contact Form",
      desc: "A clean, semantic HTML form built with vanilla HTML, CSS, and JavaScript.",
      img: "/images/comp10.png",
      demo: "https://victoriastruk.github.io/html-form/",
      code: "https://github.com/victoriastruk/html-form",
    },
    {
      title: "Todo App",
      desc: "HTML + CSS + JAVASCRIPT",
      img: "/images/comp11.png",
      demo: "https://victoriastruk.github.io/js-dom-toDoList/",
      code: "https://github.com/victoriastruk/js-dom-toDoList",
    },
  ],
};

// Кастомні стрілки для Slick
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700"
      onClick={onClick}
    >
      &#8592;
    </div>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700"
      onClick={onClick}
    >
      &#8594;
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("fullstack");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        My Portfolio
      </h2>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {Object.keys(projects).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 cursor-pointer rounded-xl font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <Slider {...settings}>
        {projects[activeTab].map((p, i) => (
          <div key={i} className="p-4">
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row h-150">
              {/* Контент зліва */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {p.desc}
                  </p>
                </div>
                <div className="flex gap-3">
                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-blue-600 text-white text-sm"
                    >
                      Demo
                    </a>
                  )}

                  {p.code && p.code !== "#" && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded border border-gray-300 text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Скріншот справа */}
              <div className="flex-3 flex justify-center items-center bg-gray-900">
                <img
                  src={p.img}
                  alt={p.title}
                  className="max-h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
