import cookie from "cookie";
import {
	ACCESS_TOKEN,
	LOGIN_URL,
	NODE_ENV,
	REFRESH_TOKEN,
	SOCIAL_GOOGLE_LOGIN_URL,
} from "@/config";

const googleLogin = async (request, response) => {
	if (request.method === "POST") {
		const { accessToken, tokenId } = request.body;

		if (accessToken === null || accessToken === undefined) {
			return response.status(400).json({
				error: "Access token is required",
			});
		}

		if (tokenId === null || tokenId === undefined) {
			return response.status(400).json({
				error: "Token ID is required",
			})
		}

		try {
			const apiRes = await fetch(SOCIAL_GOOGLE_LOGIN_URL, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ access_token: accessToken, id_token: tokenId }),
			});

			const data = await apiRes.json();

			if (apiRes.status === 200) {
				response.setHeader("Set-Cookie", [
					cookie.serialize(ACCESS_TOKEN, data.access_token, {
						httpOnly: true,
						maxAge: 60 * 60 * 6,
						path: "/",
						sameSite: "strict",
						secure: NODE_ENV !== "development",
					}),
					cookie.serialize(REFRESH_TOKEN, data.refresh_token, {
						httpOnly: true,
						maxAge: 60 * 60 * 24,
						path: "/",
						sameSite: "strict",
						secure: NODE_ENV !== "development",
					}),
				]);

				return response
					.status(200)
					.json({ success: "Signed Up Successfully!" });
			} else {
				return response.status(apiRes.status).json({
					error: data?.detail || data?.error || "server error",
				});
			}
		} catch (error) {
			return response.status(500).json({
				error: error?.message || "a server error occurred",
			});
		}
	} else {
		response.setHeader("Allow", ["POST"]);
		return response.status(405).json({
			error: `Method ${request.method} not allowed`,
		});
	}
};

export default googleLogin