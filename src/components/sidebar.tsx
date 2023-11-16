import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/helpers/firebase";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Sidebar = () => {
  const [asideOpen, setAsideOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [logOutLoading, setLogOutLoading] = useState(false);
  const router = useRouter();

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };
  const handleLogOut = () => {
    setLogOutLoading(true);
    auth
      .signOut()
      .then(() => {
        toast.success("User logged out");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      })
      .catch((error) => {
        toast.error("Log-out error:", error);
      });
  };

  return (
    <>
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <button type="button" className="text-3xl" onClick={toggleAside}>
            <AiOutlineMenu />
          </button>
          <Link href="/">
            <Image
              className="m-1"
              src="/RoutineIcon.png"
              width={80}
              height={200}
              alt="logo"
            />
          </Link>
          {/* <div className={Logo}>Logo</div> */}
        </div>
        <div className="xl:w-96">
          <form className="search-form relative flex flex-wrap items-center w-full ">
            <input
              className="input-bar relative flex-auto min-w-0 block w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  dark:text-gray-100  border border-solid border-gray-300 dark:border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white dark:bg-gray-800  focus:border-b dark:border-gray-700lue-600 focus:outline-none"
              placeholder="search task"
            />
            <button className="search-button btn i px-6 py-2.5 bg-blue-600 dark:bg-blue-300 dark:hover:bg-blue-400  dark:text-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
              Search
            </button>
          </form>
        </div>
        <div>
          <button
            type="button"
            onClick={toggleProfile}
            className="h-9 w-9 overflow-hidden rounded-full"
          >
            {auth.currentUser && auth.currentUser.photoURL && (
              <img src={auth.currentUser.photoURL} alt="User" />
            )}
          </button>
          {profileOpen && (
            <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
              <div className="flex items-center space-x-2 p-2">
                {auth.currentUser?.photoURL && (
                  <img
                    src={auth.currentUser.photoURL}
                    alt="plchldr.co"
                    className="h-9 w-9 rounded-full"
                  />
                )}

                <div className="font-medium">
                  {auth.currentUser
                    ? auth.currentUser.displayName || "user name"
                    : "user"}
                </div>
              </div>

              <div className="p-2">
                <button
                  type="submit"
                  className="flex items-center space-x-2 transition hover:text-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogOut();
                  }}
                >
                  {logOutLoading ? <Spinner /> : "Log Out"}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <aside
        className={`flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 ${
          asideOpen ? "" : "hidden"
        }`}
        style={{ height: "90.5vh" }}
      >
        <Link
          href="/"
          className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-home"></i>
          </span>
          <span>Dashboard</span>
        </Link>

        <Link
          href="/Task"
          className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-calendar-event"></i>
          </span>
          <span>Task</span>
        </Link>

        <Link
          href="/Pomodoro"
          className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-time-five"></i>
          </span>
          <span>Pomodoro Timer</span>
        </Link>

        <a
          href="#"
          className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-user-check"></i>
          </span>
          <span>Assign task</span>
        </a>

        <Link
          href="#"
          className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span className="text-2xl">
            <i className="bx bx-user"></i>
          </span>
          <span>Profile</span>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
