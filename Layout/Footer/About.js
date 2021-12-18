import {
	ABOUT_PAGE_URL,
	BLOG_PAGE_URL,
	HOW_IT_WORKS_PAGE_URL
} from "@/config";
import ListContainer from "./ListContainer";

const links = [
	{ href: ABOUT_PAGE_URL, title: "our story" },
	{ href: "#", title: "events" },
	{ href: HOW_IT_WORKS_PAGE_URL, title: "How LearnHit Works", caps: true },
	{ href: BLOG_PAGE_URL, title: "blog" },
	{ href: "#", title: "Terms of Service", caps: true },
	{ href: "#", title: "privacy policy" },
]

const About = () => <ListContainer head="About" links={links} />

export default About;