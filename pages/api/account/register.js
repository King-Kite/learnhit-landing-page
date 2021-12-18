import { REGISTER_URL } from "../../../config";

const register = async (request, response) => {
  if (request.method === "POST") {
    const { first_name, last_name, middle_name, email, password1, password2 } = request.body;

    const body = JSON.stringify({
      first_name,
      last_name,
      middle_name,
      email,
      password1,
      password2,
    });

    try {
      const apiRes = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 201) {
        return response.status(201).json({ detail: data.detail });
      } else {
        return response.status(apiRes.status).json({ ...data });
      }
    } catch (error) {
      return response.status(500).json({
        error: error.response
          ? error.response.data
          : "Something went wrong when registering for an account!",
      });
    }
  } else {
    response.setHeader("Allow", ["POST"]);
    return response
      .status(405)
      .json({ error: `Method ${request.method} not allowed` });
  }
};

export default register;
