'use client'
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 flex gap-16">
                <div>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </div>
                <div>
                    <li>Java Script</li>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>Firebase</li>
                </div>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li><span className='text-[#ADB7BE]'>2022 - Present</span> <br />
                    Computer Science & Technology (CST) <br />
                    <span className='text-[#ADB7BE]'>Daffodil Polytechnic Institute</span></li>

            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li><span className='text-[#ADB7BE]'>January, 2024 - July, 2024</span> <br />
                    Complete Web Development Course <br />
                    <a href='https://drive.google.com/file/d/1L_8ePTSw2ttXZIAoocLJc9okYjScXV35/view?usp=sharing' target='_blank' className='text-[#A855F7] font-bold underline'>View Certificate</a>
                </li>
                <li><span className='text-[#ADB7BE]'>2024 </span> <br />
                    Communication Secrets <br />
                    <a href='https://drive.google.com/file/d/1HOmsGALzxMBObegQjy6iQ7NMtW4VRcJW/view?usp=sharing' target='_blank' className='text-[#A855F7] font-bold underline'>View Certificate</a>
                </li>
            </ul>
        ),
    },
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white w-11/12 mx-auto mt-40'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                <div style={{ position: 'relative', width: '100%', height: '500px' }}> {/* Adjust height as needed */}
                    <Image
                        src="/images/about-image.png"
                        alt="about img"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className=''>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white texxt-base md:text-lg">
                        I am a front-end developer dedicated to crafting dynamic web experiences with HTML, CSS, Tailwind CSS, JavaScript, and React. I am also expanding my expertise to full-stack development, learning back-end technologies like Node.js, Express.js, and MongoDB. Proficient in version control with Git and GitHub, I specialize in responsive design, RESTful APIs, and Firebase authentication. My goal is to deliver high-quality, innovative web solutions tailored to meet project needs.</p>
                    <div className="flex flex-row justify-start mt-8 ">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8 ml-11">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>

            </div>
        </section >
    );
};

export default AboutSection;