import React from "react";
import "./portfolio.css";
import board from "../../assets/board.png";
import tomato from "../../assets/tomato.png";
import weather from "../../assets/weather.jpeg";
import {
  BiLogoPython,
  BiLogoDjango,
  BiLogoFlask,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoPostgresql,
  BiLogoHeroku,
} from "react-icons/bi";

const data = [
  {
    id: 1,
    title: " TomatoBox Inventory Management WebApp",
    image: tomato,
    kind: "Fullstack",
    technology: [
      <BiLogoPython />,
      <BiLogoDjango />,
      <BiLogoHtml5 />,
      <BiLogoCss3 />,
      <BiLogoJavascript />,
      <BiLogoBootstrap />,
      <BiLogoReact />,
      <BiLogoPostgresql />,
    ],
    description:
      "A fullstack solution tailored for intermediaries, simplifying the tracking of transaction boxes, from customer registration to transaction recording, borrowed box tracking, and damaged box management. Developed with Django for the robust backend RestAPI and React with Bootstrap for the responsive frontend. ",
    github: "https://github.com/Barbara-Bennett/tomato-box",
    demo: "https://tomato-box-fddde14a4e67.herokuapp.com/",
  },
  {
    id: 2,
    title: "Inspiration board",
    image: board,
    kind: "Fullstack",
    technology: [
      <BiLogoPython />,
      <BiLogoFlask />,
      <BiLogoHtml5 />,
      <BiLogoCss3 />,
      <BiLogoJavascript />,
      <BiLogoReact />,
      <BiLogoPostgresql />,
      <BiLogoHeroku />,
    ],
    description:
      "The Inspiration Board project is a fullstack dynamic application that fosters inspiration by allowing diverse users to curate boards with motivational themes and share uplifting quotes. The backend, powered by a RESTful API crafted with Python and Flask, integrates with the frontend developed using HTML, CSS, JavaScript, and React. The project ensures secure and efficient data storage by leveraging the robust PostgreSQL database. The culmination of these technologies and frameworks is hosted on Heroku.",
    github: "https://github.com/Barbara-Bennett/fullstack-inspiration-board",
    demo: "https://inspiration--board-bd6c80601d83.herokuapp.com/",
  },
  {
    id: 3,
    title: "Weather Report",
    image: weather,
    kind: "Frontend",
    technology: [<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />],
    description:
      "A group project that uses JavaScript, CSS, and Axios to fetch real-time weather data from OpenWeather's API to provide essential weather information such as temperature, sky conditions, and city names and allows users to customize their experience. Users can personalize their weather view with features like temperature adjustment, city renaming, and a sky-type dropdown.",
    github: "https://github.com/Barbara-Bennett/weather-report",
  },
  // {
  //   id: 4,
  //   title: "Portfolio",
  //   image: "",
  //   kind: "Frontend",
  //   technology: [
  //     <BiLogoHtml5 />,
  //     <BiLogoCss3 />,
  //     <BiLogoJavascript />,
  //     <BiLogoReact />,
  //   ],
  //   description:
  //     "A dynamic and interactive portfolio showcasing a diverse collection of my coding projects. Meticulously crafted using HTML, CSS, and React, the frontend offers a seamless and engaging user experience. Leveraging the power of JavaScript, the portfolio features smooth transitions and a responsive design for optimal viewing on various devices.",
  //   github: "https://github.com/Barbara-Bennett/portfolio",
  // },
];

export default data;
