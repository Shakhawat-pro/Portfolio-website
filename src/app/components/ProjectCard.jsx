import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, git, tag, live, list }) => {
    return (
        <div className="relative group">
            <div className="relative h-52 md:h-72 rounded-t-xl overflow-hidden">
                <Image
                    src={imgUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                />
               <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <a
                        href={live} target='_blank'
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 flex items-center justify-center"
                    >
                        <IoEyeOutline className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
                    </a>
                    <a
                        href={git} target='_blank'
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
                    >
                        <FaCode className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
                    </a>
                </div>
            </div>
            <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
                <h5 className="font-lg font-semibold">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tag.map((tagItem, index) => (
                        <span key={index} className="px-2 py-1 border-2 rounded-3xl text-sm text-gray-200">{tagItem}</span>
                    ))}
                </div>
                <h1 className='font-bold mt-3'>Features</h1>
                <ul className='list-disc ml-11 text-[#ADB7BE]'>
                    <li>{list[0]}</li>
                    <li>{list[1]}</li>
                    <li>{list[2]}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
