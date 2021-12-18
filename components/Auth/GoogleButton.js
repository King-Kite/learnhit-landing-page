import { useCallback, useContext } from "react";
import GoogleLogin from "react-google-login";
import { GOOGLE_CLIENT_ID } from "@/config";
import { GlobalContext } from "@/store/providers";
import socialLoginAccount from "@/store/actions/auth/socialLoginAccount";

const iconStyle =
    "duration-500 mx-2 my-3 py-3 rounded-full text-gray-100 transition-all transform md:py-3";

const Button = ({ loading, setMessage, setType }) => {

    const { registerDispatch } = useContext(GlobalContext);

    const onSuccess = useCallback((response) => {
        if (response.accessToken !== null && response.accessToken !== undefined && response.tokenId !== null && response.tokenId !== undefined) {
            socialLoginAccount({
                accessToken: response?.accessToken,
                platform: "google",
                tokenId: response?.tokenId,
                onSuccess: (message) => {
                    // setMessage(message);
                    setMessage("User Registered Successfully")
                    setType("success");
                }
            })(registerDispatch)
        }
    }, [setMessage, setType, registerDispatch])

    const onFail = useCallback((response) => {
        setMessage(response?.error || "An error occurred",);
        setType("danger");
    }, [setMessage, setType])

    return (
        <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            render={renderProps => (
                <button
                    onClick={renderProps.onClick}
                    disabled={loading || renderProps.disabled}
                    className={`${iconStyle} ${loading || renderProps.disabled ? "bg-gray-700 cursor-not-allowed" : "bg-red-600 cursor-pointer hover:scale-105  hover:bg-red-500 hover:-translate-y-2"} pl-3 pr-4`}
                >
                    <i className="fab fa-google-plus-g" />
                </button>
            )}
            onSuccess={onSuccess}
            onFailure={onFail}
            cookiePolicy={"single_host_origin"}
        />
    )
}

export default Button;