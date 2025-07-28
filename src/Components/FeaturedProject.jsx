import React, { use } from 'react';
import ProjectCard from './ProjectCard';
import { ScrollContext } from './ScrollContext';
import { motion } from 'framer-motion';
const FeaturedProject = () => {
    const projectsData = [
      {
  id: 1,
  name: "Earnify",
  image1: "/earnify/arti.png",
  image: "earnify",
  technologies: [
    "React", 
    "MongoDB", 
    "ExpressJS", 
    "Firebase Auth", 
    "JWT Auth", 
    "Stripe", 
    "aos",
    "Tailwind CSS", 
   
    "imgBB"
  ],
  description: "A micro-tasking and earning platform with role-based dashboards for Workers, Buyers, and Admins. Users can create tasks, submit work, earn coins, and withdraw money. Buyers can manage tasks, pay workers, and admins oversee all platform activities.",
  liveLink: "https://microjob-126da.web.app/", 
  githubLink: "https://github.com/LamiyaRK/earnify-client",  
  challenges: [
    "Implementing secure role-based authorization using Firebase & JWT middleware",
    "Designing a dynamic coin-based payment and withdrawal logic",
    "Building notification systems and task-review workflows with real-time status updates",
    "Integrating Stripe for purchasing coins and handling business logic for platform earnings"
  ],
  improvements: [
    "Add filtering options for task status, category, and coin range",
    "Integrate email notifications for task approvals, rejections, and withdrawals",
    "Improve admin panel with advanced analytics and search",
    "Add pagination and search functionality to all list-based pages"
  ]
}
,
  {
    id: 2,
    name: "Relicrader",
    image1:"/artifact/arti.png",
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
    id: 3,
    name: "Verdantia",
    image1:"/garden/arti.png",
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
 
];
const {Projects}=use(ScrollContext)


    return (
        <div >
         <motion.h1
  ref={Projects}
  initial={{ opacity: 0, y: -50, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  viewport={{ once: true }}
  id="Projects"
  className="text-5xl text-[#66FCF1] mb-5 text-center font-bold mt-[120px]"
  loop
>
  Featured Projects
</motion.h1>
        {
            projectsData.map(project=> <ProjectCard data={project}></ProjectCard>)
        }
           
          
        </div>
    );
};

export default FeaturedProject;