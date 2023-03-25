import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Business Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Front End Developer (React.js)",
      company_name: "Hiklub",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Collaborating side by side with UX/UI re-designing aspects of the application to enhance user experience and CTR.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Skills: Redux.js · Scrum · Full-Stack Development · Engineering · Back-End Web Development · Object-Oriented Programming (OOP) · Web Development · TypeScript · Express.js · Teamwork · MongoDB · Bootstrap · Front-End Development · HTML · Git · HTML5 · JavaScript · React.js · Node.js · material.ui · scss · Cascading Style Sheets (CSS) · Jira · Figma (Software) · Responsive Web Design · GitHub · Linux"
      ],
    },
    {
      title: "Full Stack Developer (React.js)",
      company_name: "IMentor - Ironhack",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2022 - June 2022",
      points: [
        "IMentor is a project developed in React and its ecosystem to help students of our Bootcamp to get in touch with senior students and help each other in this challenging journey to become a software developer.",
        "Developed responsive web application from scratch within one & a half week using React, Node JS, Express, handlebars & Axios.io.",
        "Acknowledged to be one of the top 2 projects out of 10 teams by a panel of 5 judges.",
        "Skills: Full-Stack Development · Engineering · Back-End Web Development · Object-Oriented Programming (OOP) · Web Development · Express.js · Teamwork · MongoDB · Front-End Development · HTML · Git.",
      ],
    },
    {
      title: "Backend Developer (Node.js & Express.js)",
      company_name: "IronFeeds - Ironhack",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2022 - May 2022",
      points: [
        "IronFeeds is a CRUD API backend project where users have to sign up to be able to get into the app, after that, we allow our users to create their own articles based on their favorite categories, such as: general, business, entertainment, health, science, and sports. Besides, the users have their own profiles to add their own articles.",
        "To develop this project we've used Javascript ES6, MongoDB, Express, Handlebars, HTML, CSS, and external news API to fetch the required news.",
        "Skills: Full-Stack Development · Engineering · Back-End Web Development · Object-Oriented Programming (OOP) · Web Development · Express.js · Teamwork · MongoDB · Front-End Development · HTML · Git",
      ],
    },
    {
      title: "Javascript Developer (Vanilla Javascript)",
      company_name: "GameJSpolitics - Ironhack",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2022 - April 2022",
      points: [
        "A web-based game where Spanish corrupt politics are splashed once they want to get out of the parliament, a Whac-A-Mole type of game with a twisted narrative and anarchist feeling. ",
        "For this project, I've used technologies such as Javascript ES6, Canva, GIMP (Adobe Photoshop), HTML, and CSS.",
        "Skills: Full-Stack Development · Engineering · Back-End Web Development · Object-Oriented Programming (OOP) · Web Development · Express.js · Teamwork · MongoDB · Front-End Development · HTML · Git.",
      ],
    },
    {
      title: "Founder & CEO",
      company_name: "Optimzon",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2019 - April 2022",
      points: [
        "B2B Business focused on increasing up to 15% conversion rate and improving user experience while buying on Amazon.- Optimization of product listings on Amazon by implementing Amazon's SEO growing total revenue by up to 8000$ in some cases. - B2B Business focused on increasing up to 15% conversion rate and improving user experience while buying on Amazon.",
        "Optimization of product listings on Amazon by implementing Amazon's SEO growing total revenue by up to 8000$ in some cases.",
        "Skills: Engineering · Web Development · Teamwork · Search Engine Optimization (SEO) · E-commerce SEO · Start-ups Management · Business Strategy",
      ],
    },
    {
      title: "Founder & CEO",
      company_name: "Namste Luxuries (E-commerce)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2017 - September 2019",
      points: [
        "E-commerce with more than 230 authentic designs based on genuine designs printed on clothes and accessories for women.",
        "Deployed a fully functional platform using Shopify, Etsy, and Printful.",
        "Grossing up to 1000$ a month.",
        "Skills: Web Development · Graphic Design · Teamwork · E-Commerce.",
      ],
    },
    {
      title: "Founder & CEO",
      company_name: "Sharegames (Tech Startup)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 2014 - January 2017",
      points: [
        "One of the most important projects I've been involved in. ",
        "Start-up business based on our own algorithm integrated into a completely new platform. The purpose was to exchange videogames between users, leaving aside the monetary factor. ",
        "4.300 active users on the platform and completing 3 seeding rounds up to 200.000€.",
        "Skills: Engineering · Web Development · Teamwork · Startup Development · Software Development · JavaScript",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };