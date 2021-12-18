import React, { forwardRef } from "react";
import { DASHBOARD_URL, LOGIN_PAGE_URL, SIGNUP_PAGE_URL } from "../../config";
import Loader from "@/components/common/Loader";
import CustomLink from "./MobileLink";

const containerStyle = `absolute bg-gradient-to-r from-primary-700 via-primary-500 to-primary-300 duration-1000 h-screen lg:hidden transform transition-all w-3/4 sm:w-2/3 md:w-1/2 z-30`;

const MobileNavigation = forwardRef(
  ({ links, router, setVisible, visible }, ref) => {

    return (
      <div
        ref={ref}
        className={`${containerStyle} ${
          visible
            ? " visible -translate-x-0 overflow-scroll"
            : " invisible -translate-x-full"
        }`}
        style={{ opacity: visible ? ".95" : "0" }}
      >
        <ul className="border-b border-gray-100 border-opacity-50 p-2 md:hidden">
            <CustomLink
              active={router.pathname === SIGNUP_PAGE_URL}
              href={SIGNUP_PAGE_URL}
              handleClick={() => setVisible(false)}
              title="sign up"
            />
        </ul>
        <ul className="p-2">
          {links?.map(({ title, ...props }) => {
            const lastLink = links[links?.length - 1];
            return (
              <CustomLink
                key={title}
                handleClick={() => setVisible(false)}
                lastLink={lastLink.title === title}
                title={title}
                {...props}
              />
            );
          })}
        </ul>
      </div>
    );
  }
);


MobileNavigation.displayName = "MobileNavigation";

export default MobileNavigation;
