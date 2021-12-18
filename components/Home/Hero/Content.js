import React from "react";
import { SIGNUP_PAGE_URL } from "../../../config";
import Link from "next/link";

const buttonStyle =
  "bg-primary-500 capitalize cursor-pointer ml-1 px-5 py-4 rounded-md text-xl hover:bg-primary-300 hover:text-secondary-500 md:text-2xl";
const containerStyle =
  "mx-auto relative text-gray-200 top-20 w-3/4 md:top-28 lg:top-20 sm:w-5/6";

const Content = () => (
  <section className={containerStyle}>
    <h1 className="capitalize font-bold mb-8 text-3xl sm:text-4xl md:mb-10 md:text-5xl lg:mb-12 lg:text-6xl">
      Hit Your Learning Target
    </h1>
    <p className="leading-8 max-w-3xl mb-12 mx-1 text-sm md:text-base lg:text-lg tracking-wide sm:leading-10 sm:text-xl md:leading-normal md:text-2xl lg:mb-16">
      Scale up your career and empower yourself with relevant knowledge
    </p>
    <span className={buttonStyle}>
      <Link href={SIGNUP_PAGE_URL}>get started</Link>
    </span>
  </section>
);

export default Content;
