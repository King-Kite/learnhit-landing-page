import { EMAIL_RECONFIRMATION_URL } from "../../../../config";

const confirmEmail = async (request, response) => {
	if (request.method === "POST") {
		const { email } = request.body

		if (email === null && email === undefined) {
			return response.status(400).json({
				error: "email is required"
			})
		}

		try {
			const apiRes = await fetch(EMAIL_RECONFIRMATION_URL, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email })
			})

			const data = await apiRes.json()

			if (apiRes.status === 200) {
				return response.status(200).json({
					success: data?.detail || data?.data || "email verification sent"
				})
			} else {
				return response.status(apiRes.status).json({
					error: data?.error || "something went wrong trying to send the verification link"
				})
			}
		} catch (error) {
			return response.status(500).json({
				error: error.response ? error.response.data : "something went wrong"
			})
		}

	} else {
		return response.status(405).json({
			error: `Method ${request.method} not allowed`
		})
	}
}

export default confirmEmail;