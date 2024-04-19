"use client"
import React from "react";
import SiteConfig from "../../config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const Navbar = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const nav = SiteConfig.nav;

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 navbar bg-base-100 z-[50] transition-all">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="px-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav.map((item) => {
                const url = `/${locale}${item.link}`
                return (
                  <li key={item.id} className="mx-1">
                    {pathname === url ? <Link href={url} className="bg-base-300 rounded-xl">{item.name}</Link> :
                      <Link href={url}>{item.name}</Link>}
                  </li>
                )
              })}
            </ul>
          </div>
          <Link href="/" className="text-xl font-bold">
            {SiteConfig.name}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {nav.map((item) => {
                const url = `/${locale}${item.link}`
                return (
                  <li key={item.id} className="mx-1">
                    {pathname == url ? <Link href={url} className="bg-base-300 rounded-xl">{item.name}</Link> :
                      <Link href={url}>{item.name}</Link>}
                  </li>
                )
              })}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="m-1">
            <a className="rounded-3xl	 text-white font-medium flex p-3 bg-indigo-700 hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200 w-13" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7146597314181193728" target="_blank">سابسکرایب</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;