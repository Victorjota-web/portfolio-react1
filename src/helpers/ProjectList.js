import img1 from "../assets/img1.jpeg"

import proj2 from "../assets/projeto2.jpg"

export const ProjectList = [
    {
        name: "Login Screen",
        image: img1,
        skills: "MongoDB, ExpressJS, Node",
        link: "",
        description: "This simple project implements a login screen using MongoDB, ExpressJS, and Node. It provides secure authentication with access to a backend API, which interacts directly with the MongoDB database to store and retrieve user information efficiently."
    },
    {
        name: "Pizza Website",
        image: proj2,
        skills: "ReactJS",
        link: "https://pizza-website-tawny-seven.vercel.app/",
        description: "This is a responsive pizza ordering website built with React, featuring sections like Home, Menu, About, and Contact. It doesn't integrate with a backend but serves as a solid project for practicing React Hooks and other core React concepts."
    },
    {
        name: "Wheater Website",
        image: img1,
        skills: "ReactJS ",
        link: "",
        description: "A simple and responsive weather forecasting website built with React, leveraging APIs to provide real-time weather data. It allows users to easily check the weather conditions, including temperature, humidity, and forecasts for multiple locations, all in an intuitive and user-friendly interface."
    }
]
