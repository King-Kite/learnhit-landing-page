import { ABOUT_LEARNIT_COURSES_PAGE_URL, GO_PREMIUM_PAGE_URL, PRICING_PAGE_URL } from "@/config";
import ListContainer from "./ListContainer";

const links = [
	{ href: "/download", title: "Get the App" },
	{ href: ABOUT_LEARNIT_COURSES_PAGE_URL, title: "About LearnHit Courses", caps:true },
	{ href: "/about", title: "testimonials" },
	{ href: GO_PREMIUM_PAGE_URL, title: "go premium" },
	{ href: PRICING_PAGE_URL, title: "pricing" },
]

const Learning = () => <ListContainer head="Learning" links={links} />

export default Learning;