import { EMAIL_CONFIRMATION_PAGE_URL, SIGNUP_PAGE_URL, PASSWORD_RESET_PAGE_URL } from "../../config";
import GoogleLogin from "./GoogleButton";
import CustomLink from "./Link";
import Button from "../common/Button";
import Input from "../common/Input";

const iconStyle =
    "cursor-pointer duration-500 mx-2 my-3 py-3 rounded-full text-gray-100 transition-all transform hover:scale-105 hover:-translate-y-2 md:py-3";

const Login = ({ error, errors, form, loading, onChange, onSubmit }) => (
    <div className="container mx-auto">
        <section className="bg-white max-w-lg mx-auto py-5">
            <h3 className="font-semibold mb-3 mt-6 text-2xl text-center text-primary-500 md:text-3xl">
                Login
            </h3>
            <div className="flex justify-center">
                <div className="inline-flex items-center justify-center text-xl w-1/3 md:text-2xl">
                    <div>
                       <GoogleLogin loading={loading} />
                    </div>
                    <div
                        className={`${iconStyle} bg-blue-600 px-5 hover:bg-blue-500`}
                    >
                        <i className="fab fa-facebook-f" />
                    </div>
                </div>
            </div>
            <p className="my-1 text-sm text-center text-gray-400 tracking-wide sm:text-base">
                or use email and password:
            </p>
            <form className="my-2 px-2 md:px-5" onSubmit={onSubmit}>
                <div className="m-2 my-6">
                    <Input
                        disabled={loading}
                        error={errors.email || error?.email || ""}
                        icon="envelope"
                        label="email"
                        name="email"
                        onChange={onChange}
                        placeholder="Enter your email"
                        required={true}
                        type="email"
                        value={form.email || ""}
                    />
                </div>
                <div className="m-2 my-6">
                    <Input
                        disabled={loading}
                        error={errors.password || error?.password || ""}
                        icon="lock"
                        label="password"
                        name="password"
                        onChange={onChange}
                        placeholder="Enter your password"
                        required={true}
                        type="password"
                        value={form.password || ""}
                    />
                </div>
                <div className="mb-2 mt-8 mx-3">
                    <Button
                        background="primary"
                        className="px-4 py-3 w-full"
                        caps
                        disabled={loading}
                        loader
                        loading={loading}
                        rounded="lg"
                        title={loading ? "Authenticating..." : "Login"}
                        type="submit"
                    />
                </div>
                <div className="text-center w-full">
                    <CustomLink
                        href={PASSWORD_RESET_PAGE_URL}
                        name="forgot password?"
                    />
                </div>
                <div className="px-2 text-center w-full">
                    <CustomLink
                        href={EMAIL_CONFIRMATION_PAGE_URL}
                        name="verify account"
                        title="account not verified?"
                    />
                </div>
                <div className="mb-2 px-2 text-center w-full">
                    <CustomLink
                        href={SIGNUP_PAGE_URL}
                        name="sign up here"
                        title="don't have an account?"
                    />
                </div>
            </form>
        </section>
    </div>
);

export default Login;
