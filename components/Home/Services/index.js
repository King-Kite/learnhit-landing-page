import Link from "next/link";
import { ABOUT_PAGE_URL } from "../../../config";
import FadeInSection from "../../common/FadeInSection";
import useFadeInOnView from "../../../hooks/useFadeInOnView";
import Service from "./Service";

const services = [
  {
    icon: "user-shield",
    title: "trusted learning",
    content: "We provide you with the appropriate knowledge and information on time.",
  },
  {
    icon: "book",
    title: "quality courses",
    content: "We provide professional and quality courses that will empower you to reach your goal.",
  },
  {
    icon: "globe",
    title: "worldwide",
    content: "We are everywhere, anywhere you go.",
  },
  {
    icon: "user-secret",
    title: "learner confidentiality",
    content: "We keep our learner's information private and confidential.",
  },
  {
    icon: "certificate",
    title: "certificate",
    content: "We award you with a certificate of completion at the end of our course.",
  },
  {
    icon: "question-circle",
    title: "assignments",
    content: "We give you tasks to complete at the end of each lesson.",
  },
  {
    icon: "phone-alt",
    title: "phone support",
    content: "You can reach us via your mobile devices and phones.",
  },
  {
    icon: "envelope",
    title: "email support",
    content: "You can contact us via our email services",
  },
];

const Services = () => (
  <FadeInSection duration={1000} persist>
    <div className="container mx-auto">
      <div className="flex flex-col items-center m-3 lg:flex-row lg:items-start">
        <section className="bg-primary-500 p-6 rounded-lg lg:h-full lg:mr-3 lg:w-1/3">
          <h1 className="font-semibold leading-8 my-2 text-2xl text-gray-100 tracking-wide md:leading-10 md:my-3 md:text-3xl">
            Why Choose LearnHit?
          </h1>
          <p className="my-6 text-gray-100 text-sm text-left md:text-base">
           We are committed to providing professional courses that will empower you to reach your goals.
           With LearnHit, you can learn from experts, gaining a competitive edge in the world.
          </p>
          <Link href={ABOUT_PAGE_URL}>
            <a className="bg-secondary-500 inline-block my-1 px-3 py-3 rounded-sm text-gray-100 text-sm hover:bg-secondary-400 sm:text-base">
              Learn More...
            </a>
          </Link>
        </section>
        <section className="gap-4 grid grid-cols-1 my-5 md:grid-cols-2 lg:my-0 lg:w-2/3">
          {services?.map(({ title, ...props }) => (
            <Service key={title} title={title} {...props} />
          ))}
        </section>
      </div>
    </div>
  </FadeInSection>
);

export default Services;
