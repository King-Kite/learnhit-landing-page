import Link from "next/link";
import { useRouter } from "next/router";
import { DASHBOARD_URL, LOGIN_PAGE_URL, SIGNUP_PAGE_URL } from "../../config";

const buttonStyle =
	"border capitalize cursor-pointer mx-1 p-2 rounded text-base sm:p-3 sm:py-2 md:font-semibold md:text-lg";
	
const GuestLinks = () => {
	const router = useRouter();

	return (
		<>
			<div>
				<Link href={SIGNUP_PAGE_URL}>
					<a
						className={`
									${
										router.pathname === SIGNUP_PAGE_URL
											? "bg-primary-500 border-primary-500 text-gray-100"
											: "border-primary-500 text-primary-500"
									}
									hover:border-primary-500 hover:bg-primary-500 
									hover:text-gray-100 ${buttonStyle}`}
					>
						Signup
					</a>
				</Link>
			</div>
		</>
	);
}	

export default GuestLinks;
