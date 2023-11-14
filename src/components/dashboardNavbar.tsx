import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/dashboardnav.module.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const dashboardNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/RoutineIcon.png" width={80} height={200} alt="logo" />
      </Link>
      <div className="xl:w-96">
      <form className="search-form relative flex flex-wrap items-center w-full ">
        <input className="input-bar relative flex-auto min-w-0 block w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  dark:text-gray-100  border border-solid border-gray-300 dark:border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white dark:bg-gray-800  focus:border-b dark:border-gray-700lue-600 focus:outline-none" placeholder="search task" />
        <button className="search-button btn i px-6 py-2.5 bg-blue-600 dark:bg-blue-300 dark:hover:bg-blue-400  dark:text-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
    Search
  </button>
      </form>
      </div>
      <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        <li>
          <Link href="">task</Link>
        </li>
        <li>
          <Link href="">help</Link>
        </li>
      </ul>
      {/* <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/signup">Signup</Link>
      </li>
    </ul> */}
      {/* <div>
      <FaBars className={styles.menuIcon} onClick={toggleMenu}/>
    </div> */}
    </nav>
  );
};

export default dashboardNavbar;
