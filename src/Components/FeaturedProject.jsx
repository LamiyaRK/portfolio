import React from 'react';
import ProjectCard from './ProjectCard';

const FeaturedProject = () => {
    const projectsData = [
  {
    id: 1,
    name: "Relicrader",
    image: "artifact",
    technologies: ["React", "MongoDB", "Firebase", "ExpressJS","JWT Auth","Framer Motion","Tailwind CSS"],
    description: "A digital archive where users can add, edit, delete, and favorite historical artifacts. Designed to showcase culturally significant items with image previews, detailed descriptions, and name-based filtering for an immersive exploration experience.",
    liveLink: "https://artifact-f6d00.web.app/",
    githubLink: "https://github.com/LamiyaRK/artifact-client",
    challenges: [
      "Implementing secure JWT authentication for user management",
      "Building efficient name-based filtering that queries the backend dynamically",
      "Integrating and customizing multiple types of carousels for smooth artifact browsing"
    ],
    improvements: [
      "Add a filter by name feature",
      "Implement user-submitted artifacts (with moderation)",
      "Add like features to posts",
    ]
  },
  {
    id: 2,
    name: "Verdantia",
    image: "garden",
     technologies: ["React", "MongoDB", "Firebase", "ExpressJS","Tailwind CSS"],
    description: "A vibrant platform where gardeners can add, update, and share their planting tips. Users can browse community-submitted advice, stay updated with the latest gardening insights, and engage with helpful content organized by difficutly type.",
    liveLink: "https://garden-825e1.web.app/",
    githubLink: "https://github.com/LamiyaRK/garden-client",
    challenges: [
      "Implementing full CRUD operations using MongoDB for seamless data management",
      "Building advanced filtering based on tip difficulty levels",
      "Designing an intuitive and clean UI to engage gardening enthusiasts"
    ],
    improvements: [
      "Enable update operations for user-submitted tips to keep content fresh",
      "Implement private routes to protect user-specific actions and profiles",
      "Add “like” functionality to encourage community engagement and highlight popular tips"
    ]
  },
  {
    id: 3,
    name: "Billencia",
    image: "bill",
     technologies: ["React", "Firebase","Tailwind CSS"],
    description: "A portfolio management tool where developers can add, edit, or delete skills, projects, and experiences through a protected dashboard.",
    liveLink: "https://billing-system-1101a.web.app/",
    githubLink: "https://github.com/LamiyaRK/Billing",
    challenges: [
      "Setting up and managing authentication using Firebase",
      "Implementing private routes to restrict access based on login state",
      "Managing global state efficiently with React Context API"
    ],
    improvements: [
      "Add the ability to mark payments as completed and track payment history",
      "Enable user profile updates for personalized billing experiences",
      "Implement accurate total balance calculations across all bills and payments"
    ]
  }
];



    return (
        <div >
        <h1 className='text-4xl text-[#019d91]  text-center font-bold mt-[80px]'>Featured Projects</h1>
        {
            projectsData.map(project=> <ProjectCard data={project}></ProjectCard>)
        }
           
          
        </div>
    );
};

export default FeaturedProject;