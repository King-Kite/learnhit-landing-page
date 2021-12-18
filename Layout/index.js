import BaseLayout from "./Base";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const getTitle = (title) => {
    const firstLetter = title[0].toUpperCase();
    const remainders = title.slice(1);
    const capitalizedTitle = firstLetter + remainders;
    return capitalizedTitle;
};

const getFullTitle = (title) => {
    let newWords = [];
    const words = title.split(" ");
    words.forEach((word) => newWords.push(getTitle(word)));
    const capitalizedTitle = newWords.join(" ");
    return capitalizedTitle;
};

const containerStyle = "bg-gray-100 duration-1000 transition-opacity transform";

const Layout = ({ children, title }) => (
    <BaseLayout>
        <Head>
            <title>{title ? getFullTitle(title) : "LearnHit"}</title>
            {/*<link ref="shortcut icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon.png" />*/}
        </Head>
        <Header />
        <main className={`${containerStyle} ` + styles.container}>
            {children}
        </main>
        <Footer />
    </BaseLayout>
);

export default Layout;
