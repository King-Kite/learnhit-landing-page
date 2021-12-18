import React from "react";
import Link from "next/link";
import { CATEGORIES_DETAIL_PAGE_URL } from "@/config";
import Container from "../common/ContentContainer";
import FadeInSection from "../common/FadeInSection";

const containerStyle = `
	bg-gray-100 border border-opacity-50 border-primary-500 cursor-pointer duration-1000 
	flex items-center p-3 text-primary-500 transform transition-opacity transition-colors
	hover:bg-white hover:border-opacity-100 hover:text-secondary-500
`;


const Categories = ({ categories }) => (
  <Container lightTitle="categories" title=" ">
    <FadeInSection className="w-full" duration={1000} persist>
      <div className="gap-3 grid grid-cols-1 px-3 w-full sm:my-0 md:grid-cols-2 lg:gap-6 lg:grid-cols-3">
        {categories?.map(({ title, slug }) => (
          <Link key={slug} href={CATEGORIES_DETAIL_PAGE_URL(slug)}>
            <a key={title} className={containerStyle}>
              <p className="capitalize font-semibold mx-2 text-sm sm:text-base lg:text-lg">
                {title}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </FadeInSection>
  </Container>
);

export default Categories;
