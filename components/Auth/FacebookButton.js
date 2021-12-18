import { useCallback, useContext } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FACEBOOK_CLIENT_ID } from "@/config";
import { GlobalContext } from "@/store/providers";
import socialLoginAccount from "@/store/actions/auth/socialLoginAccount";

const iconStyle =
    "duration-500 mx-2 my-3 py-3 rounded-full text-gray-100 transition-all transform md:py-3";

const Button = ({ loading, setMessage, setType }) => {

    const { registerDispatch } = useContext(GlobalContext);

    const onResponse = useCallback((response) => {
        console.log(response)
    }, [])

    // const onSuccess = useCallback((response) => {
    //     if (response.accessToken !== null && response.accessToken !== undefined && response.tokenId !== null && response.tokenId !== undefined) {
    //         socialLoginAccount({
    //             accessToken: response?.accessToken,
    //             platform: "facebook",
    //             tokenId: response?.tokenId,
    //             onSuccess: (message) => {
    //                 // setMessage(message);
    //                 setMessage("User Registered Successfully")
    //                 setType("success");
    //             }
    //         })(registerDispatch)
    //     }
    // }, [setMessage, setType, registerDispatch])

    // const onFail = useCallback((response) => {
    //     setMessage(response?.error || "An error occurred",);
    //     setType("danger");
    // }, [setMessage, setType])

    return (
        <FacebookLogin
            appId={FACEBOOK_CLIENT_ID}
            autoLoad
            callback={onResponse}
            render={renderProps => (
                <button
                    onClick={renderProps.onClick}
                    disabled={loading || renderProps.isDisabled}
                    className={`${iconStyle} ${loading || renderProps.isDisabled ? "bg-gray-700 cursor-not-allowed" : "bg-blue-600 cursor-pointer hover:scale-105 hover:bg-blue-500 hover:-translate-y-2"} px-5`}
                >
                    <i className="fab fa-facebook-f" />
                </button>
            )}
        />
    )
}

export default Button;