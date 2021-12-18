import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { 
  ABOUT_PAGE_URL, 
  BLOG_PAGE_URL, 
  CATEGORIES_PAGE_URL, 
  CONTACT_PAGE_URL,
  COURSES_PAGE_URL,
  HOME_PAGE_URL
} from "../../config";
import useOutsideClick from "../../hooks/useOutsideClick";
import DesktopNavigation from "./DesktopNavigation";
import GuestLinks from "./GuestLinks";
import MobileNavigation from "./MobileNavigation";
import MenuIcon from "./MenuIcon";
import Search from "./Search";

const containerStyle =
  "bg-transparent container flex h-full items-center justify-between mx-auto py-4 relative w-full pr-2 md:px-4 md:py-5 lg:px-3 xl:px-4";

const Header = () => {
  const { buttonRef, ref, setVisible, visible } = useOutsideClick();
  const searchInput = useOutsideClick();
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      let body = document.getElementById("bodyRoot");
      if (visible === true) body?.classList?.add("overflow-hidden");
      else if (visible === false) body?.classList?.remove("overflow-hidden");
    }

    return () => {
      if (typeof document !== undefined) {
        let body = document.getElementById("bodyRoot");
        body?.classList?.remove("overflow-hidden");
      }
    };
  }, [visible]);

  const links = [
    { active: router.pathname === HOME_PAGE_URL, href: HOME_PAGE_URL, title: "home" },
    {
      active: router.pathname === COURSES_PAGE_URL,
      href: COURSES_PAGE_URL,
      title: "courses",
    },
    {
      active: router.pathname === CATEGORIES_PAGE_URL,
      href: CATEGORIES_PAGE_URL,
      title: "categories",
    },
    { active: router.pathname === BLOG_PAGE_URL, href: BLOG_PAGE_URL, title: "blog" },
    {
      active: router.pathname === CONTACT_PAGE_URL,
      href: CONTACT_PAGE_URL,
      title: "contact us",
    },
    { active: router.pathname === ABOUT_PAGE_URL, href: ABOUT_PAGE_URL, title: "about us" },
  ];

  return (
    <header className="bg-gray-200 fixed w-screen" style={{ zIndex: 100 }}>
      <div className={containerStyle}>
        <div className="flex items-center justify-center h-8 mx-4 relative top-1 w-24 md:mx-0 md:static md:top-0 md:w-32">
          <Link href={HOME_PAGE_URL}>
            <a>
              <Image
                className="cursor-pointer"
                src="/assets/images/logos/header-logo.png"
                height={30}
                width={130}
                alt="brand"
              />
            </a>
          </Link>
        </div>

        <DesktopNavigation links={links} />

        
        <section className="hidden md:flex items-center">
          <GuestLinks />
        </section>
      

        <div className="flex items-center lg:pr-6">
          <section
            ref={searchInput.buttonRef}
            onClick={() => searchInput.setVisible(!searchInput.visible)}
            className="cursor-pointer duration-1000 font-thin px-3 py-2 rounded-full text-primary-500 text-sm transform transition-colors hover:bg-primary-500 hover:text-gray-100 md:text-base"
          >
            <i className="fas fa-search" />
          </section>

          <MenuIcon
            ref={buttonRef}
            onClick={() => setVisible(!visible)}
            visible={visible}
          />
        </div>

        <Search ref={searchInput.ref} visible={searchInput.visible} />
      </div>
      <MobileNavigation
        ref={ref}
        links={links}
        router={router}
        setVisible={setVisible}
        visible={visible}
      />
    </header>
  );
};

export default Header;
