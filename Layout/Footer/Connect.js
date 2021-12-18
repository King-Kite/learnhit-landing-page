import { 
	CONTACT_PAGE_URL,
	FAQ_PAGE_URL,
	LEARNHIT_SOCIAL_FACEBOOK,
	LEARNHIT_SOCIAL_INSTAGRAM,
	LEARNHIT_SOCIAL_LINKEDIN,
	LEARNHIT_SOCIAL_TIKTOK,
	LEARNHIT_SOCIAL_YOUTUBE
} from "@/config";
import ListContainer from "./ListContainer";

const links = [
	{ href: FAQ_PAGE_URL, title: "FAQ", caps: true },
	{ href: LEARNHIT_SOCIAL_FACEBOOK, title: "facebook" },
	{ href: LEARNHIT_SOCIAL_LINKEDIN, title: "LinkedIn", caps: true },
	{ href: LEARNHIT_SOCIAL_INSTAGRAM, title: "instagram" },
	{ href: LEARNHIT_SOCIAL_TIKTOK, title: "tiktok" },
	{ href: LEARNHIT_SOCIAL_YOUTUBE, title: "YouTube", caps: true },
	{ href: CONTACT_PAGE_URL, title: "customer support" },
]

const Connect = () => <ListContainer head="Connect" links={links} />

export default Connect;