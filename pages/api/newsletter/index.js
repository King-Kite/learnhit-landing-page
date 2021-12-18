import { NEWSLETTER_SUBSCRIPTION_URL } from "@/config";

const newsletter = async (request, response) => {
	if (request.method === "POST") {

		const { email } = request.body;

		if (email === null || email === undefined) {
			return response.status(400).json({
				error: "E-mail Address is required",
			})
		}

		try {	
			const apiRes = await fetch(NEWSLETTER_SUBSCRIPTION_URL, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email })
			})

			const data = await apiRes.json()

			if (apiRes.status === 201) {
				return response.status(201).json({
					success: "Subscribed Successfully"
				})
			} else {
				return response.status(apiRes.status).json({
					error: data?.email || data?.detail || data?.error || "A server error occured"
				})
			}
		} catch (error) {
			return response.status(500).json({
				error: error?.message || "A server error occured"
			})
		}

	} else {
		return response.status(405).json({
			error: `Method ${request.method} not allowed`
		})
	}
}

export default newsletter