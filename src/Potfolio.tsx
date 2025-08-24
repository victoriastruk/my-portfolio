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
      title: "Fullstack App 1",
      desc: "MERN + Auth + Deployment",
      img: "/images/1.png",
      demo: "#",
      code: "#",
    },
    {
      title: "Fullstack App 2",
      desc: "Next.js + Prisma + PostgreSQL",
      img: "/images/2.png",
      demo: "#",
      code: "#",
    },
  ],
  frontend: [
    {
      title: "Landing Page",
      desc: "Tailwind + Animations",
      img: "/images/3.png",
      demo: "#",
      code: "#",
    },
    {
      title: "Dashboard UI",
      desc: "React + Chart.js",
      img: "/images/front2.png",
      demo: "#",
      code: "#",
    },
  ],
  backend: [
    {
      title: "REST API",
      desc: "Express + MongoDB",
      img: "/images/back1.png",
      demo: "#",
      code: "#",
    },
    {
      title: "GraphQL API",
      desc: "Apollo + PostgreSQL",
      img: "/images/back2.png",
      demo: "#",
      code: "#",
    },
  ],
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
                  <p className="text-gray-600 mb-4">{p.desc}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    className="px-4 py-2 rounded bg-blue-600 text-white text-sm"
                  >
                    Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    className="px-4 py-2 rounded border border-gray-300 text-sm"
                  >
                    GitHub
                  </a>
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
