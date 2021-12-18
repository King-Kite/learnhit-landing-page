import React from "react";
import FadeInSection from "./FadeInSection";
import styles from "../../styles/Container.module.css";

const brandStyle =
  "capitalize font-semibold inline-block mt-5 mx-2 pb-1 text-center text-primary-500";
const lineStyle =
  "bg-secondary-500 mb-5 rounded-b rounded-sm max-w-xs sm:max-w-md md:max-w-lg";
const textStyle = "text-center text-gray-600 text-sm tracking-wide px-4 md:text-base";
const titleStyle = "flex flex-col justify-center items-center";

const getWidth = (title) => {
  const len = title.length * 9;

  return `${len}px`;
};

const getHeight = (title) => (title.length < 60 ? "0.25rem" : "0.125rem");

const Container = ({
  className,
  children,
  duration,
  headText,
  imClassName,
  persist,
  title,
}) => (
  <section
    className={`container mx-auto ${className || "mt-5 md:mt-6 lg:mt-7"}`}
  >
    <FadeInSection duration={duration || 1000} persist={persist || true}>
      {title && (
        <div className={titleStyle}>
          <div
            className={
              "flex flex-col items-center" +
              (title.length > 60 ? " max-w-2xl mx-auto mt-5" : " ")
            }
          >
            <h1
              className={
                brandStyle +
                ` ${
                  title.length > 60
                    ? "text-lg md:text-xl lg:text-lg"
                    : "text-2xl"
                }`
              }
            >
              {title}
            </h1>
            <div
              className={lineStyle + " " + styles.lineWidth}
              style={{ height: getHeight(title), width: getWidth(title) }}
            />
          </div>
          {headText && <p className={textStyle}>{headText}</p>}
        </div>
      )}

      <div
        className={`${titleStyle && headText ? "mt-6 p-2 lg:mt-2" : ""} ${
          imClassName ? imClassName : ""
        }`}
      >
        {children}
      </div>
    </FadeInSection>
  </section>
);

export default Container;
