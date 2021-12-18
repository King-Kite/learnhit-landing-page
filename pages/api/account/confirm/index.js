import { EMAIL_CONFIRMATION_URL } from "../../../../config";

const confirmEmail = async (request, response) => {
	if (request.method === "POST") {
		const { key } = request.body;

		if (key === null || key === undefined) {
			return response.status(400).json({
				error: "verification key is required"
			})
		}

		try {
			const url  = EMAIL_CONFIRMATION_URL(String(key));
			const apiRes = await fetch(url, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				}
			});

			const data = await apiRes.json();

			if (apiRes.status === 200) {
				return response.status(200).json({
					success:
						data?.detail ||
						data?.data ||
						"email verified successfully",
				});
			} else {
				return response.status(apiRes.status).json({
					error: data?.detail || data?.error || "something went wrong when trying to verify your account",
				});
			}
		} catch (error) {
			return response.status(500).json({
				error: error.response
					? error.response.data
					: "something went wrong when trying to verify your email address",
			});
		}
	} else {
		return response.status(405).json({
			error: `Method ${request.method} not allowed`,
		});
	}
};

export default confirmEmail;
