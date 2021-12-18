import { NEXT_NEWSLETTER_SUBSCRIPTION_URL } from "@/config";

const subscribeEmail = async (email, callback) => {

	try {
		const response = await fetch(NEXT_NEWSLETTER_SUBSCRIPTION_URL, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email })
		})

		const data = await response.json()

		if (response.status === 201) {
			callback(data?.success || "Subscribed Successfully", "success")
		} else {
			callback(data?.error || "An error occured", "danger")
		}
	} catch (error) {
		callback(error?.message || "An error occured", "danger")
	}

}

export default subscribeEmail;