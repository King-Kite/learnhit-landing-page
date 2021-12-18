import React from "react";
import Link from "next/link";
import { ABOUT_PAGE_URL, LEARNHIT_SOCIAL_YOUTUBE } from "../../config";
import { useRouter } from "next/router";
import Container from "../common/ContentContainer";
import useFadeInOnView from "../../hooks/useFadeInOnView";

const imageContainerStyle = "flex h-full justify-center rounded-lg w-full lg:pr-5 lg:w-1/2";

const About = () => {
    const router = useRouter();

    return (
        <Container className="overflow-x-hidden py-0">
            <div className={imageContainerStyle}>
                <section className="relative h-full w-full ">
                    <iframe 
                        allowFullScreen={true}
                        className="h-full w-full"
                        frameBorder="0"
                        src={LEARNHIT_SOCIAL_YOUTUBE}
                    >
                    </iframe>
                </section>
            </div>
            <section className="my-3 p-2 w-full sm:mx-1 md:my-0 lg:w-1/2 lg:max-w-xl lg:mx-auto">
                <h2 className="font-semibold mx-2 my-3 text-gray-700 text-lg md:mt-0 md:text-xl lg:text-2xl">
                    LearnHit is a promising step forward in the digital learning Industry
                </h2>
                <p className="mb-2 mx-2 text-gray-600 text-left text-sm md:text-base">
                    We believe that a course can change lives and we strive to achieve our goal of making
                    knowledge available to everyone every day..
                </p>
                <ul>
                    <li className="flex items-center mx-2 my-3 text-gray-600">
                        <i className="far fa-check-circle mr-2 text-sm text-primary-500 md:text-base lg:text-lg" />
                        <span className="text-base">
                            Providing professional courses that will help individuals gain a competitive edge in the world
                        </span>
                    </li>
                    <li className="flex items-center mx-2 my-3 text-gray-600">
                        <i className="far fa-check-circle mr-2 text-sm text-primary-500 md:text-base lg:text-lg" />
                        <span className="text-base">
                            Catering to all career levels by providing courses that even professionals can learn from.
                        </span>
                    </li>
                    <li className="flex items-center mx-2 my-3 text-gray-600">
                        <i className="far fa-check-circle mr-2 text-sm text-primary-500 md:text-base lg:text-lg" />
                        <span className="text-base">
                            Pioneering new and effective methods of online learning that are less costly and easily accessible.
                        </span>
                    </li>
                </ul>
                <p className="text-gray-600 mb-4 m-2 text-sm md:text-base">
                    There are over a hundred courses available on LearnHit at this time, bringing to you the knowledge
                    to empower yourself in a way that is both accessible and relevant.
                </p>
                {router.pathname !== ABOUT_PAGE_URL && (
                    <Link href={ABOUT_PAGE_URL}>
                        <a className="bg-primary-500 inline-block m-2 px-3 py-3 rounded-sm text-gray-100 text-base hover:bg-primary-300 md:text-lg">
                            Learn More...
                        </a>
                    </Link>
                )}
            </section>
        </Container>
    );
};

export default About;
