import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Daily Pulse",
        description: "News aggregation platform with trending articles and premium user experience.",
        image: "/images/Project1.png",
        tag: ["React", "Node.js", "Express.js", "MongoDB"],
        git:"https://github.com/Shakhawat-pro/Daily-Pulse-client",
        live: "https://daily-pulse-c3dcf.web.app/",
        list: [
            'Subscription Plans: Free and premium features with subscription navigation.',
            'Statistics: Total users, normal users, premium users with animated counters.',
            'AdAdmin Dashboard: Manage users, articles, publishers with dynamic charts.'

        ]
    },
    {
        id: 2,
        title: "Handy Helper",
        description: "Explore Asia is a travel app showcasing top destinations across Asia",
        image: "/images/Project2.png",
        tag: ["React", "Node.js", "Express.js", "MongoDB"],
        git: 'https://github.com/Shakhawat-pro/Handy-helper-client',
        live: 'https://exploreasia-48971.web.app/',
        list: [
            'Service Listings: Explore a variety of services available.',
            'User Authentication: Sign up, log in, and personalize favorites.',
            'Booking System: Schedule services conveniently online.'

        ]
    },
    {
        id: 3,
        title: "Explore Asia",
        description: "Discover and explore Asian tourist spots with Explore Asia today",
        image: "/images/Project3.png",
        tag: ["React", "Node.js", "Express.js", "MongoDB"],
        git: 'https://github.com/Shakhawat-pro/Daily-Pulse-client',
        live: 'https://daily-pulse-c3dcf.web.app/',
        list: [
            'Search Functionality: Search spots by country or keyword.',
            'User Authentication: Sign up, log in, and personalize favorites.',
            'Booking System: Schedule services conveniently online.'
        ]
    }
];

const ProjectSection = () => {
    return (
        <div className='mt-32'>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">      My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        live={project.live}
                        git={project.git}
                        list={project.list}
                        tag={project.tag}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProjectSection;