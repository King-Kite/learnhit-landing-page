import Image from "next/image";
import About from "./About";
import Connect from "./Connect";
import Credits from "./Credits";
import Learning from "./Learning";
import More from "./More";
import Subscription from "./Subscription";

const containerStyle =
    "flex flex-wrap px-2 pt-12 pb-10 sm:px-4 md:px-6 lg:pl-16 lg:pr-10";

const Footer = () => (
    <footer
        className="bg-primary-500 bottom-0 relative"
        style={{ zIndex: "45" }}
    >
        <section className={containerStyle}>
            <About />
            <Learning />
            <More />
            <Connect />
            <Subscription />
        </section>
        <div className="flex items-center justify-center mt-3 mb-8">
            <Image
                src="/assets/images/logos/footer-logo.png"
                height={30}
                width={130}
                alt="logo"
            />
        </div>
        <Credits />
    </footer>
);

export default Footer;
