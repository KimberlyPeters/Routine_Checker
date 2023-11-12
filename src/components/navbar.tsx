import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/nav.module.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

// import Logo from "../../public/logo.svg"

const navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className={styles.nav}>
      <a href="/">
        <Image src="/RoutineIcon.png" width={80} height={200} alt="logo" />
      </a>

      <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        <li>
          <Link href="/#Features">Features</Link>
        </li>
        <li>
          <Link href="/#Team">Team</Link>
        </li>
        <li>
          <Link href="/#About">About Us</Link>
        </li>
        <li>
          <Link href="/#Contact">Contact</Link>
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

export default navbar;
