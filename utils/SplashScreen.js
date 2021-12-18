import React from "react";
import Head from "next/head";
import Loader from "../components/common/Loader";

const containerStyle = "bg-center bg-cover bg-fixed bg-no-repeat flex flex-col h-screen items-center justify-center overflow-hidden w-full";

const SplashScreen = ({ title, ...props }) => (
  <>
    <Head>
      <title>{title || "LearnHit"}</title>
    </Head>
    <div className={containerStyle} {...props} style={{
      backgroundImage: "linear-gradient(rgba(69, 98, 44, 0.5), rgba(69, 98, 44, 0.7)), url('/assets/images/learnhit-3.jpg')"
    }}>
      <Loader color="secondary" size="16" style={{ animationDuration: "1.5s" }} width="md" type="dashed" />
    </div>
  </>
);

export default SplashScreen;
