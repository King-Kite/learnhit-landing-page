import { useCallback, useState } from "react";
import subscribeEmail from "@/store/actions/newsletter";
import useAlert from "@/hooks/useAlert";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const brandStyle = "capitalize text-lg md:text-lg text-gray-100 mb-4";
const containerStyle = "p-2 w-full sm:w-3/4 md:order-1 md:w-1/2 lg:order-3";
const textStyle = "mb-4 text-sm md:text-base text-gray-100 w-5/6 sm:w-full";

const Subscription = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { Alert, setMessage, setType } = useAlert();

    const handleResponse = useCallback((message, type) => {
        setMessage(type === "success" ? "Subscribed Successfully" : "Subscription Failed");
        setType(type);
        if (type === "success") {
            setEmail("");
            setError(null);
        } else {
            setError(message)
        }
        setLoading(false)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        setLoading(true);

        subscribeEmail(email, handleResponse)
    }

    return (
        <section className={containerStyle}>
            <h1 className={brandStyle}>subscribe to our newsletter</h1>
            <p className={textStyle}>
                Sign up to receive email updates on new courses and products,
                announcements, gift ideas, special promotions, sales and more.
            </p>
            <div className="max-w-md my-3">
                <Alert rounded="md" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-full">
                    <Input
                        bordered
                        borderColor="border-primary-500 focus:border-secondary-500"
                        className="rounded-r-md form-input text-sm md:text-base"
                        disabled={loading}
                        error={error}
                        icon="envelope"
                        onChange={({target: {value}}) => {
                            setEmail(value);
                            setError(null)
                        }}
                        placeholder="Enter E-mail"
                        rounded="md"
                        type="email"
                        required
                        value={email}
                    />
                </div>
                <div className="my-4">
                    <Button
                        background="secondary"
                        caps
                        className="px-5 py-3 text-sm md:text-base"
                        disabled={loading}
                        loader
                        loading={loading}
                        rounded="md"
                        title={loading === false ? "subscribe" : "subscribing..."}
                    />
                </div>
            </form>
        </section>
    );
};

export default Subscription;
