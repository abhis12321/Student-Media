"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCode,
  faHome,
  faPaperPlane,
  faStaffSnake,
  faUser,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ToggleMode from "./ToggleMode";

export default function NavBar() {
  const handleRight = () => {
    document.querySelector(".right-navbar").classList.toggle("hidden");
    document.querySelector(".cutX").classList.toggle("hidden");
    document.querySelector(".hamberger").classList.toggle("hidden");
  };

  return (
    <div className="sticky top-0 left-0 z-50 w-full bg-gradient-to-b from-gray-400 to-slate-500 dark:from-slate-950 dark:to-black dark:ring-1 ring-gray-700 text-gray-50 font-semibold flex items-center justify-between h-16 px-4 xm:px-8 overflow-hidden">
      <div className="">
        <h1 className="font-bold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-violet-600 w-fit leading-[4rem] overflow-hidden">
          <FontAwesomeIcon icon={faCode} size="sm" className="text-pink-600 pr-1" />
          Coder&apos;media
        </h1>
      </div>

      <div className="right-navbar fixed lg:static top-0 right-0 hidden lg:flex gap-8 bg-gradient-to-r lg:[background:none] from-gray-700 to-gray-600  dark:from-slate-800 dark:to-slate-950 min-h-[100vh] lg:min-h-fit z-10 items-center min-w-[170px] dark:font-normal font-medium">
        <div className="text-4xl py-2 text-center"  >
          <FontAwesomeIcon icon={faXmark} size="sm" className="hidden hover:text-red-800 cursor-pointer cutX" onClick={handleRight}/>
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/"
            className="w-full text-2xl overflow-hidden flex items-center justify-center lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-200/15 hover:ring-2 ring-gray-100 py-4 lg:py-3"
          >
            <FontAwesomeIcon icon={faHome} size="sm"/>
          </Link>
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/students"
            className="w-full text-2xl overflow-hidden flex items-center justify-center lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-200/15 hover:ring-2 ring-gray-100 py-4 lg:py-3 lg:px-[15px]"
          >
            <FontAwesomeIcon icon={faUserGroup} size="sm"/>
          </Link>
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/chat"
            className="w-full text-2xl overflow-hidden flex items-center justify-center lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-200/15 hover:ring-2 ring-gray-100 py-4 lg:py-3 lg:px-[17px]"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="sm"/>
          </Link>
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/login"
            className="w-full text-2xl overflow-hidden flex items-center justify-center lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-200/15 hover:ring-2 ring-gray-100 py-4 lg:py-3 lg:px-[19px]"
          >
            <FontAwesomeIcon icon={faUser} size="sm"/>
          </Link>
        </div>
        <ToggleMode />
      </div>

      <div className="lg:hidden text-3xl py-2">
        <FontAwesomeIcon
          icon={faBars}
          size="sm"
          className="hamberger cursor-pointer text-gray-50 dark:text-gray-400"
          onClick={handleRight}
        />
      </div>
    </div>
  );
}
