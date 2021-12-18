import Layout from "@/Layout";
import About from "./About";
import Categories from "./Categories";
import Hero from "./Hero";
import Numbers from "../About/Numbers";
import Services from "./Services";
import Testimonials from "../About/Testimonials";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../store/providers";
import { AUTH_REGISTER_RESET } from "../../store/actions/types";
import createAccount from "../../store/actions/auth/createAccount";
import useAlert from "@/hooks/useAlert";

import Container from "../common/ContentContainer";
import FadeInSection from "../common/FadeInSection";
import SignupForm from "../Auth/Signup";

const categories = [
    { title: "language", slug: "0" },
    { title: "information technology (IT)", slug: "1" },
    { title: "health", slug: "2" },
    { title: "personal development", slug: "3" },
    { title: "teaching and academics", slug: "4" },
    { title: "business", slug: "5" },
    { title: "sales and marketing", slug: "6" },
    { title: "engineering and technology", slug: "7" },
    { title: "management", slug: "8" },
];

const Signup = () => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({});

    const { Alert, setMessage, setType } = useAlert();

    const {
        registerState: { data, error, loading },
        registerDispatch,
    } = useContext(GlobalContext);

    const handleChange = ({ target: { name, value } }) => {
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        createAccount({
            ...form,
            first_name: form?.firstName,
            last_name: form?.lastName,
            middle_name: form?.middleName,
        })(registerDispatch);
    };

    useEffect(() => {
        if (error?.error) {
            setMessage(error?.error);
            setType("danger");
        }
    }, [error, setMessage, setType]);

    useEffect(() => {
        return () => {
            setForm({});
            setErrors({});
            registerDispatch({ type: AUTH_REGISTER_RESET });
        };
    }, [registerDispatch]);

    useEffect(() => {
        if (data?.detail) {
            setMessage(data.detail);
            setType("success");
            setForm({});
            setErrors({});
        }
    }, [data, setMessage, setType]);

    return (
        <Container lightTitle="register your account" title=" ">
            <FadeInSection className="w-full" duration={1000} persist>
                <SignupForm
                    Alert={Alert}
                    setMessage={setMessage}
                    setType={setType}
                    error={error}
                    errors={errors}
                    form={form}
                    loading={loading}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </FadeInSection>
        </Container>
    );
};

const Home = () => (
    <Layout>
        <Hero />
        <About />
        <Services />
        <Categories categories={categories} />
        <Numbers />
        <Testimonials />
        <Signup />
    </Layout>
);

export default Home;
