import ListContainer from "./ListContainer";
import { COURSE_CREATOR_PAGE_URL, PUBLISHER_PAGE_URL, WEBINARS_PAGE_URL } from "@/config";

const links = [
	{ href: COURSE_CREATOR_PAGE_URL, title: "Become a Course Creator", caps: true },
	{ href: PUBLISHER_PAGE_URL, title: "Become a Publisher", caps: true },
	{ href: WEBINARS_PAGE_URL, title: "training webinars" },
	{ href: "#", title: "LearnHit for business", caps: true}
]

const More = () => <ListContainer head="More" links={links} />

export default More;