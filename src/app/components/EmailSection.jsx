"use client";
import React, { useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            from_name: e.target.email.value,
            to_name: e.target.subject.value,
            message: e.target.message.value,
        };

        const serviceId = 'service_2ia84f8';
        const templateId = 'template_4uw99n2';
        const Public = '0mjh5HU5tvmHvZFGU';

        console.log(e.target);

        emailjs
            .sendForm(serviceId, templateId, e.target, {
                publicKey: Public,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setEmailSubmitted(true);
                },
                (error) => {
                    console.log(error);
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"    >
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2 text-white text-4xl">
                    <a href="https://github.com/Shakhawat-pro" target="_blank">
                        <FaGithubSquare />
                    </a>
                    <a href="https://www.linkedin.com/in/mdshakhawat/" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EmailSection;