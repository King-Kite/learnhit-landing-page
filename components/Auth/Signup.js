import FacebookLogin from "./FacebookButton";
import GoogleLogin from "./GoogleButton";
import CustomLink from "./Link";
import { LOGIN_PAGE_URL } from "../../config";
import Button from "../common/Button";
import Input from "../common/Input";

const iconStyle =
    "cursor-pointer duration-500 fex justify-center items-center mx-2 my-3 py-3 rounded-full text-gray-100 transition-all transform hover:scale-105 hover:-translate-y-2 md:py-3";

const Signup = ({ Alert, setMessage, setType, error, errors, form, loading, onChange, onSubmit }) => (
    <div id="account/signup" className="container mx-auto">
        <section className="bg-white max-w-lg lg:max-w-2xl mx-auto py-5">
            <h3 className="font-semibold mb-3 mt-6 text-2xl text-center text-primary-500 md:text-3xl">
                Create an Account
            </h3>
            <div className="flex justify-center">
                <div className="inline-flex items-center justify-center text-xl w-1/3 md:text-2xl">
                    <div>
                        <GoogleLogin loading={loading} setMessage={setMessage} setType={setType} />
                    </div>
                    <div>
                        <FacebookLogin loading={loading} setMessage={setMessage} setType={setType} />
                    </div>
                </div>
            </div>
            <p className="my-1 text-sm text-center text-gray-400 tracking-wide sm:text-base">
                or fill in the form below:
            </p>
            <div className="max-w-md mx-auto my-3">
                <Alert cap rounded="md" />
            </div>
            <form className="my-2 px-2 md:px-5" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <section className="mx-2 my-4">
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
                    </section>
                    <section className="mx-2 my-4">
                        <Input
                            disabled={loading}
                            error={errors.firstName || error?.first_name || ""}
                            icon="user-edit"
                            label="first name"
                            name="firstName"
                            onChange={onChange}
                            placeholder="Enter your First Name"
                            required={true}
                            type="text"
                            value={form.firstName || ""}
                        />
                    </section>
                    <section className="mx-2 my-4">
                        <Input
                            disabled={loading}
                            error={
                                errors.middleName || error?.middle_name || ""
                            }
                            icon="user-edit"
                            label="middle name"
                            name="middleName"
                            onChange={onChange}
                            placeholder="Enter your Middle Name"
                            required={true}
                            type="text"
                            value={form.middleName || ""}
                        />
                    </section>
                    <section className="mx-2 my-4">
                        <Input
                            disabled={loading}
                            error={errors.lastName || error?.last_name || ""}
                            icon="user-edit"
                            label="last name"
                            name="lastName"
                            onChange={onChange}
                            placeholder="Enter your Last Name"
                            required={true}
                            type="text"
                            value={form.lastName || ""}
                        />
                    </section>
                    <section className="mx-2 my-4">
                        <Input
                            disabled={loading}
                            error={errors.password1 || error?.password1 || ""}
                            icon="lock"
                            label="password"
                            name="password1"
                            onChange={onChange}
                            placeholder="Enter your password"
                            required={true}
                            type="password"
                            value={form.password1 || ""}
                        />
                    </section>
                    <section className="mx-2 my-4">
                        <Input
                            disabled={loading}
                            error={errors.password2 || error?.password2 || ""}
                            icon="lock"
                            label="confirm password"
                            name="password2"
                            onChange={onChange}
                            placeholder="Enter your password again"
                            required={true}
                            type="password"
                            value={form.password2 || ""}
                        />
                    </section>
                </div>
                <div className="mx-3 mt-8 mb-4">
                    <Button
                        background="primary"
                        className="px-4 py-3 w-full"
                        caps
                        disabled={loading}
                        loader
                        loading={loading}
                        rounded="lg"
                        title={loading ? "signing..." : "sign up"}
                        type="submit"
                    />
                </div>
                {/*<div className="text-center my-2 p-2 w-full">
                    <CustomLink
                        href={LOGIN_PAGE_URL}
                        name="login here"
                        title="already have an account?"
                    />
                </div>*/}
            </form>
        </section>
    </div>
);

export default Signup;
