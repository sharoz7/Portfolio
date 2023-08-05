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
    fc,
    hdfc,
    tfs,
    intellipaat,
    java,
    selenium,
    testng,
    sql,
    maven,
    project1,
    project2,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Automation Test Engineer",
      icon: mobile,
    },
    {
      title: "Technical Consultant",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name :"Java",
      icon : java,
    },
    {
      name :"Selenium",
      icon : selenium,
    },
    {
      name :"TestNG",
      icon : testng,
    },
    {
      name :"Maven",
      icon : maven,
    },
    {
      name :"SQL",
      icon : sql,
    }

  ];
  
  const experiences = [
    {
      title: "Associate Manager and Team Lead",
      company_name: " Future Communications",
      icon: fc,
      iconBg: "#000",
      date: "Oct 2017 - Oct 2019",
      points: [
        "Lead and supervise the sales and customer support team, providing guidance, coaching, and support to team members.",
        "Set clear performance goals and KPIs for the team and individuals, regularly monitoring and evaluating their progress.",
        "Collaborate with other departments to optimize customer support processes and enhance customer experience.",
        "Analyze sales and customer support data to identify trends, areas for improvement, and opportunities for growth.",
        "Conduct regular performance reviews and provide constructive feedback to team members.",
      ],
    },
    {
      title: "Sales Development Manager",
      company_name: "HDFC Life pvt ltd",
      icon: hdfc,
      iconBg: "#fff",
      date: "Oct 2019 - July 2020",
      points: [
        "Provide training and coaching to new and existing team members on insurance products, sales techniques, and company policies.",
        "Conduct regular sales meetings with the team to review progress and implement sales strategies.",
        "Build strong relationships with clients and policyholders to enhance customer loyalty and retention.",
        "Utilize market insights to develop effective sales strategies, promotional campaigns, and product positioning that can give HDFC Life a competitive edge in the market.",
      ],
    },
    {
      title: "Customer Support Representative",
      company_name: "[24]7.ai",
      icon: tfs,
      iconBg: "#000",
      date: "Jun 2021 - Feb 2022",
      points: [
        "Utilize advanced AI-driven tools and customer data to personalize interactions and create tailored solutions for each customer's needs.",
        "Master the art of providing seamless support across multiple channels, including voice, chat, email, and social media, ensuring a consistent and exceptional customer experience.",
        "Be empowered to make independent decisions and go above and beyond standard procedures to surprise and delight customers, turning them into brand advocates.",
        "Collaborate with industry experts and thought leaders, participating in workshops and conferences to stay at the forefront of customer experience innovation.",
      ],
    },
    {
      title: "Technical Consultant",
      company_name: "Intellipaat",
      icon: intellipaat,
      iconBg: "#fff",
      date: "Aug 2022 - Aug 2023",
      points: [
        "To work with various technologies and facilitate a consistent and organized flow of information during projects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Demonstrate expertise in Selenium test automation using Java, creating robust and maintainable test scripts that cover various aspects of e-learning course functionality.",
        "Customize and personalize e-learning courses using full-stack development techniques, tailoring content and exercises to cater to individual learner needs and preferences.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've never met an individual with a creative mind who cares about their client's succcess like Sharoz does ",
      name: "Mohammed Waseem",
      designation: "CEO",
      company: "Hello Errors",
     
    },
    {
      testimonial:
        "I must say that Sharoz is multi talented as he possess experiecnce in different domains yet didn't lose the sparkle of the tech",
      name: "Syed Abdul Aleem",
      designation: "Data Analyst",
      company: "Imperio Hospitality pvt ltd",
     
    },
    {
      testimonial:
        "Sharoz is very hard working, dedicated and passionate about the work he does, that's what makes him unique",
      name: "Rizwan Pochi",
      designation: "Software Developer Engineer",
      company: "Rakuten",
      
    },
  ];
  
  const projects = [
    {
      name: "Testing Website using Selenium WebDriver",
      description:
        "In this project, we worked on the various aspects of automating scenarios using Actions class, TestNG, and Maven integration with extent reports. We deployed the automation of various tasks such as testing various frames, functionalities, and widgets on the webpage. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Maven",
          color: "white-text-gradient",
        },
        {
          name: "TestNG",
          color: "green-text-gradient",
        },
        {
          name: "Selenium",
          color: "pink-text-gradient",
        },

       
      ],
      image: project1,
      source_code_link: "https://github.com/sharoz7/AutomationSelenium",
    },
    {
      name: "Testing an eCommerce Site with Selenium",
      description:
        "In this Selenium project, we developed the Page Object Model framework and used it for buying a product on Flipkart. We tested the site for a search query like iPhone with the specific phone memory size requirement. The product was to be added to the cart, ensuring that shipping would be done to the entered address, and the site should proceed to the checkout page.",
      tags: [
        {
          name: "Selenium",
          color: "blue-text-gradient",
        },
        {
          name: "Maven",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
        {
          name: "POM",
          color: "white-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/sharoz7/Testing-an-eCommerce-Site-with-Selenium",
    },
 
  ];
  
  export { services, technologies, experiences, testimonials, projects };