import React from "react";
import Image from "next/image";
import Container from "../common/ContentContainer";
import Slider from "react-slick";

const testimonies = [
  {
    name: "Oluwadamilola David",
    occupation: "Product Manager",
    image: "/assets/images/testimonials/testimonials-1.jpg",
    content:
      "The word \"Life-changing\" is the perfect word for courses, LearnHit courses are just as wonderful as they claim they are.",
  },
  {
    name: "sarah wilson",
    occupation: "Freelancer",
    image: "/assets/images/testimonials/testimonials-2.jpg",
    content:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
  },
  {
    name: "amanda jepson",
    occupation: "SEO Manager",
    image: "/assets/images/testimonials/testimonials-3.jpg",
    content:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Jimmy Bird",
    occupation: "Web Developer",
    image: "/assets/images/testimonials/testimonials-4.jpg",
    content:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
  },
  {
    name: "william anderson",
    occupation: "UI Designer",
    image: "/assets/images/testimonials/testimonials-5.jpg",
    content:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
  },
];

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  pauseOnHover: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => (
  <Container
    className="bg-gray-100 my-4 shadow-none"
    lightTitle="testimonials"
    title="what are they saying"
  >
    <div className="grid grid-cols-1 my-2">
      <Slider {...settings}>
        {testimonies?.map(({ name, content, image, occupation }) => (
          <section
            key={`${name} ${occupation}`}
            className="bg-white flex flex-col px-8 py-4 rounded-xl shadow-lg w-full md:flex-row md:my-4"
          >
            <div className="p-1 md:px-3 md:w-1/6">
              <Image
                className="rounded-xl shadow-lg"
                height={150}
                width={150}
                src={image}
                alt={name}
              />
            </div>
            <div className="mb-6 p-1 md:mb-12 md:px-3 md:w-5/6 lg:mb-2">
              <h3 className="capitalize font-semibold mt-1 text-gray-600 text-lg tracking-wide md:text-xl">
                {name}
              </h3>
              <p className="capitalize font-semibold italic mb-2 text-sm text-gray-500">
                {occupation}
              </p>
              <div>
                <span className="mr-1 text-secondary-500 text-lg md:text-xl">
                  <i className="fas fa-quote-left" />
                </span>
                <span className="mx-2 text-gray-500 text-sm tracking-wide md:text-base">
                  {content}
                </span>
                <span className="ml-1 text-secondary-500 text-lg md:text-xl">
                  <i className="fas fa-quote-right" />
                </span>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  </Container>
);

export default Testimonials;
